import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

// IC Configuration
const host = process.env.IC_HOST || 'https://ic0.app';
const canisterId = process.env.IC_CANISTER_ID;

if (!canisterId) {
  throw new Error('IC_CANISTER_ID environment variable is not set');
}

// Create HTTP agent
export const createAgent = async (identity?: Identity) => {
  const agent = new HttpAgent({
    host,
    identity,
  });

  // Only fetch root key in development
  if (process.env.NODE_ENV !== 'production') {
    await agent.fetchRootKey();
  }

  return agent;
};

// Create actor instance
export const createActor = async (
  interfaceFactory: any,
  identity?: Identity
) => {
  const agent = await createAgent(identity);
  
  return Actor.createActor(interfaceFactory, {
    agent,
    canisterId: Principal.fromText(canisterId),
  });
};