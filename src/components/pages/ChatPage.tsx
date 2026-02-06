import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import {
  Send,
  Paperclip,
  Smile,
  Search,
  MoreVertical,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';

interface ChatPageProps {
  onNavigate?: (page: string) => void;
}

interface Message {
  id: number;
  sender: 'user' | 'admin' | 'mentor';
  name: string;
  avatar: string;
  content: string;
  timestamp: string;
  role?: string;
}

interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
  unread?: number;
}

export function ChatPage({ onNavigate: _onNavigate }: ChatPageProps) {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const contacts: ChatContact[] = [
    {
      id: 1,
      name: 'Admin Support',
      avatar: '🛡️',
      role: 'Admin',
      lastMessage: 'How can I help you today?',
      timestamp: '2m ago',
      online: true,
      unread: 2,
    },
    {
      id: 2,
      name: 'Dev Mentor - Sarah',
      avatar: '👩‍💻',
      role: 'Mentor',
      lastMessage: 'Great work on your smart contract!',
      timestamp: '1h ago',
      online: true,
    },
    {
      id: 3,
      name: 'Creator Mentor - Alex',
      avatar: '🎨',
      role: 'Mentor',
      lastMessage: 'Your article draft looks good',
      timestamp: '3h ago',
      online: false,
    },
    {
      id: 4,
      name: 'Community Manager',
      avatar: '🌟',
      role: 'Staff',
      lastMessage: 'Welcome to the community!',
      timestamp: '1d ago',
      online: true,
    },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'admin',
      name: 'Admin Support',
      avatar: '🛡️',
      content: 'Hello! Welcome to Mancave support. How can I assist you today?',
      timestamp: '10:30 AM',
      role: 'Admin',
    },
    {
      id: 2,
      sender: 'user',
      name: 'You',
      avatar: '🎯',
      content: 'Hi! I have a question about completing the smart contract quest.',
      timestamp: '10:32 AM',
    },
    {
      id: 3,
      sender: 'admin',
      name: 'Admin Support',
      avatar: '🛡️',
      content: 'Of course! What specific part of the quest are you working on?',
      timestamp: '10:33 AM',
      role: 'Admin',
    },
    {
      id: 4,
      sender: 'user',
      name: 'You',
      avatar: '🎯',
      content: 'I\'m trying to deploy my contract to the testnet but getting an error.',
      timestamp: '10:35 AM',
    },
    {
      id: 5,
      sender: 'admin',
      name: 'Admin Support',
      avatar: '🛡️',
      content: 'Let me help you with that. First, make sure you have testnet tokens in your wallet. You can get them from our faucet in the Resources section. Then, check that your RPC endpoint is configured correctly.',
      timestamp: '10:36 AM',
      role: 'Admin',
    },
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        name: 'You',
        avatar: '🎯',
        content: messageInput,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');

      // Simulate response
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          sender: 'admin',
          name: 'Admin Support',
          avatar: '🛡️',
          content: 'Thanks for that information. Let me look into this for you.',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          role: 'Admin',
        };
        setMessages(prev => [...prev, response]);
      }, 1500);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedContact = contacts.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
        <Card className="bg-[#0a0a0a] border-[#0AF3FF]/20 h-full flex overflow-hidden">
          {/* Contacts Sidebar */}
          <div className="w-80 border-r border-[#0AF3FF]/20 flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-[#0AF3FF]/20">
              <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#1a1a1a] border-[#0AF3FF]/20 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Contacts List */}
            <ScrollArea className="flex-1">
              <div className="p-2">
                {filteredContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedChat(contact.id)}
                    className={`p-3 rounded-xl cursor-pointer transition-all mb-2 ${
                      selectedChat === contact.id
                        ? 'bg-[#0AF3FF]/10 border border-[#0AF3FF]/30'
                        : 'hover:bg-[#1a1a1a]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center text-2xl">
                          {contact.avatar}
                        </div>
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white text-sm font-medium truncate">
                            {contact.name}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {contact.timestamp}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-400 truncate">
                            {contact.lastMessage}
                          </p>
                          {contact.unread && (
                            <Badge className="bg-[#0AF3FF] text-black text-xs px-2 py-0 ml-2">
                              {contact.unread}
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant="outline"
                          className="border-[#0AF3FF]/30 text-[#0AF3FF] text-xs mt-1"
                        >
                          {contact.role}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            {selectedContact && (
              <div className="p-4 border-b border-[#0AF3FF]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center text-xl">
                      {selectedContact.avatar}
                    </div>
                    {selectedContact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      {selectedContact.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {selectedContact.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            )}

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0AF3FF] to-[#0880FF] flex items-center justify-center text-lg flex-shrink-0">
                      {message.avatar}
                    </div>
                    <div className={`flex-1 max-w-md ${
                      message.sender === 'user' ? 'items-end' : 'items-start'
                    } flex flex-col`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-gray-400">
                          {message.name}
                        </span>
                        {message.role && (
                          <Badge className="bg-[#0AF3FF]/20 text-[#0AF3FF] text-xs px-2 py-0 flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            {message.role}
                          </Badge>
                        )}
                        <span className="text-xs text-gray-500">
                          {message.timestamp}
                        </span>
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-[#0AF3FF] text-black'
                          : 'bg-[#1a1a1a] text-white'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-[#0AF3FF]/20">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Smile className="w-5 h-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-[#1a1a1a] border-[#0AF3FF]/20 text-white placeholder:text-gray-500"
                />
                <Button
                  className="bg-[#0AF3FF] text-black hover:bg-[#0AF3FF]/90"
                  onClick={handleSendMessage}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Get help with quests, feedback, and resource sharing from admins and mentors
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
