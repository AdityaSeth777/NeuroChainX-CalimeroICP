import { Principal } from '@dfinity/principal';
import { Actor } from '@dfinity/agent';
import { initializeAgent } from './ic-agent';

interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

declare global {
  interface Window {
    ic?: {
      plug?: {
        requestConnect: () => Promise<boolean>;
        createAgent: () => Promise<any>;
        requestTransfer: (params: {
          to: string;
          amount: number;
        }) => Promise<{ height: number }>;
      };
    };
  }
}

export const processPayment = async (
  datasetId: string,
  amount: number,
  buyerId: string
): Promise<PaymentResult> => {
  try {
    // Check if Plug wallet is available
    if (!window.ic?.plug) {
      throw new Error('Plug wallet not found. Please install the Plug wallet extension.');
    }

    // Request connection to Plug wallet
    const connected = await window.ic.plug.requestConnect();
    if (!connected) {
      throw new Error('Failed to connect to Plug wallet');
    }

    // Create agent for the transaction
    await window.ic.plug.createAgent();

    // Convert ICP amount to e8s (1 ICP = 100000000 e8s)
    const amountE8s = Math.floor(amount * 100000000);

    // Process payment through Plug wallet
    const result = await window.ic.plug.requestTransfer({
      to: process.env.NEXT_PUBLIC_MARKETPLACE_CANISTER_ID || '',
      amount: amountE8s,
    });

    return {
      success: true,
      transactionId: result.height.toString(),
    };
  } catch (error) {
    console.error('Payment processing error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};