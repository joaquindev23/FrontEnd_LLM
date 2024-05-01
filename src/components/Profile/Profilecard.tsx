import React from 'react';

function ProfileCard() {

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 h-5/6 m-14 overflow-hidden">
      <div className="row-span-3 bg-core-secBg rounded-lg">
        <div className=' mt-20 transform-gpu mt-4 text-center mt-8 flex  items-center justify-center gap-8 md:flex-row lg:mt-0'>
          <label htmlFor="fileInput" className="block cursor-pointer mt-4">
            <img src="https://media.discordapp.net/attachments/1233455693311508561/1234973274169933834/Foto.png?ex=6632adfd&is=66315c7d&hm=a92ad5eee71e64806701ba548c4a7fbb913b3b81e3e202b6217603d4d78a4f3b&=&format=webp&quality=lossless&width=344&height=344" alt="Imagen" className="border-2 border-core-primary rounded-full p-0.5"  />
            <input id="fileInput" type="file" className="hidden" />
          </label>
        </div>
        <div className='text-center text-core-text mt-6'>
          <div>
            <h2 className='m-2 text-semibold text-lg stroke-black'>Nombre y Apellido</h2>
            <h3 className='m-2'>Profesión</h3>
            <h3 className='m-2'>Pais</h3>
          </div>
          <div>
            <hr className='mx-auto w-3/4 border-gray-300 m-8 mb-6'/>
            <h3>Adicionar</h3>
            <hr className='mx-auto w-3/4 border-gray-300 m-8 mt-6'/>
            <h3 className='m-2'>Perfil</h3>
            <h3 className='-2'>Mis conversaciones</h3>
            <h3 className='m-2'>IA Creadas</h3>
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2 bg-core-secBg rounded-lg">

      </div>
      <div className="col-span-2 bg-core-secBg rounded-lg">

      </div>
      <div className="row-span-3 bg-core-secBg rounded-lg">
          
      </div>
    </div>
  );
}

export default ProfileCard;
