import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API)
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section className="max-w-md mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center mb-5 text-4xl font-bold">Contact Us</h2>
      <p className="text-center mb-5 text-gray-600">
        If you have any queries, feedback, or need assistance, please feel free to reach out to us using the form below.
      </p>
      {submitted ? (
        <p className="text-center text-green-600">Thank you for your message! We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactUs;
