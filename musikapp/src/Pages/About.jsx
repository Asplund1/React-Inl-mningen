import Navbar from "../Components/Navbar";

export default function About() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-primary dark:text-white">Om Musikappen</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Musikappen är ett projekt som visar en modern dashboard med funktioner som sökfiltrering, dark mode, och interaktiva animationer – allt byggt med React, Tailwind CSS, Redux Toolkit och Framer Motion.
          </p>
        </div>
      </div>
    );
  }