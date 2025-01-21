import { CalimeroSDK } from '@calimero/sdk';

if (!process.env.CALIMERO_API_KEY || !process.env.CALIMERO_PROJECT_ID) {
  throw new Error('Calimero environment variables are not set');
}

// Initialize Calimero SDK
export const calimero = new CalimeroSDK({
  apiKey: process.env.CALIMERO_API_KEY,
  projectId: process.env.CALIMERO_PROJECT_ID,
});

// Dataset encryption
export const encryptDataset = async (data: ArrayBuffer) => {
  return await calimero.encrypt(data);
};

// Dataset decryption
export const decryptDataset = async (encryptedData: ArrayBuffer) => {
  return await calimero.decrypt(encryptedData);
};

// Access control
export const grantAccess = async (datasetId: string, userId: string) => {
  return await calimero.grantAccess({
    datasetId,
    userId,
    expiresIn: '30d', // 30 days access by default
  });
};

// Revoke access
export const revokeAccess = async (datasetId: string, userId: string) => {
  return await calimero.revokeAccess({
    datasetId,
    userId,
  });
};