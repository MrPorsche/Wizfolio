import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/Hat";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
      

      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModel>
            <Hat />
        </RenderModel>
      </div>
    </>
  );
}