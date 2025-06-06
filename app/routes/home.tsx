import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Make it your own | Transformative" },
    { name: "description", content: "Welcome to your next project!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Footer />
    </div>
  );
}
