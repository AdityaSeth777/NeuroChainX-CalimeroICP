/*
  # Initial Schema Setup

  1. New Tables
    - datasets
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - price (numeric)
      - category (text)
      - owner_id (text)
      - file_url (text)
      - created_at (timestamp)
    
  2. Security
    - Enable RLS on datasets table
    - Add policies for data access
*/

CREATE TABLE IF NOT EXISTS datasets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  owner_id text NOT NULL,
  file_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE datasets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read datasets"
  ON datasets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can insert their own datasets"
  ON datasets
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = owner_id);