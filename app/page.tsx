import Chat from "@/components/sidechats/Chat";
import SideMenuLayout from "@/components/sidemenu/SideMenuLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Chat />
    </div>
  );
}
