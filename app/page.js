import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="p-8">
  
      <div className='fixed top-4 left-[50%] translate-x-[-50%]'>
         <Header/>
      </div> 
    
      <section id='About'>
        <Image src={'/exp.jpg'} width={1000}  height={1000} className='w-full' />
      </section>     
      <section id='Projects'>
        <Image src={'/exp.jpg'} width={1000}  height={1000} className='w-full' />
      </section>     
      <section id='Contact'>
        <Image src={'/exp.jpg'} width={1000}  height={1000} className='w-full' />
      </section>     
    </main>
  )
}

