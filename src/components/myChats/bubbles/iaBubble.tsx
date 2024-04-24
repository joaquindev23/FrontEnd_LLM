import React from "react";

type Props = {text?:string};

export default function IABubble({text}: Props) {
  return (
    <div className="flex items-start justify-start">
      <div className="flex flex-col space-y-2 text-sm mx-2 order-1  max-w-[80%] items-start">
        <div>
          <span className="px-4 py-2 rounded-lg rounded-tl-none inline-block bg-core-secBg text-core-text">
            Estoy bien, gracias. ¿Y tú? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti iste repellendus velit, qui eum nobis
            odit molestias obcaecati dolorem cupiditate nostrum provident ad
            nihil. Voluptate repellendus, fugit inventore optio hic eos odit
            fugiat laborum corporis! Voluptatum omnis consequuntur provident
            placeat. Beatae, nobis placeat necessitatibus voluptatibus officiis
            nemo consequatur ipsum tenetur suscipit dignissimos architecto
            facilis dolorem cumque porro! Omnis, repellat placeat.
          </span>
        </div>
      </div>
    </div>
  );
}
