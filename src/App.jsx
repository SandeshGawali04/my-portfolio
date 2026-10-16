import { useState } from "react";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-dark text-white"
          : "light-theme bg-[#F3F0F8] text-[#241C30]"
      }`}
    >
      
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between
          border-b px-4 py-4 sm:px-6 md:px-8
          backdrop-blur-xl transition-colors duration-300
          ${
            isDark
              ? "border-white/10 bg-[#0B0B0F]/75"
              : "border-[#D8CDE3]/70 bg-[#F3F0F8]/75"
          }`}
      >
      


        {/* Logo */}
        <a href="#home" className="shrink-0 text-xl font-bold sm:text-2xl">
          Sandesh Gawali<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-gray-300 md:flex">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#achievements" className="hover:text-accent">Achievements</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-accent hover:text-accent"
          >
            {isDark ? (
              // Sun icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.42 1.42" />
                <path d="m17.65 17.65 1.42 1.42" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.35 17.65-1.42 1.42" />
                <path d="m19.07 4.93-1.42 1.42" />
              </svg>
            ) : (
              // Moon icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>

          {/* Burger Button - Mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-white/20 p-2 text-xl transition hover:border-accent hover:text-accent md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className={`absolute left-0 right-0 top-full z-50 flex flex-col gap-1
              border-b p-4 shadow-xl backdrop-blur-xl md:hidden
              ${
                isDark
                  ? "border-white/10 bg-[#0B0B0F]/95"
                  : "border-[#D8CDE3]/70 bg-[#F3F0F8]/95"
              }`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Achievements", "#achievements"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-accent"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-3 text-center font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      >

        {/*<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          <span className="h-2 w-2 rounded-full bg-purple-400"></span>
          Open to Internship Opportunities
        </div>*/}

        <p className="mb-4 text-lg text-accent">
          Hello, I'm
        </p>

        <h2 className="bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          Sandesh Gawali
        </h2>

        <h3 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
          IT Student | Aspiring Software Developer
        </h3>

        <p className="mt-6 max-w-2xl leading-8 text-gray-400">
          I'm a third-year Information Technology student passionate
          about software development, problem solving, and building
          practical projects using programming and modern technologies.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-semibold hover:bg-purple-700 transition"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-600 px-6 py-3 font-semibold hover:border-accent hover:text-accent transition"
          >
            Contact Me
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-semibold uppercase tracking-widest text-accent">
            Get to know me
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                An aspiring developer who loves solving problems
              </h3>

              <p className="mb-4 leading-8 text-gray-400">
                I'm a third-year Information Technology student
                interested in software development, data science,
                and building practical applications.
              </p>

              <p className="leading-8 text-gray-400">
                I enjoy learning new technologies, practising
                data structures and algorithms, and turning ideas
                into projects that solve real-world problems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-2 font-semibold text-accent">
                  Education
                </h4>
                <p className="text-sm leading-6 text-gray-300">
                  B.Tech in Information Technology
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Third Year
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-2 font-semibold text-accent">
                  AI Club
                </h4>
                <p className="text-sm leading-6 text-gray-300">
                  Data Science Lead
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  College AI Club
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-2 font-semibold text-accent">
                  Interests
                </h4>
                <p className="text-sm leading-6 text-gray-300">
                  Web Development
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Data Science & DSA
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-2 font-semibold text-accent">
                  Current Focus
                </h4>
                <p className="text-sm leading-6 text-gray-300">
                  Building Projects
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Learning & Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Projects Section */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-semibold uppercase tracking-widest text-accent">
            What I've built
          </p>

          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            My <span className="text-accent">Projects</span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-gray-400">
            A selection of projects through which I'm applying my
            programming, machine learning, and development skills.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-purple-500/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🤖
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Insurance Purchase Prediction
              </h3>

              <p className="mb-5 leading-7 text-gray-400">
                A machine learning project that predicts insurance
                purchase decisions using customer information such
                as age and estimated salary.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Python</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Machine Learning</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Scikit-learn</span>
              </div>

              <a
                href="https://github.com/SandeshGawali04/Insurance-Purchase-Prediction"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent hover:text-purple-300"
              >
                View on GitHub ↗
              </a>
            </article>

            {/* Project 2 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-purple-500/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                ⚙️
              </div>

              <h3 className="mb-3 text-xl font-bold">
                DevOps CI/CD Web App
              </h3>

              <p className="mb-5 leading-7 text-gray-400">
                A containerized web application using Docker,
                with a GitHub Actions workflow to build and publish
                images to Docker Hub.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Docker</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">GitHub Actions</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">CI/CD</span>
              </div>

              <a
                href="https://github.com/SandeshGawali04/devops-cicd-webapp"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent hover:text-purple-300"
              >
                View on GitHub ↗
              </a>
            </article>

            {/* Project 3 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-purple-500/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                🧬
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Breast Cancer Classification
              </h3>

              <p className="mb-5 leading-7 text-gray-400">
                An image-classification project exploring
                histopathology images to distinguish between
                benign and malignant tissue samples.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Python</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">TensorFlow</span>
                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">Deep Learning</span>
              </div>

              <span className="text-sm text-gray-500">
                Academic project
              </span>
            </article>
          </div>
        </div>
      </section>

      
      {/* Skills Section */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-semibold uppercase tracking-widest text-accent">
            My technical toolkit
          </p>

          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            Technical <span className="text-accent">Skills</span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-gray-400">
            Technologies and tools I'm learning and using to build
            projects and strengthen my development skills.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Programming */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C++", "Python"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Web Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "DBMS", "SQL"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Scikit-learn", "TensorFlow"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-bold text-accent">
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {["DSA", "OOP", "Problem Solving"].map((skill) => (
                  <span key={skill} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Achievements Section */}
      <section id="achievements" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-semibold uppercase tracking-widest text-accent">
            My journey so far
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            Certifications & <span className="text-accent">Achievements</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                LEADERSHIP
              </p>
              <h3 className="mb-2 text-xl font-bold">
                Data Science Lead — College AI Club
              </h3>
              <p className="leading-7 text-gray-400">
                Selected to serve as Data Science Lead, contributing
                to the club's data science learning and activities.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                CERTIFICATION
              </p>
              <h3 className="mb-2 text-xl font-bold">
                NPTEL — Database Management Systems
              </h3>
              <p className="leading-7 text-gray-400">
                Coursework in database concepts and management
                systems.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                CERTIFICATION
              </p>
              <h3 className="mb-2 text-xl font-bold">
                NPTEL — Yoga
              </h3>
              <p className="leading-7 text-gray-400">
                NPTEL course certification.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                CERTIFICATION
              </p>
              <h3 className="mb-2 text-xl font-bold">
                Interfort — Python
              </h3>
              <p className="leading-7 text-gray-400">
                Python programming certification.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                CERTIFICATION
              </p>
              <h3 className="mb-2 text-xl font-bold">
                Interfort — AI with Data Science
              </h3>
              <p className="leading-7 text-gray-400">
                Certification related to artificial intelligence
                and data science.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50">
              <p className="mb-3 text-sm font-medium text-accent">
                CODING
              </p>
              <h3 className="mb-2 text-xl font-bold">
                LeetCode — 50 Days Badge
              </h3>
              <p className="leading-7 text-gray-400">
                Recognition for consistent coding practice and
                problem-solving.
              </p>
            </article>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-accent">
            Get in touch
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let's Work <span className="text-accent">Together</span>
          </h2>

          <p className="mb-10 leading-8 text-gray-400">
            I'm interested in software development opportunities,
            internships, and projects where I can learn and contribute.
            Feel free to connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sandeshgawali04@gmail.com"
              className="rounded-lg bg-accent px-6 py-3 font-semibold transition hover:bg-purple-700"
            >
              Email Me
            </a>

            <a
              href="https://github.com/SandeshGawali04"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/sandesh-gawali-8a7a95333/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sandesh Gawali.
          Built with React, Vite & Tailwind CSS.
        </p>
      </footer>


    </div>
  );
}

export default App;
