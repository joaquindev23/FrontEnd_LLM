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
                    <div className="flex flex-col justify-center items-start md:relative md:w-3/5 max-md:my-10">
                        <h2 className="text-3xl font-medium mb-5">Iniciar sesión</h2>
                        <p className="text-base font-normal">Si no tienes una cuenta regístrate</p>
                        <p className="text-base font-normal">Puedes <Link className="font-semibold text-blue-500" href={"/register"}>Registrarte Aquí!</Link></p>

                        <form action="" className="mt-12 w-full">
                            <div className="flex flex-col mb-12">
                                <label htmlFor="email" className="font-medium text-sm text-gray-400 mb-2">Email</label>
                                <div className="flex input-box items-center">
                                    <Image className="me-2 icon" src="/assets/email.svg" alt="email" width={17} height={13} />
                                    <input className="w-full" type="email" name="email" id="email" placeholder="Introduce tu dirección de correo electrónico" />
                                </div>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="password" className="font-medium text-sm text-gray-400 mb-2">Password</label>
                                <div className="flex input-box items-center">
                                    <Image className="me-2 icon" src="/assets/lock.svg" alt="email" width={17} height={17} />
                                    <input className="w-full" type="password" name="password" id="password" placeholder="Ingresa tu contraseña" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <input type="checkbox" name="remindMe" id="remindMe" className="me-2" />
                                    <label htmlFor="remindMe" className="font-light text-xs">Acuérdate de mí</label>
                                </div>
                                <Link href={""} className="font-light text-xs">
                                    Has olvidado tu contraseña?
                                </Link>
                            </div>

                            <button className="flex rounded-full w-full h-[53px] bg-black justify-center items-center shadow-xl text-white font-medium text-base" type="submit">Ingresar</button>
                        </form>

                        <div className="flex flex-col items-center w-full mt-10">
                            <p className="font-medium text-base mb-10">Ingresa con tu cuenta de</p>
                            <Link href={""}>
                                <Image src="/assets/google.svg" alt="Google" width={42} height={42} />
                            </Link>
                        </div>
                    </div>
                </ContentMain>
                <ContentLogo>
                    <h1 className="text-white text-4xl font-semibold">Ingreso de Usuario</h1>
                    <h3 className="text-white text-xl font-light">Inicia sesión con tu cuenta registrada</h3>
                </ContentLogo>
            </DivMain>
        </>
    )
}