import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Wrapper to make Supabase look like IC/Calimero
export const storage = {
  async storeDataset(data: any) {
    const { data: result, error } = await supabase
      .from('datasets')
      .insert(data)
      .select()
      .single();
      
    if (error) throw error;
    return { canisterId: 'ic-' + result.id }; // Fake IC canister ID
  },

  async getDataset(id: string) {
    const realId = id.replace('ic-', '');
    const { data, error } = await supabase
      .from('datasets')
      .select('*')
      .eq('id', realId)
      .single();
      
    if (error) throw error;
    return {
      ...data,
      canisterId: 'ic-' + data.id,
    };
  },

  async listDatasets() {
    const { data, error } = await supabase
      .from('datasets')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data.map(d => ({
      ...d,
      canisterId: 'ic-' + d.id,
    }));
  },
};