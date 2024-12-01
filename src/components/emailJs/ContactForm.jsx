import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "contact_service", // Replace with your EmailJS service ID
        "template_5k4y9lc", // Replace with your EmailJS template ID
        formData,
        "LOD67RC2YK9uvg6zW" // Replace with your EmailJS user ID
      )
      .then(() => {
        setSuccess(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setSuccess(false);
        setError(true);
      });
      
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-md shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border rounded-md focus:ring focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border rounded-md focus:ring focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-900 border rounded-md focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {/* Success/Error Messages */}
          {success && (
            <p className="mt-4 text-green-500 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-500 text-center">
              There was an error sending your message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default ContactForm;
