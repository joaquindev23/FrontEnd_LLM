'use client';

import { ContentLogo, ContentMain, DivMain } from "@/components/helpers/loginRegisterVerificacion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./css/style.css";

export default function Login() {

    return (
        <>
            <DivMain>
                <ContentMain>
                    <div className="flex flex-col justify-center items-start relative max-sm:w-10/12 sm:w-10/12 xl:w-3/5">
                        <h2 className="text-3xl font-medium mb-5">Tu cuenta fue creada con exito!</h2>
                        <p className="text-base font-normal mb-12">Te hemos enviado un correo electronico para que puedas veriricar tus datos y saber que eres una persona humana.
                        <span className="block mt-6">Por favor verifique su cuenta para poder empezar a usar el sistema.</span></p>


                        <Link href={"/login"} className="flex rounded-full w-full h-[53px] bg-black justify-center items-center shadow-xl text-white font-medium text-base" type="submit">Ingresar</Link>

                    </div>
                </ContentMain>,
                <ContentLogo>
                    <h1 className="text-white text-4xl font-semibold">Verifica tu usuario</h1>
                    <h3 className="text-white text-xl font-light">Ingresa a tu casilla de correo y verifica tu cuenta</h3>
                </ContentLogo>
            </DivMain>
        </>
    )
}