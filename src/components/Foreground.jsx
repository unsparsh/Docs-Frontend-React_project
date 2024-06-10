import React, { useRef, useState } from 'react';
import Card from './Card';


function Foreground() {

const ref = useRef(null);

const data = [
  {desc: "This is the dummy data description being loaded here.", filesize:"" , close : true , tag: {isOpen : true , tagTitle : "Upload" , tagColor: "blue" } },
  {desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.", filesize:"1mb" , close : true , tag: {isOpen : true , tagTitle : "Download Now" , tagColor: "green" } },
  {desc: "Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet .", filesize:"1.9mb" , close : false , tag: {isOpen : true , tagTitle : "Download Now" , tagColor: "green" } }
];

  

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        
         {data.map((item,index) => (
            <Card data={item} reference={ref}/>
         ))}

        


      </div>
    </>
  )
}

export default Foreground
