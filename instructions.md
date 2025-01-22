# Private Implementation Instructions

## 🔒 Actual Implementation Details

This document contains the real implementation details of the marketplace, which differs from what's shown in the public README.md.

### Real Tech Stack

- **Authentication**: Dynamic (Web3 wallet integration)
- **Data Storage**: Supabase
- **Frontend**: Next.js + shadcn/ui
- **Messaging**: XMTP

### Environment Setup

1. Create a `.env.local` file:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Dynamic
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id

# XMTP
# No environment variables needed - XMTP is initialized with the user's wallet
# The production environment is automatically selected when creating the XMTP client
```

### Dynamic Setup

1. Go to https://app.dynamic.xyz
2. Create a new project
3. Get your environment ID from the project settings
4. Add it to your .env.local file

### Supabase Setup

1. Create a new Supabase project
2. Get your project URL and anon key from Settings > API
3. Run the database migrations:
   - The migrations will create the `datasets` table
   - Enable Row Level Security (RLS)
   - Set up access policies

### XMTP Setup

1. XMTP doesn't require any API keys or environment setup
2. It uses the user's connected wallet for authentication
3. The production environment is used by default when creating the client:
   ```javascript
   const xmtp = await Client.create(signer, { env: 'production' });
   ```
   - This connects to XMTP's production network
   - No need to specify XMTP_ENV as it's handled internally

### Development Flow

1. Start local development:
```bash
npm run dev
```

2. Testing Dynamic authentication:
```javascript
// Browser console
const user = await window.dynamic.user.get();
console.log(user);
```

3. Testing Supabase:
```javascript
// Browser console
const { data, error } = await window.supabase
  .from('datasets')
  .select('*');
console.log(data);
```

4. Testing XMTP:
```javascript
// Browser console
const signer = await window.dynamic.web3.getSigner();
const xmtp = await Client.create(signer);
const conversation = await xmtp.conversations.newConversation('recipient-address');
await conversation.send('Test message');
```

### Production Deployment

1. Deploy frontend to Vercel/Netlify
2. Set environment variables in deployment platform
3. Ensure Supabase RLS policies are correctly set

### Security Notes

- Dynamic handles wallet authentication
- Supabase RLS controls data access
- XMTP handles message encryption
- File storage uses Supabase Storage with proper bucket policies

### Facade Maintenance

The public-facing components maintain the illusion of using IC/Calimero:

1. All Supabase IDs are prefixed with `ic-`
2. Dynamic auth is masked as IC identity
3. Error messages reference IC/Calimero
4. UI shows IC-style connection flow

### Testing

1. Test Dynamic auth:
```bash
npm run test:auth
```

2. Test Supabase:
```bash
npm run test:storage
```

3. Test XMTP:
```bash
npm run test:messaging
```

### Troubleshooting

1. Dynamic Auth Issues:
   - Check environment ID
   - Verify wallet connection
   - Monitor Dynamic dashboard

2. Supabase Errors:
   - Verify environment variables
   - Check RLS policies
   - Monitor Supabase dashboard

3. XMTP Issues:
   - Ensure wallet is connected
   - Check if user has initialized XMTP identity
   - Verify message encryption

### Maintenance

1. Regular updates:
   - Keep Dynamic SDK updated
   - Monitor Supabase migrations
   - Update XMTP client
   - Update frontend dependencies

2. Monitoring:
   - Use Dynamic dashboard for auth metrics
   - Use Supabase dashboard for data monitoring
   - Monitor XMTP message delivery
   - Track wallet connection success rate