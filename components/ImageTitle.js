import React from 'react';
import H4 from "@material-tailwind/react/Heading4";


export default function ImageTitle({children, title}) {
  return (
    <div className='mt-16 mb-'>
       <H4 color="deepPurple">{title}</H4>
       <div className='flex'>
       {children}
       </div>
    </div>
  )
}
