import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yi5u7ak', 'template_z8p0c9v', form.current, 'nG2rb11fITDwilLBW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <section id='contact' className='max-w-full flex flex-col justify-center items-center gap-5 p-10'>
                <h1 className="text-[50px] pt-10 pb-5 font-Quicksand font-bold">Get In Touch</h1>
                <h3 className="text-[30px]  font-Quicksand font-bold">Contact Me</h3>
                <div className='w-[40%]'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 text-white'>
                        <input className='w-full p-4 bg-transparent border border-[#3a36f3] border-solid resize-none' type="text" name='name' placeholder='Your Name' required />
                        <input className='w-full p-4 bg-transparent border border-[#3a36f3] border-solid resize-none' type="email" name='email' placeholder='Your Email' required />
                        <textarea className='w-full p-4 bg-transparent border border-[#3a36f3] border-solid resize-none' name="message" id="" rows="7" placeholder='Your Message...' required></textarea>
                        <button className='btn'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}
