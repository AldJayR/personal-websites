/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactForm = ({ serviceId, templateId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        };
  
        await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

      {submitStatus === 'success' && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          Message sent successfully!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          Failed to send message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Name:
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-3 text-white rounded transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;