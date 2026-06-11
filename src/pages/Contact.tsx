import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-transparent dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a question, feedback, or need support? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Email</p>
                    <a href="mailto:supportpaisapilot@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600">supportpaisapilot@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 text-white text-center">
              <h3 className="font-bold mb-2">Partnership Inquiries</h3>
              <p className="text-sm text-slate-400 mb-4">
                Want to partner or advertise with us? Drop an email directly to:
              </p>
              <a href="mailto:supportpaisapilot@gmail.com" className="inline-block bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors break-all max-w-full">
                supportpaisapilot@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all dark:text-white resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
