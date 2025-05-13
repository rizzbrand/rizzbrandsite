import React, { useState } from "react";
import "..comingsoon/ComingSoonForm.css";

const ComingSoonForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="coming-soon-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Join Waitlist</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ComingSoonForm;