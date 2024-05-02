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
                    <div className="flex flex-col justify-center items-start relative w-3/5 mt-16">
                        <h2 className="text-3xl font-medium mb-5">Registro</h2>
                        <p className="text-base font-normal">Si ya tienes una cuenta inicia sesión</p>
                        <p className="text-base font-normal">Puedes <Link className="font-semibold text-blue-500" href={"/login"}>Ingresar Aquí!</Link></p>

                        <form action="" className="mt-12 w-full">
                            <div className="flex flex-col mb-12 field">
                                <label htmlFor="email" className="font-medium text-sm text-gray-400 mb-2">Email</label>
                                <div className="flex">
                                    <Image className="me-2" src="/assets/email.svg" alt="email" width={17} height={13} />
                                    <input className="w-full" type="email" name="email" id="email" placeholder="Introduce tu dirección de correo electrónico" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-12 field">
                                <label htmlFor="username" className="font-medium text-sm text-gray-400 mb-2">Username</label>
                                <div className="flex">
                                    <Image className="me-2" src="/assets/user.svg" alt="username" width={17} height={13} />
                                    <input className="w-full" type="username" name="username" id="username" placeholder="Ingrese su nombre de usuario" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-12 field">
                                <label htmlFor="password" className="font-medium text-sm text-gray-400 mb-2">Password</label>
                                <div className="flex">
                                    <Image className="me-2" src="/assets/lock.svg" alt="password" width={17} height={17} />
                                    <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-12 field">
                                <label htmlFor="password" className="font-medium text-sm text-gray-400 mb-2">Confirm Password</label>
                                <div className="flex">
                                    <Image className="me-2" src="/assets/lock.svg" alt="password" width={17} height={17} />
                                    <input type="password" name="password" id="password" placeholder="Confirma tu contraseña" />
                                </div>
                            </div>

                            <button className="flex rounded-full w-full h-[53px] bg-black justify-center items-center shadow-xl text-white font-medium text-base" type="submit">Registrar</button>
                        </form>

                        <div className="flex flex-col items-center w-full mt-10">
                            <p className="font-medium text-base mb-10">Registrate con tu cuenta de</p>
                            <Link href={""}>
                                <Image src="/assets/google.svg" alt="Google" width={42} height={42} />
                            </Link>
                        </div>
                    </div>
                </ContentMain>,
                <ContentLogo>
                    <h1 className="text-white text-4xl font-semibold">Ingreso de Usuario</h1>
                    <h3 className="text-white text-xl font-light">Inicia sesión con tu cuenta registrada</h3>
                </ContentLogo>
            </DivMain>
        </>
    )
}