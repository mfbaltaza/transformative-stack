import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Make it your own | Transformative" },
		{ name: "description", content: "Welcome to your next project!" },
	];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const res = await fetch("https://api.transformative.com/user");
	return await res.json();
}

export function HydrateFallback() {
	return (
		<div className="min-h-screen">
			<Hero mocks_enabled={false} />
			<Footer />
		</div>
	);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<div className="min-h-screen">
			<Hero mocks_enabled={typeof loaderData === "object"} />
			<Footer />
		</div>
	);
}
