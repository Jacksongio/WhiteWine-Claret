import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending…');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        const text = await res.text();
        throw new Error(text);
      }
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Contact Mom</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="What would you like?"
        required
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <button type="submit" style={{ width: '100%' }}>Send</button>
      <p>{status}</p>
    </form>
  );
}
