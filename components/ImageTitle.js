import React from 'react';
import H4 from "@material-tailwind/react/Heading4";


export default function ImageTitle({children, title, flex}) {
  return (
    <div className='my-24 w-full '>
       <H4 color="deepPurple">{title}</H4>
       <div className={`${flex && 'flex'} items-end shadow-md min-w-max bg-white rounded-lg p-4 h-28`}>
       {children}
       </div>
    </div>
  )
}
