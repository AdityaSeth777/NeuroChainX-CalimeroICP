# AI Model Training Marketplace on Internet Computer

A decentralized marketplace for AI training datasets built with Next.js and Internet Computer Protocol (ICP). The platform leverages ICP's robust infrastructure for secure transactions and Calimero for encrypted data storage.

## 🚀 Features

- 🔐 Secure dataset storage with Calimero encryption
- 💰 Native ICP payments via Plug wallet
- 🤖 AI model integration
- 🎨 Modern UI with neural network animations
- 🔒 Decentralized authentication
- 📱 Responsive design
- 🔥 Custom fiery cursor
- ✨ Parallax scrolling effects

## 🛠 Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Blockchain**: Internet Computer Protocol (ICP)
- **Storage**: Calimero SDK
- **Authentication**: Internet Identity
- **Smart Contracts**: Rust
- **Wallet**: Plug

## 🏗 Architecture

### Frontend (Next.js)
- Modern React with TypeScript
- Neural network-themed UI components
- Client-side ICP integration
- Responsive Tailwind CSS design
- Custom animations and effects

### Backend (Internet Computer)
- Rust-based canisters
- Smart contract logic for:
  - Dataset management
  - Payment processing
  - Access control
- Calimero integration for encrypted storage

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Internet Computer
IC_HOST=https://ic0.app
IC_CANISTER_ID=your_canister_id

# Calimero
CALIMERO_API_KEY=your_api_key
CALIMERO_PROJECT_ID=your_project_id
```

3. Install Plug Wallet:
   - Visit [Plug Wallet](https://plugwallet.ooo/)
   - Install the browser extension
   - Create or import your wallet
   - Add ICP tokens to your wallet

4. Start development server:
```bash
npm run dev
```

## 💳 Using Plug Wallet

1. Install the Plug wallet extension from [plugwallet.ooo](https://plugwallet.ooo/)
2. Create a new wallet or import existing one
3. Fund your wallet with ICP tokens
4. Connect your wallet to the marketplace
5. Purchase datasets seamlessly with one-click transactions

## 🔐 Security Features

- End-to-end encryption with Calimero
- Secure authentication via Internet Identity
- Smart contract-based access control
- Encrypted data storage and transfer
- Secure wallet integration

## 📦 Smart Contract Development

1. Install Rust toolchain:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. Install DFX:
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

3. Deploy canisters:
```bash
dfx deploy --network ic
```

## 🌍 Production Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to IC:
```bash
dfx deploy --network ic
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License