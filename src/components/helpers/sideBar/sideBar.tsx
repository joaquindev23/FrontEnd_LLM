import Image from "next/image";
import CoreFunctionButtons from "./coreFunctionButtons";

type Props = {};

export default function SideBar({}: Props) {
  return (
    <nav className="bg-core-bg h-full w-14 flex flex-col items-center max-sm:h-14 max-sm:py-2 max-sm:w-full max-sm:flex-row ">
      <Image width={32} height={32} src="/assets/logo.png" className="pt-5 pb-20 max-sm:hidden" alt="logo"></Image>
      <CoreFunctionButtons />
    </nav>
  );
}
