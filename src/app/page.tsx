import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {
	return (
		<main className="w-screen flex flex-row">
			<LeftSection />
			<RightSection />
		</main>
	);
}
