'use client';

import { DynamicContextProvider, DynamicWidget as DynamicWidgetCore } from '@dynamic-labs/sdk-react-core';

export function DynamicWidget() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
      }}
    >
      <DynamicWidgetCore />
    </DynamicContextProvider>
  );
}