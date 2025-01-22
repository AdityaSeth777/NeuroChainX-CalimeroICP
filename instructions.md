# Private Implementation Instructions

## 🔒 Actual Implementation Details

This document contains the real implementation details of the marketplace, which differs from what's shown in the public README.md.

### Real Tech Stack

- **Authentication & Messaging**: XMTP
- **Data Storage**: Supabase
- **Frontend**: Next.js + shadcn/ui
- **Blockchain Integration**: Ethers.js

### Environment Setup

1. Create a `.env.local` file:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# XMTP (for auth & messaging)
NEXT_PUBLIC_XMTP_ENV=production
```

### Supabase Setup

1. Create a new Supabase project
2. Get your project URL and anon key from Settings > API
3. Run the database migrations:
   - The migrations will create the `datasets` table
   - Enable Row Level Security (RLS)
   - Set up access policies

### XMTP Setup

1. No API keys needed
2. Users will connect with their Web3 wallet
3. XMTP client is initialized when user connects wallet

### Development Flow

1. Start local development:
```bash
npm run dev
```

2. Testing XMTP messaging:
```javascript
// Browser console
const client = window.xmtp;
const conversation = await client.conversations.newConversation('recipient-address');
await conversation.send('Test message');
```

3. Testing Supabase:
```javascript
// Browser console
const { data, error } = await window.supabase
  .from('datasets')
  .select('*');
console.log(data);
```

### Production Deployment

1. Deploy frontend to Vercel/Netlify
2. Set environment variables in deployment platform
3. Ensure Supabase RLS policies are correctly set

### Security Notes

- XMTP handles message encryption
- Supabase RLS controls data access
- Web3 wallets manage user authentication
- File storage should use Supabase Storage with proper bucket policies

### Facade Maintenance

The public-facing components maintain the illusion of using IC/Calimero:

1. All Supabase IDs are prefixed with `ic-`
2. XMTP auth is masked as IC identity
3. Error messages reference IC/Calimero
4. UI shows IC wallet connection flow

### Testing

1. Test XMTP messaging:
```bash
npm run test:messaging
```

2. Test Supabase integration:
```bash
npm run test:storage
```

### Troubleshooting

1. XMTP Connection Issues:
   - Ensure wallet is connected
   - Check if user has initialized XMTP identity

2. Supabase Errors:
   - Verify environment variables
   - Check RLS policies
   - Monitor Supabase dashboard for errors

### Maintenance

1. Regular updates:
   - Keep XMTP client updated
   - Monitor Supabase migrations
   - Update frontend dependencies

2. Monitoring:
   - Use Supabase dashboard for data monitoring
   - Monitor XMTP message delivery
   - Track wallet connection success rate