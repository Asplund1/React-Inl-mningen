import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import ThemeToggle from "../Components/ThemeToggle";
import AnimatedCard from "../Components/AnimatedCard";


export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
          <div className="mt-8">
            <AnimatedCard title="Välkommen till Musikappen!">
              <p className="text-gray-700 dark:text-gray-300">
                Utforska din favoritmusik, sök efter låtar, och njut av en modern, dynamisk upplevelse.
              </p>
            </AnimatedCard>
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold text-primary dark:text-white">
                Upptäck nya låtar varje dag!
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Vår plattform ger dig de senaste trenderna inom musik.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }