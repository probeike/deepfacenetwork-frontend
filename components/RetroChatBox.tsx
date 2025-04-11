'use client';

import { useState } from 'react';

export default function RetroChatBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Welcome to Deep Face Network. How can I assist with your planetary exploration?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue('');
    
    // Simulate response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Transmission received. Processing your request...", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-[768px] h-[768px]' : 'w-80 h-64'}`}
    >
      {/* Chat container with retro styling */}
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden relative
        bg-black/70 backdrop-blur-sm
        border border-retro-teal/50
        shadow-[0_0_15px_rgba(0,180,216,0.3)]">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-retro-blue/30 to-retro-purple/30 border-b border-retro-teal/30">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-retro-pink"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-retro-teal"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-retro-purple"></div>
          </div>
          <div className="text-xs font-mono text-retro-teal">DEEP FACE NETWORK v1.0</div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-retro-teal hover:text-retro-pink transition-colors"
          >
            {isExpanded ? '[ minimize ]' : '[ expand ]'}
          </button>
        </div>
        
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 font-mono text-sm scrollbar-thin scrollbar-thumb-retro-teal/30 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`p-2 rounded ${msg.isUser 
                ? 'bg-retro-blue/20 border border-retro-blue/30 ml-4' 
                : 'bg-retro-purple/20 border border-retro-purple/30 mr-4'}`}
            >
              <div className="text-xs text-retro-teal/70 mb-1">
                {msg.isUser ? 'YOU' : 'DFN'}
              </div>
              <div className={`${msg.isUser ? 'text-white' : 'text-retro-teal'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="p-2 border-t border-retro-teal/30 bg-black/50">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-black/70 border border-retro-teal/50 rounded px-3 py-1.5 
                text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-retro-teal
                placeholder-retro-teal/50"
              placeholder="Enter message..."
            />
            <button 
              type="submit"
              className="ml-2 px-3 py-1.5 rounded bg-retro-teal/20 border border-retro-teal/50 
                text-retro-teal text-sm font-mono hover:bg-retro-teal/30 transition-colors
                focus:outline-none focus:ring-1 focus:ring-retro-teal"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}