import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between h-screen w-screen bg-black">
        <div className="flex flex-col justify-between w-1/2 bg-gray-300 text-lg px-5 py-5 pl-24">
          <div>
            <a href="/" className="font-semibold cursor-pointer">My Portfolio</a>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-6">Hi, I am</h3>
            <h1 className="text-5xl font-bold">Akash Siripuram</h1>
            <div className="text-gray-400 font-bold text-2xl mt-2">
              Web Developer
            </div>
          </div>
          <div className="social-icons flex flex-row space-x-4 w-3/5 mb-16 ">
            <div className="bg-[#bdbdbd] p-2">
              <a href="https://github.com/akashsiripuram" className="text-2xl ">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="bg-[#bdbdbd] p-2">
              <a href="https://www.linkedin.com/in/siripuramakash/" className="text-2xl ">
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
        <div className="flex flex-col w-1/2 bg-black angled-box align-baseline justify-between">
          <div className="flex navbar-options flex-row justify-center text-white px-5 py-5 pb-12 space-x-10 font-semibold ">
            {/* Update to anchor links */}
            <a href="#about" className="cursor-pointer">About</a>
            <a href="#education" className="cursor-pointer">Education</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
            <a href="/AkashSiripuram.pdf" target="_blank" className="cursor-pointer">Resume</a>
            <a href="#contact" className="cursor-pointer bg-white text-black px-4 py-1 rounded-2xl">Contact</a>
          </div>
          <img
            src="/profile.jpg"
            className="angled-profile"
            alt=""
          />
        </div>
        
      </div>
    </>
  );
}
