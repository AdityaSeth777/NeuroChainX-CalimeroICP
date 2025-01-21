# Web3 AI Model Training Marketplace

A decentralized marketplace for AI training datasets built with Next.js, Internet Computer Protocol (ICP), and Rust CDK.

## Features

- Secure dataset storage using Calimero SDK
- ICP smart contract integration for secure payments
- PyTorch integration for AI model training
- Modern, responsive UI with Tailwind CSS
- Form validation and type safety with Zod
- Comprehensive marketplace features

## Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Smart Contract Setup

### Prerequisites

1. Install Rust and Cargo:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. Install the IC SDK:
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

3. Install the Calimero SDK for dataset encryption:
```bash
cargo install calimero-sdk
```

### Smart Contract Development

1. Navigate to the `contracts` directory:
```bash
cd contracts
```

2. Build the smart contracts:
```bash
cargo build --target wasm32-unknown-unknown --release
```

3. Deploy to the Internet Computer:
```bash
dfx deploy
```

## Project Structure

```
├── app/                    # Next.js pages and components
│   ├── marketplace/       # Dataset marketplace
│   ├── upload/           # Dataset upload
│   └── page.tsx          # Landing page
├── components/            # Reusable UI components
├── contracts/            # Rust smart contracts
│   ├── src/             # Contract source code
│   └── Cargo.toml       # Rust dependencies
└── public/               # Static assets
```

## Smart Contract Architecture

The smart contracts handle:

1. Dataset Registration
- Register new datasets with metadata
- Set pricing and access controls
- Handle dataset encryption keys

2. Payment Processing
- Process ICP payments
- Transfer tokens between buyers and sellers
- Handle escrow for secure transactions

3. Access Control
- Manage dataset access permissions
- Handle key distribution
- Implement time-based access controls

## Security Considerations

1. Dataset Security
- All datasets are encrypted using the Calimero SDK
- Keys are managed through secure smart contracts
- Access is granted only after successful payment

2. Payment Security
- Smart contracts handle all financial transactions
- Escrow system protects both buyers and sellers
- Automatic payment distribution

3. Access Control
- Role-based access control
- Time-limited dataset access
- Revocation capabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License