import Navbar from "../Components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
          Om Musikappen
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Musikappen är ett projekt som visar en stilren dashboard med funktioner som sökfiltrering, dark mode, och interaktiva animationer- allt byggt med React, Tailwind CSS, Redux Toolkit.
        </p>
      </div>
    </div>
  );
}
