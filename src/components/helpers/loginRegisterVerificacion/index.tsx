import React from "react";
import Image from "next/image";

export const DivMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex px-4 py-4 items-center justify-center relative bg-white w-full h-[900px] max-sm:w-full">
            <div className="flex w-24 top-0 left-0 justify-center absolute pt-7 h-14 text-xl font-semibold">
                <h1>Logo</h1>
            </div>
            {children}
        </div>
    )
}

export const ContentMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center xl:w-1/2 h-full max-sm:w-full sm:w-full md:w-1/2">
            {children}
        </div>
    )
}

export const ContentLogo = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col justify-end bg-black border-2 rounded-2xl border-black h-full bg-core-bg max-sm:hidden sm:hidden md:flex md:w-1/2 md:justify-start xl:w-1/2">
                <div className="flex lg:justify-center xl:justify-center w-1-4 lg:h-[650px] xl:h-[800px] md:justify-start md:h-[530px]">
                    <Image
                        src="/assets/Saly-10.svg"
                        alt="Saly"
                        width={521}
                        height={1000}
                        priority={false}
                    />
                </div>
                <div className="flex flex-col w-1-4 space-y-2 lg:pl-10 xl:h-[30%] xl:pl-20 md:pl-6">
                    {children}
                </div>
            </div>
        </>
    )
}