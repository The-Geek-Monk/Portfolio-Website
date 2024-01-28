'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-8 px-8">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white font-extrabold mb-4 text-4xl lg:text-6xl sm:text-5xl">
            Hello! I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-800">
              <TypeAnimation
                sequence={[
                  'Vasu Sehgal',
                  1000,
                  'Web Developer',
                  1000,
                  'Content Creator',
                  1000,
                  'React Native Dev',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            fugit, harum assumenda atque rem quod aliquam explicabo cum quo esse
            aspernatur accusamus deserunt eius sunt! Corporis minus harum unde
            in.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200  bg-gradient-to-br from-emerald-400 to-emerald-800 font-bold text-white tracking-wide">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-emerald-400 to-emerald-800 font-bold">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg-[400px]">
            <Image
              src="/images/coder22.png"
              width={300}
              height={300}
              alt="img"
              className="absolute transform ml-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
