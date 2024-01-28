import React from 'react';
import NewsletterForm from './signupNews';

export default function Newsletter() {
  return (
    <section className="bg-blue-100 flex w-big h-56 self-center rounded-md">
        <div className='flex py-4 mx-4'>
      <div className="justify-center align-middle items-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700">Stay updated with our latest news and promotions. Subscribe to our newsletter now!</p>
        <NewsletterForm/>
        </div>
      </div>
    </section>
  );
};
