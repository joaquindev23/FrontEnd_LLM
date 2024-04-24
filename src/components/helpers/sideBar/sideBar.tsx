import Image from "next/image";
import CoreFunctionButtons from "./coreFunctionButtons";

type Props = {};

export default function SideBar({}: Props) {
  return (
    <nav className="bg-core-bg h-full w-14 flex flex-col items-center">
      <Image width={32} height={32} src="/assets/logo.png" className="pt-5 pb-20" alt="logo"></Image>
      <CoreFunctionButtons />
    </nav>
  );
}
