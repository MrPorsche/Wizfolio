import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "../components/RenderModel";
import Wizard from "../components/models/Wizard";
import Navigation from "../components/navigation/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25 -z-50" />
      <div className="w-full h-screen">
        <Navigation />
        {/* Nav & 3D components */}
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
