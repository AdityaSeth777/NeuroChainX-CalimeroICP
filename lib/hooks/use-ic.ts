import { useCallback, useEffect, useState } from 'react';
import { createActor } from '../ic-config';
import { _SERVICE } from '../../declarations/marketplace/marketplace.did';

export function useIC() {
  const [actor, setActor] = useState<_SERVICE | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const marketplaceActor = await createActor();
        setActor(marketplaceActor);
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
      return await actor.register_dataset(title, description, price, encryptedUrl, category);
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