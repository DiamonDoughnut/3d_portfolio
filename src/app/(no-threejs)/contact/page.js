"use client";
import React, { useRef, useState, Suspense } from "react";
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";
import Fox from "@/models/Fox";
import Loader from "@/components/Loader";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import Alert from "@/components/Alert";
import useAlert from "@/hooks/useAlert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setCurrentAnimation('run');
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        user_name: form.name,
        to_name: "Caleb Smith",
        user_email: form.email,
        to_email: 'caleb@caleb-smith.com',
        message: form.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSending(false);
      showAlert({ text: "Message sent!", type: "success"})
      setTimeout(() => {
        setCurrentAnimation('idle')
        setForm({name: "", email: "", message: ""})
        hideAlert();
      }, 3000)
    }).catch((error) => {
      setIsSending(false);
      setCurrentAnimation('idle')
      console.log(error)
      showAlert({text: 'Something went wrong!', type: 'danger'})
    })
  };

  const handleFocus = (e) => {
    setCurrentAnimation('walk');
  };

  const handleBlur = (e) => {
    setCurrentAnimation('idle')
  };


  return (
    <section className='relative flex flex-col lg:flex-row max-w-full lg:max-w-[80%] items-center justify-center mt-24 mx-auto'>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className='flex-1 min-w-[50%] flex flex-col pl-24 items-center justify-center'>
        <h1 className='text-2xl font-bold text-blue-500'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-slate-200 font-semibold'>
            Name <span className="text-red-500">*</span>
            <input
              type='text'
              name='name'
              className='w-full p-2 font-normal rounded-xl mt-2 bg-white text-black'
              placeholder='John Doe'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-200 font-semibold'>
            Email <span className="text-red-500">*</span>
            <input
              type='email'
              name='email'
              className='w-full p-2 font-normal rounded-xl mt-2 bg-white text-black'
              placeholder='johndoe@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-slate-200 font-semibold'>
            Your Message <span className="text-red-500">*</span>
            <textarea
              name='message'
              className='w-full p-2 font-normal rounded-xl mt-2 bg-white text-black'
              placeholder='Let me know how I can help you!'
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="max-lg:w-full lg:min-w-[1/2] rounded-lg py-2 bg-gradient-to-r from-blue-400 to-blue-700 font-semibold text-white hover:drop-shadow-2xl hover:drop-shadow-blue-500 drop-shadow-blue-500 drop-shadow-md"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className=" w-full lg:h-[700px] md:h-[550px] h-[350px]">
        <HoverCard>
          <HoverCardTrigger>
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 90,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader />}>
            <Fox 
              position={[3, 0.35, -15]}
              rotation={[0.2, 1, 0]}
              scale={[1, 1, 1]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <h1><a href="https://skfb.ly/opRFZ" target="_blank" className="text-blue-500 underline">"Fox Minecraft"</a> by kuzneciv is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" className="text-blue-500 underline">Creative Commons Attribution</a>.</h1>
        </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  );
};

export default Contact;
