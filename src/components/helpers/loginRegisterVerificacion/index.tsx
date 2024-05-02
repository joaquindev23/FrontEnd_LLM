import React from "react";
import Image from "next/image";

export const DivMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex max-md:flex-col-reverse px-4 py-4 items-center justify-center bg-white w-full md:h-[900px]">
            <div className="max-md:hidden flex w-24 top-0 left-0 justify-center absolute pt-7 h-14 text-xl font-semibold">
                <h1>Logo</h1>
            </div>
            {children}
        </div>
    )
}

export const ContentMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center md:w-1/2 md:h-full">
            {children}
        </div>
    )
}

export const ContentLogo = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col justify-end bg-black border-2 rounded-2xl border-black md:w-1/2 h-full">
                <div className="flex justify-center md:h-[521px]">
                    <Image
                        src="/assets/Saly-10.webp"
                        alt="Saly"
                        width={521}
                        height={1000}
                        priority={false}
                    />
                </div>
                <div className="flex flex-col justify-center space-y-2 md:h-[30%] max-md:py-4 pl-20">
                    {children}
                </div>
            </div>
        </>
    )
}