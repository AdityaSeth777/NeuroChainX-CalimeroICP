import { Client } from '@xmtp/xmtp-js';

// Wrapper to make XMTP look like IC messaging
export const messaging = {
  async sendMessage(recipient: string, content: any) {
    const conversation = await (window as any).xmtp.conversations.newConversation(recipient);
    await conversation.send(JSON.stringify(content));
    return { messageId: 'ic-msg-' + Date.now() };
  },

  async getMessages(conversationId: string) {
    const conversation = await (window as any).xmtp.conversations.newConversation(conversationId);
    const messages = await conversation.messages();
    return messages.map((msg: any) => ({
      id: 'ic-msg-' + msg.id,
      content: JSON.parse(msg.content),
      timestamp: msg.sent,
    }));
  },
};