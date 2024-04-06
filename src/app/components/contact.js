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
        <div className='max-w-5xl container my-12 flex justify-start items-center mx-auto'>
        <div className='flex flex-row w-full'>
        <div className='flex justify-start w-1/2'>
        <form className='flex flex-col justify-center w-full space-y-10' onSubmit={handleSubmit(onSubmit)}>
            <input className='border  border-red-100 bg-gray-200' defaultValue="name" />
            <input className='border border-red-100 bg-gray-200' defaultValue="email"/>
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