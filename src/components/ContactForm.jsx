/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

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
    <div className="relative w-full max-w-md mx-auto pb-12" id="contact">
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-400 rounded-full blur-xl opacity-60 animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-400 rounded-full blur-xl opacity-60 animate-pulse" />
      
      {/* Main form container with glassmorphism effect */}
      <div className="backdrop-blur p-8 rounded-2xl shadow-lg border border-white/50 relative overflow-hidden">
        <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>

        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-400/20 backdrop-blur-sm border border-green-500/50 rounded-lg flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-green-800">Message sent successfully!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-400/20 backdrop-blur-sm border border-red-500/50 rounded-lg flex items-center gap-2">
            <XCircle className="text-red-500" size={20} />
            <span className="text-red-800">Failed to send message. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-gray-400 transition-all"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
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
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-gray-400 transition-all"
              placeholder="your@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 placeholder-gray-400 transition-all resize-none"
              placeholder="Your message..."
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-cyan-300 hover:bg-cyan-600 text-white font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;