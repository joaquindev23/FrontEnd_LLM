import React from 'react';

export default function ProfileCard() {

  return (
    <div className="grid grid-rows-6 grid-cols-12 grid-flow-col gap-3 h-[90%] mt-9 mx-6 overflow-hidden">
      <div className="row-span-6 col-span-4 bg-core-secBg rounded-xl p-6">
        <div className='transform-gpu text-center h-1/3 flex justify-center gap-8 md:flex-row lg:mt-0'>
          <label htmlFor="fileInput" className="block cursor-pointer">
            <img src="https://media.discordapp.net/attachments/1233455693311508561/1234973274169933834/Foto.png?ex=6632adfd&is=66315c7d&hm=a92ad5eee71e64806701ba548c4a7fbb913b3b81e3e202b6217603d4d78a4f3b&=&format=webp&quality=lossless&width=344&height=344" alt="Imagen" className="border-2 border-core-primary rounded-full p-0.5 w-60 h-60"  />
            <input id="fileInput" type="file" className="hidden" />
          </label>
        </div>
        <div className='flex flex-col items-center text-core-text'>
          <h2 className='m-2 text-semibold text-lg stroke-black'>Nombre y Apellido</h2>
          <h3 className='m-2'>Profesión</h3>
          <h3 className='m-2'>Pais</h3>
        </div>
        <div className='flex flex-col h-1/6 justify-center items-center text-core-text'>
          <hr className='mx-auto w-3/4 border-gray-300 mb-6'/>
            <div className='flex items-center h-2/5'>
              <h3>Adicionar</h3>
            </div>
          <hr className='mx-auto w-3/4 border-gray-300 mt-6'/>
        </div>
        <div className='flex justify-evenly items-center flex-col text-core-text h-1/4 mt-5'>
          <h3 className='m-2'>Perfil</h3>
          <h3 className='m-2'>Mis conversaciones</h3>
          <h3 className='m-2'>IA Creadas</h3>
        </div>
      </div>
      <div className="flex flex-col row-span-4 col-span-5 bg-core-secBg rounded-2xl p-8 text-core-text">
        <div className='flex flex-row justify-between'>
          <h1>Breadcrumb</h1>
          <button>Edit</button>
        </div>
        <div className="flex flex-col h-full justify-evenly">
          <div>
            <h1 className='text-3xl'>Nombre Y Apellido</h1>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4   ">
              <h5>Profesion</h5>
            </div>
            <div className="w-2/3">
              <p>Vacio</p>
            </div>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4   ">
             <h5>Sobre mi</h5>
            </div>
            <div className="w-2/3">
              <p>Vacio</p>
            </div>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4">
              <h5>Pais</h5>
            </div>
            <div className="w-2/3">
              <p>Vacio</p>
            </div>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4">
              <h5>Musica</h5>
            </div>
            <div className="flex flex-row w-2/3">
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] h-full mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%]'>
                <button>Agregar</button>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4">
              <h5>Peliculas</h5>
            </div>
            <div className="flex flex-row w-2/3">
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] h-full mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%]'>
                <button>Agregar</button>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-[7%]">
            <div className="w-1/4">
              <h5>Libros</h5>
            </div>
            <div className="flex flex-row w-2/3">
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] h-full mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%] mr-2.5'>
                <button>Agregar</button>
              </div>
              <div className='flex justify-center border border-core-primary rounded-full w-[30%]'>
                <button>Agregar</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="row-span-2 col-span-5 bg-core-secBg rounded-2xl p-8 text-core-text">
        <div className='flex flex-row justify-between'>
          <h1>IA Creadas{}</h1>
          <button>Edit</button>
        </div>
        <div className='flex justify-center items-center h-5/6'>
          <h1 className='text-core-text'>No hay ninguna IA creada</h1>
        </div>
      </div>
      <div className="row-span-6 col-span-3 bg-core-secBg rounded-2xl p-8 text-core-text">
        <div className='flex justify-center mt-12'>
          <h1 className='text-3xl'>Guardado</h1>
        </div>
        <div className='flex justify-center items-center h-2/3 mt-12'>
          <h1 className='text-core-text'>Sin chats guardados</h1>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='text-core-text'>Mostrar todo</button>
        </div>
      </div>
    </div>
  );
};
