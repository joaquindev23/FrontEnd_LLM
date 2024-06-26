import React from "react";
import Image from "next/image";

export const DivMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex px-4 py-4 items-center justify-center relative bg-white w-full h-[900px]">
            <div className="flex w-24 top-0 left-0 justify-center absolute pt-7 h-14 text-xl font-semibold">
                <h1>Logo</h1>
            </div>
            {children}
        </div>
    )
}

export const ContentMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
            {children}
        </div>
    )
}

export const ContentLogo = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="flex flex-col justify-end bg-black border-2 rounded-2xl border-black w-1/2 h-full bg-core-bg">
                <div className="flex justify-center w-1-4 h-[800px]">
                    <Image
                        src="/assets/Saly-10.svg"
                        alt="Saly"
                        width={521}
                        height={1000}
                        priority={false}
                    />
                </div>
                <div className="flex flex-col w-1-4 space-y-2 h-[30%] pl-20">
                    {children}
                </div>
            </div>
        </>
    )
}