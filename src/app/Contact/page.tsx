"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className='contact' id="contact">
        <h1 className='w-[35%] text-[50px] font-extrabold mt-[80px] ml-[40%] hover:text-red-600 text-white'>
          Contact Me
        </h1>
      </div>
      <div className="contact-container text-[24px] w-[98%] ml-[10px] text-white">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='text-[30px] w-[98%] ml-[20px] mr-[20px] mb-[20px]'>
            Name:
          </label>
          <input
            className='text-[24px] w-[98%] ml-[10px]  mr-[20px] mt-[20px] mb-[20px]'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email" className='text-[30px] w-[98%] ml-[20px] mr-[20px]'>
            Email:
          </label>
          <input
            className='text-[24px] w-[98%] ml-[10px]  mr-[20px] mt-[20px] mb-[20px]'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message" className='text-[30px] w-[98%] ml-[20px] mr-[10px]'>
            Message:
          </label>
          <textarea
            className='text-[24px] w-[98%] ml-[10px] mr-[20px] mt-[20px] mb-[20px]'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          ></textarea>

          <button
            className="text-[30px] pt-10px hover:text-red-600 pb-10px w-[98%] ml-[20px] mr-[20px] mt-[20px] border-[5px] max-w-full border-yellow-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;