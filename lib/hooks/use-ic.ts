import { useCallback, useEffect, useState } from 'react';
import { initializeAgent, createActor } from '../ic-agent';
import { AuthClient } from '@dfinity/auth-client';
import { Principal } from '@dfinity/principal';

// This would come from your build process
const canisterId = process.env.NEXT_PUBLIC_IC_CANISTER_ID || 'rrkah-fqaaa-aaaaa-aaaaq-cai';

interface Dataset {
  id: string;
  owner: Principal;
  title: string;
  description: string;
  price: bigint;
  encrypted_url: string;
  category: string;
  created_at: bigint;
}

interface MarketplaceActor {
  register_dataset: (
    title: string,
    description: string,
    price: bigint,
    encrypted_url: string,
    category: string
  ) => Promise<string>;
  get_dataset: (id: string) => Promise<Dataset | undefined>;
  list_datasets: () => Promise<Dataset[]>;
  purchase_dataset: (dataset_id: string) => Promise<void>;
}

export function useIC() {
  const [actor, setActor] = useState<MarketplaceActor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const authClient = await AuthClient.create();
        if (authClient.isAuthenticated()) {
          const agent = await initializeAgent();
          const marketplaceActor = createActor<MarketplaceActor>(
            canisterId,
            // This would be your generated IDL factory
            {} as any
          );
          setActor(marketplaceActor);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize IC actor'));
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const registerDataset = useCallback(
    async (
      title: string,
      description: string,
      price: bigint,
      encryptedUrl: string,
      category: string
    ) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.register_dataset(
        title,
        description,
        price,
        encryptedUrl,
        category
      );
    },
    [actor]
  );

  const purchaseDataset = useCallback(
    async (datasetId: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.purchase_dataset(datasetId);
    },
    [actor]
  );

  return {
    actor,
    loading,
    error,
    registerDataset,
    purchaseDataset,
  };
}