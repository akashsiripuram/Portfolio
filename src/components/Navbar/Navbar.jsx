import "./Navbar.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useState } from "react";

export default function Navbar() {
  // const [isOpened,setIsOpened] =useState(false);

  return (
    <>
      <div className="flex flex-col md:hidden bg-black max-w-screen overflow-x-hidden h-screen ">
        {/* Top Navbar */}
        <div className="flex flex-row justify-between w-[inherit] pr-10 px-5 py-5 pl-16">
          <a href="/" className="text-white cursor-pointer font-semibold">
            My Portfolio
          </a>
          <ToggleButton />
        </div>
        <div className="text-center flex flex-row justify-center mt-24 mb-10 ml-8">
        <img
          src="/profile.jpg"
          className="rounded-full h-[300px] w-[300px]  border-2 border-white pt-12"
          alt=""
        />
        </div>
        <h3 className="text-xl text-center font-bold mb-3 text-white">Hi, I am</h3>
        <h1 className="text-3xl text-center font-bold text-white">Akash Siripuram</h1>
        <div className="text-gray-400 text-center font-bold text-xl mt-2">
          Web Developer
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-between h-screen w-screen ">
        {/* Left Section */}
        <div className="flex flex-col justify-between w-1/2 bg-gray-300 text-lg px-5 py-5 pl-24">
          <div>
            <a href="/" className="font-semibold cursor-pointer">
              My Portfolio
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Hi, I am</h3>
            <h1 className="text-5xl font-bold">Akash Siripuram</h1>
            <div className="text-gray-400 font-bold text-2xl mt-2">
              Web Developer
            </div>
          </div>
          <div className="social-icons flex flex-row space-x-4 w-3/5 mb-16">
            <div className="bg-[#bdbdbd] p-2">
              <a href="https://github.com/akashsiripuram" className="text-2xl ">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="bg-[#bdbdbd] p-2">
              <a
                href="https://www.linkedin.com/in/siripuramakash/"
                className="text-2xl ">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="bg-[#bdbdbd] p-2">
              <a href="#" className="text-2xl ">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with ClipPath */}
        <div
          className="w-[12%]  bg-black mr-0 p-0"
          style={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0 100%)", // Adjusted clipPath
          }}></div>
        <div className="flex flex-col w-2/3  bg-black overflow-hidden align-baseline justify-between p-0 m-0 border-2 border-black">
          {/* Navbar Items */}
          <div className="md:flex flex-row justify-around text-white px-5 py-5 gap-[3%] font-semibold hidden">
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#education" className="cursor-pointer">
              Education
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a
              href="/AkashSiripuram.pdf"
              target="_blank"
              className="cursor-pointer">
              Resume
            </a>
            <a
              href="#contact"
              className="cursor-pointer bg-white text-black px-4 py-1 rounded-2xl">
              Contact
            </a>
          </div>

        

          {/* Profile Image */}
          <img src="/profile.jpg" className="angled-profile" alt="" />
        </div>
      </div>
    </>
  );
}
