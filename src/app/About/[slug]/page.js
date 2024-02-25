"use client"
import React from 'react';
import { useState } from 'react'

export default function About() {
const [showAuthor, setShowAuthor] = ('')

  return (
    <div className="container mt-44 min-h-screen max-w-5xl mx-auto">
      <section>
        <div className='flex flex-col items-center'>
            <img className='rounded-full w-48 h-48 shadow-custom' src='/mainimg.jpg' />
            <h1>Founder & Author</h1>
        </div>
      </section>
      <section className='mt-24'>
        <div className='items-center text-center md:text-start'>
            <div className='md:flex-row flex space-x-4 flex-col items-center space-y-4'>
                <img className='shadow-custom rounded-2xl flex justify-center justify-items-center h-96 w-96' src="/bgimg.jpg" />
                <div className='self-center flex-col'>
                    <h1 className=''>Marlon Stevenson</h1>
                    <p>I'm  a self-taught developer, tech enthusiast, and avid learner with a deep interest in science, technology, and games. His curiosity and passion for learning have led him to create this site as a platform to gain insights from individuals who have successfully transitioned to new careers, especially in the tech industry. Marlon is dedicated to continuous growth and self-improvement, and he believes that sharing experiences and learning from others is a valuable way to achieve personal and professional development</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};