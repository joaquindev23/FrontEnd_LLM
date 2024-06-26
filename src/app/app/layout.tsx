import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/helpers/sideBar/sideBar";
import { SendMessageProvider } from "@/contex/sendMessageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" flex flex-row w-full max-w-[1440px] m-auto bg-core-secBg h-screen max-sm:max-h-screen max-sm:overflow-hidden max-sm:flex-col-reverse">
      <SideBar />
      <SendMessageProvider>{children}</SendMessageProvider>
    </section>
  );
}
