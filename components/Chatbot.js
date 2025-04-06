import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your personal assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: input, sender: 'user' }]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "I'm a simple chatbot. You can customize my responses based on your needs!", 
                sender: 'bot' 
            }]);
        }, 1000);
    };

    return (
        <>
            {!isOpen ? (
                <div className="chatbot-toggle-container">
                    {showBubble && (
                        <div className="speech-bubble">
                            <button 
                                className="bubble-close"
                                onClick={() => setShowBubble(false)}
                            >
                                ×
                            </button>
                            Hello, I'm Shrishti's Bot, are you looking for some help?
                        </div>
                    )}
                    <button 
                        className="chatbot-toggle"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <h3>Chat with Me</h3>
                        <button 
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                            >
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSubmit} className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot; 