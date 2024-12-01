import "./Skill.css";

export default function Skill() {
  return (
    <>
      <div className="flex flex-col  mx-auto bg-gray-300 mt-16 py-8 w-screen">
        <div className="flex flex-row justify-center border-black border-2 py-2 w-48 mx-auto mb-8">
          <div className="text-xl text-center font-bold">Skills</div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 mt-10 px-4">
          <div className="flex flex-col items-center">
            <i className="fab fa-html5 text-5xl text-orange-500 hover:text-orange-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-orange-700 transition-all duration-300">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-css3-alt text-5xl text-blue-500 hover:text-blue-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-blue-700 transition-all duration-300">CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-js-square text-5xl text-yellow-500 hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-yellow-700 transition-all duration-300">JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-java text-5xl text-black hover:text-gray-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-gray-700 transition-all duration-300">Java</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-python text-5xl text-blue-500 hover:text-blue-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-blue-700 transition-all duration-300">Python</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-react text-5xl text-blue-400 hover:text-blue-600 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-blue-600 transition-all duration-300">React.js</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-node text-5xl text-green-600 hover:text-green-800 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-green-800 transition-all duration-300">Node.js</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-database text-5xl text-green-800 hover:text-green-900 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-green-900 transition-all duration-300">MongoDB</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-git text-5xl text-red-600 hover:text-red-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-red-700 transition-all duration-300">Git</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-github text-5xl text-black hover:text-gray-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-gray-700 transition-all duration-300">GitHub</p>
          </div>

          <div className="flex flex-col items-center">
            <i className="fab fa-bootstrap text-5xl text-info hover:text-teal-700 hover:scale-110 transition-transform duration-300" />
            <p className="text-center mt-2 text-sm font-medium hover:text-teal-700 transition-all duration-300">Bootstrap</p>
          </div>
        </div>
      </div>
    </>
  );
}
