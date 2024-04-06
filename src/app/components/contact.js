"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data)

    return (
        <>
        <div className='max-w-5xl container my-12 flex justify-start mx-auto place-self-center'>
        <div className='flex flex-row w-full space-x-2 place-self-center self-center'>
        <div className='flex justify-start w-1/2 py-2 border border-transparent drop-shadow-lg bg-white shadow-custom'>
        <form className='flex flex-col justify-center w-full space-y-10' onSubmit={handleSubmit(onSubmit)}>
            <span>Name</span>
            <input className='border  border-red-100 bg-gray-200' defaultValue="name" />
            <span>Email</span>
            <input className='border border-red-100 bg-gray-200' defaultValue="email" type="email"/>
            <span>Message</span>
            <textarea className='border border-red-100 bg-gray-200' rows="6" paceholder="message" />
            <input className=' cursor-pointer' type="submit"/>
        </form>
        </div>
        <div className='container flex justify-end border border-red-200 w-1/2'>
            hi
        </div>
        </div>
        </div>
        </>
        )
}