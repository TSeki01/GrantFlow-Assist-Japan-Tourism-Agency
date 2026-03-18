"use client";
import { useState } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant({ formData, onUpdateFormData }: { formData: any, onUpdateFormData: (data: any) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, formData }),
      });
      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
      
      if (data.updatedFields && Object.keys(data.updatedFields).length > 0) {
        onUpdateFormData(data.updatedFields);
      }
    } catch (err) {
      alert('AIとの通信に失敗しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white border text-sm border-blue-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-[500px]">
      <div className="bg-[#1a73e8] text-white p-3 font-bold flex items-center gap-2">
        <Bot size={18} />
        対話型AI入力アシスタント
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-blue-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-10 space-y-2">
            <p>「台湾人をターゲットにしたい」</p>
            <p>など、AIにチャットで相談ができます。</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-[#1a73e8] text-white'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-white border text-gray-800' : 'bg-blue-100 text-blue-900'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a73e8] text-white shrink-0">
              <Loader2 className="animate-spin" size={16} />
            </div>
            <div className="p-3 text-gray-600">入力・修正中...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-white border-t flex gap-2">
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="修正指示を送信（例：目標数値を高くして）"
          className="flex-1 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()} className="p-2 bg-[#1a73e8] text-white rounded hover:bg-blue-700">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
