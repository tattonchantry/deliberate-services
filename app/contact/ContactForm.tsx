'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg p-10 text-center border border-gray-200 h-full flex flex-col items-center justify-center"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: '#1e3a5f' }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#1e3a5f' }}>
          Message Received
        </h3>
        <p className="text-base leading-relaxed max-w-sm" style={{ color: '#4a5568' }}>
          Thank you for reaching out to Deliberate Services. We will review your inquiry
          and respond as soon as possible.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
            setServerError(null);
          }}
          className="mt-6 px-6 py-2 text-sm font-semibold rounded transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a5f' }}>
        Send a Message
      </h2>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1"
            style={{ color: '#1a1a2e' }}
          >
            Name <span style={{ color: '#c9a84c' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={`w-full px-4 py-3 rounded border text-sm outline-none transition-colors focus:ring-2 focus:ring-offset-1 ${
              errors.name ? 'border-red-400' : 'border-gray-300'
            }`}
            style={{ color: '#1a1a2e' }}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
            style={{ color: '#1a1a2e' }}
          >
            Email <span style={{ color: '#c9a84c' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={`w-full px-4 py-3 rounded border text-sm outline-none transition-colors focus:ring-2 focus:ring-offset-1 ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
            style={{ color: '#1a1a2e' }}
            placeholder="you@agency.gov"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-1"
            style={{ color: '#1a1a2e' }}
          >
            Subject <span className="text-xs font-normal" style={{ color: '#4a5568' }}>(optional)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-gray-300 text-sm outline-none transition-colors focus:ring-2 focus:ring-offset-1"
            style={{ color: '#1a1a2e' }}
            placeholder="Contracting inquiry, teaming, etc."
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
            style={{ color: '#1a1a2e' }}
          >
            Message <span style={{ color: '#c9a84c' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 rounded border text-sm outline-none transition-colors focus:ring-2 focus:ring-offset-1 resize-vertical ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            }`}
            style={{ color: '#1a1a2e' }}
            placeholder="Describe your project, contracting need, or inquiry..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        {serverError && (
          <p className="text-sm text-red-600">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 text-sm font-semibold rounded transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
        >
          {loading ? 'Sending…' : 'Send Message'}
        </button>

        <p className="text-xs leading-relaxed" style={{ color: '#4a5568' }}>
          This form is for general inquiries. For contract-specific discussions, please
          include your agency and contracting vehicle in your message.
        </p>
      </form>
    </div>
  );
}
