import React from 'react'
import Button from './Button'
import Link from 'next/link'



const Header = () => {

const LINKS = [
  {title:'About'},
  {title:'Projects'},
  {title:'Contact'},
]  

return (
    <div className='bg-neutral-800/70 backdrop-blur-md flex gap-1 p-1 rounded-full'>
        {
          LINKS.map((link,index)=>{
                  return  <Link href={`#${link.title}`}>
                            <Button key={index}>{link.title}</Button>
                          </Link>
          })
        }
      
    </div>
  )
}

export default Header