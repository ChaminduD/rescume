import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}
