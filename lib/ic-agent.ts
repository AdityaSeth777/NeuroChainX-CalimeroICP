import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';

let agent: HttpAgent | null = null;

export const initializeAgent = async () => {
  const authClient = await AuthClient.create();
  const identity = authClient.getIdentity();

  agent = new HttpAgent({
    identity,
    host: process.env.NEXT_PUBLIC_IC_HOST || 'https://ic0.app',
  });

  if (process.env.NODE_ENV !== 'production') {
    await agent.fetchRootKey();
  }

  return agent;
};

export const getAgent = () => {
  if (!agent) {
    throw new Error('Agent not initialized. Call initializeAgent first.');
  }
  return agent;
};

export const createActor = <T>(
  canisterId: string,
  idlFactory: any
): T => {
  const agent = getAgent();
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
};