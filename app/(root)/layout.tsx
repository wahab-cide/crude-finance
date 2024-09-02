import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'Wahab', lastName: 'Cide'}
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo4.svg" width={80} height={40} alt="menu-icon"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
       
    </main>
  );
}
