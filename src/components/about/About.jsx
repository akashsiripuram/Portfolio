import "./About.css";

export default function About() {
  return (
    <div className="flex flex-col w-4/5 mx-auto bg-gray-300 mt-16 py-8 px-6 rounded-lg">
      {/* Header */}
      <div className="flex flex-row justify-center border-black border-2 py-2 w-48 mx-auto mb-8">
        <div className="text-xl text-center font-bold">About Me</div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <p className="text-md text-gray-700 mt-2 leading-relaxed">
            Hi! I'm <strong>Akash Siripuram</strong>, a passionate Full Stack Web Developer dedicated to
            creating impactful, efficient, and user-friendly web applications. I take pride in my
            ability to solve complex problems and bring ideas to life through technology.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
          <ul className="list-disc list-inside mt-3 space-y-3 text-gray-700">
            <li>
              <strong>Full Stack Web Developer</strong> at Digital Guruji
              <span className="text-sm text-gray-500"> (September 2024 - Present)</span>
              <p className="mt-1 text-gray-600 text-sm">
                Responsible for developing, deploying, and maintaining scalable web applications,
                focusing on user experience and innovative solutions.
              </p>
            </li>
            <li>
              <strong>GDG Web Development Member</strong>
              <span className="text-sm text-gray-500"> (October 2024 - Present)</span>
              <p className="mt-1 text-gray-600 text-sm">
                Actively contributing to Google Developer Group initiatives, focusing on
                collaboration, mentorship, and advancing web development projects.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
