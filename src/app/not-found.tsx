import {
  ContentLogo,
  ContentMain,
  DivMain,
} from "@/components/helpers/loginRegisterVerificacion";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <>
      <DivMain>
        <ContentMain>
          <div className="flex flex-col justify-around relative bottom-8 items-center w-3/5 h-2/4">
            <h2 className="text-3xl font-medium mb-5"></h2>

            <h1 className="text-2xl font-black">¡OOOPS!</h1>
            <h1 className="text-9xl font-extrabold">404</h1>
            <h3 className="text-base font-medium">Página no encontrada</h3>
            <div className="flex rounded-full w-full h-[53px] bg-black justify-center items-center">
              <Link href={"/login"} className="text-white">Volver a inicio</Link>
            </div>
          </div>
        </ContentMain>
        ,
        <ContentLogo>
          <h1 className="text-white text-4xl font-semibold">Error 404</h1>
          <h3 className="text-white text-xl font-light">
            Por favor ingrese a inicio e intente nuevamente.
          </h3>
        </ContentLogo>
      </DivMain>
    </>
  );
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
