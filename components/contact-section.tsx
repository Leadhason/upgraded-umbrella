"use client"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real application)
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <section id="contact" className="bg-black px-6 py-20 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">Get In Touch</h2>
          <p className="text-md leading-relaxed text-white/90 md:text-lg">
            Ready to take your career to the next level? Contact us today to discuss how we can help you achieve your goals
            both on and off the field.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 font-bold uppercase text-white">Our Office</h3>
                <p className="text-white/70">123 Sports Avenue</p>
                <p className="text-white/70">Los Angeles, CA 90001</p>
              </div>

              <div>
                <h3 className="mb-3 font-bold uppercase text-white">Contact Info</h3>
                <p className="text-white/70">info@empiresportsagency.com</p>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="mb-3 font-bold uppercase text-white">Office Hours</h3>
                <p className="text-white/70">Monday - Friday: 9AM - 6PM</p>
                <p className="text-white/70">Saturday - Sunday: By appointment</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-2 border-white/20 bg-white/10 p-3 text-white focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-2 border-white/20 bg-white/10 p-3 text-white focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border-2 border-white/20 bg-white/10 p-3 text-gray-400 focus:outline-none"
                >
                  <option value="" disabled className="text-white">
                    Select a subject
                  </option>
                  <option value="Representation Inquiry">Representation Inquiry</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Media Inquiry">Media Inquiry</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-md border-2 border-white/20 bg-white/10 p-3 text-white focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-red-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}