import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "../index.css";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="whatsapp-container">
      {/* Chat Box */}
      {isOpen && (
        <motion.div
          className="whatsapp-chatbox"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="chat-header">
            <p>Hi there! How can I help you?</p>
          </div>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-button"
          >
            Chat with us →
          </a>
        </motion.div>
      )}

      {/* Expand/Collapse Button */}
      <motion.div
        className="whatsapp-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? "⬇" : "💬"}
      </motion.div>

      {/* Floating WhatsApp Icon (always visible) */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={40} color="green" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
