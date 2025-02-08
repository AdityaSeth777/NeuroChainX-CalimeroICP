/*
  # Add transaction and dataset access tables

  1. New Tables
    - `transactions`
      - `id` (uuid, primary key)
      - `dataset_id` (uuid, references datasets)
      - `buyer_id` (text, references auth.users)
      - `amount` (numeric)
      - `status` (text)
      - `created_at` (timestamptz)
    - `dataset_access`
      - `id` (uuid, primary key)
      - `dataset_id` (uuid, references datasets)
      - `user_id` (text, references auth.users)
      - `expires_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  dataset_id uuid REFERENCES datasets(id) ON DELETE CASCADE,
  buyer_id text REFERENCES auth.users(id),
  amount numeric NOT NULL,
  status text NOT NULL CHECK (status IN ('processing', 'completed', 'failed')),
  created_at timestamptz DEFAULT now()
);

-- Create dataset_access table
CREATE TABLE IF NOT EXISTS dataset_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  dataset_id uuid REFERENCES datasets(id) ON DELETE CASCADE,
  user_id text REFERENCES auth.users(id),
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE dataset_access ENABLE ROW LEVEL SECURITY;

-- Transaction policies
CREATE POLICY "Users can view their own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = buyer_id);

CREATE POLICY "Users can create their own transactions"
  ON transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = buyer_id);

-- Dataset access policies
CREATE POLICY "Users can view their own dataset access"
  ON dataset_access
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can create dataset access when they own the transaction"
  ON dataset_access
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid()::text = user_id AND
    EXISTS (
      SELECT 1 FROM transactions
      WHERE dataset_id = dataset_access.dataset_id
      AND buyer_id = auth.uid()::text
      AND status = 'completed'
    )
  );