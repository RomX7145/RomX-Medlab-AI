import React, { useState } from 'react';

const ChatAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: newMessages
      })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message;
    setMessages([...newMessages, botMessage]);
  };

  return (
    <div className="p-6">
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <p className="bg-gray-100 inline-block p-2 rounded">{m.content}</p>
          </div>
        ))}
      </div>
      <input
        className="border w-full p-2 mt-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask RomX AI..."
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 mt-2">Send</button>
    </div>
  );
};

export default ChatAI;
