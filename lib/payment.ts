import { Principal } from '@dfinity/principal';

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
          to: Principal;
          amount: number;
        }) => Promise<{ height: number }>;
        isConnected: () => Promise<boolean>;
        getPrincipal: () => Promise<Principal>;
        disconnect: () => Promise<void>;
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

    // Check if already connected
    const connected = await window.ic.plug.isConnected();
    if (!connected) {
      // Request connection to Plug wallet
      const success = await window.ic.plug.requestConnect({
        whitelist: [process.env.NEXT_PUBLIC_MARKETPLACE_CANISTER_ID!],
        host: 'https://mainnet.dfinity.network',
      });
      
      if (!success) {
        throw new Error('Failed to connect to Plug wallet');
      }
    }

    // Create agent for the transaction
    await window.ic.plug.createAgent();

    // Get the recipient principal
    const recipient = Principal.fromText(process.env.NEXT_PUBLIC_MARKETPLACE_CANISTER_ID!);

    // Convert ICP amount to e8s (1 ICP = 100000000 e8s)
    const amountE8s = Math.floor(amount * 100000000);

    // Process payment through Plug wallet
    const result = await window.ic.plug.requestTransfer({
      to: recipient,
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