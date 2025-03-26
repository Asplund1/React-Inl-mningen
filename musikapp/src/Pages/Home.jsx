import Navbar from "../Components/Navbar";
import ThemeToggle from "../Components/ThemeToggle";
import AnimatedCard from "../Components/AnimatedCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        <div className="mt-8">
          <AnimatedCard title="Välkommen till Musikappen!">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Utforska din favoritmusik, sök efter låtar, och njut av en modern, 
              dynamisk upplevelse.
            </p>
          </AnimatedCard>

          <div className="mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white">
              Upptäck nya låtar!
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Här kan du söka och spara låtar 
            </p>
            <div className="flex justify-end mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}