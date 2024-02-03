import React from 'react';

export default function NewsletterForm() {
  return (
    <form className='py-6'>
    <input type="email" className=' h-12 rounded-md shadow-xl p-2 w-96' name="email" placeholder="e-mail" required></input>
    <button className='mx-8 w-28 h-12 bg-emerald-600 rounded-md shadow-md hover:shadow-xl' type="submit">Subscribe</button>
  </form>
  );
};
