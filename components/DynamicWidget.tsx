'use client';

import { DynamicContextProvider, DynamicWidget as DynamicWidgetCore } from '@dynamic-labs/sdk-react-core';

const settings = {
  environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
  walletConnectors: [
    // Define wallet connectors as strings instead of functions
    'metamask',
    'coinbase',
    'walletconnect',
    'phantom',
    'brave',
    'ledger',
    'trust',
    'rainbow',
    // Add more wallets as needed
  ],
  walletConnectorOptions: {
    showQrModal: true,
    showAllWallets: true,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  },
  evmNetworks: [
    { chainId: 1, name: 'Ethereum' },
    { chainId: 137, name: 'Polygon' },
    { chainId: 56, name: 'BNB Chain' },
    { chainId: 42161, name: 'Arbitrum' },
    { chainId: 10, name: 'Optimism' },
    { chainId: 43114, name: 'Avalanche' }
  ],
  settings: {
    walletList: {
      displayAllWallets: true,
      searchable: true
    }
  }
};

export function DynamicWidget() {
  return (
    <DynamicContextProvider settings={settings}>
      <DynamicWidgetCore
        innerButtonComponent={<span>Connect Wallet</span>}
        variant="modal"
      />
    </DynamicContextProvider>
  );
}