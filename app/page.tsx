import SideMenuLayout from "@/components/sidemenu/SideMenuLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SideMenuLayout />
    </div>
  );
}
