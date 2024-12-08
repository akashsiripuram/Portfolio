import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="flex flex-col w-4/5 mx-auto bg-gray-300 mt-16 w-screen"> 
        <div className="flex flex-row justify-center border-black border-2 py-2 w-48 mx-auto">
          <div className="text-xl text-center font-bold">Education</div>
        </div>

        <div className="relative flex justify-center my-10 group">
          <img
            src="/Education.jpg"
            className="md:h-[400px] md:w-[550px] h-[250px] w-[80%]"
            alt="Education"
          />

          <div className="absolute flex flex-col items-center justify-center md:h-[400px] md:w-[550px] h-[250px] w-[80%] bg-gray-900 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-xl font-bold">Bachelor of Technology</div>
            <div className="text-md">Course: Computer Science</div>
            <div className="text-md">CVR College of Engineering</div>
            <div className="text-md">2020 - 2026</div>
          </div>
        </div>
      </div>
    </>
  );
}
