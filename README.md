# Web3 AI Model Training Marketplace

A production-ready decentralized marketplace for AI training datasets built with Next.js, Internet Computer Protocol (ICP), and Calimero SDK.

## 🚀 Quick Start

### Prerequisites

1. Install Node.js (v16 or later)
2. Install DFX (Internet Computer SDK):
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```
3. Install Rust toolchain:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Environment Setup

1. Clone the repository
2. Create a `.env.local` file:
```bash
# Internet Computer
IC_HOST=https://ic0.app
IC_CANISTER_ID=your_canister_id
IC_IDENTITY_PEM=your_identity_pem

# Calimero SDK
CALIMERO_API_KEY=your_api_key
CALIMERO_PROJECT_ID=your_project_id
```

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Deploy smart contracts (requires dfx):
```bash
dfx deploy
```

## 🏗 Architecture

### Frontend (Next.js)
- Modern React with TypeScript
- Dark theme by default
- Responsive Tailwind CSS design
- shadcn/ui components
- Client-side IC integration

### Backend (Internet Computer)
- Rust-based canisters
- Smart contract logic for:
  - Dataset management
  - Payment processing
  - Access control

### Data Security (Calimero SDK)
- End-to-end encryption
- Secure key management
- Access control integration

## 🔐 Security Setup

### Internet Computer Integration

1. Generate a new identity:
```bash
dfx identity new development
dfx identity use development
```

2. Export the identity:
```bash
dfx identity export development > identity.pem
```

3. Deploy canisters:
```bash
dfx deploy --network ic
```

### Calimero SDK Setup

1. Create a Calimero account at https://calimero.network
2. Generate API credentials
3. Add to environment variables

## 🌍 Global Deployment

### Frontend Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to your preferred hosting (Vercel/Netlify):
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

### Smart Contract Deployment

1. Prepare for production:
```bash
dfx build --network ic
```

2. Deploy to IC mainnet:
```bash
dfx deploy --network ic
```

3. Update environment variables with production canister IDs

## 🔧 Configuration

### Internet Computer
- Network: `ic` (mainnet) or `local` (development)
- Identity management
- Canister settings

### Calimero SDK
- Encryption settings
- Access control policies
- Key rotation policies

## 📦 Features

- 🎨 Dark theme by default
- 🔒 End-to-end encryption
- 💰 ICP payment integration
- 📊 Dataset marketplace
- 🤖 AI model integration
- 🔑 Access control
- 📱 Responsive design

## 🛠 Development Guidelines

1. Smart Contract Development
   - Write tests for all canisters
   - Use proper error handling
   - Implement access control

2. Frontend Development
   - Follow Next.js best practices
   - Maintain type safety
   - Use proper error boundaries

3. Security
   - Regular security audits
   - Key rotation
   - Access control testing

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## ⚠️ Important Notes

- Always backup encryption keys
- Keep environment variables secure
- Regular security updates
- Monitor smart contract activity