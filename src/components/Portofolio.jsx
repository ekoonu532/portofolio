import React, { useState } from 'react'
import project1 from '../assets/3.png'
import project2 from '../assets/2.png'
import project3 from '../assets/1.png'
import project4 from '../assets/4.png'
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect'

const projects = [
  {
    img: project1,
    title: 'E-Commerce Toko HP',
    description: 'Platform e-commerce ini dibuat untuk sebuah toko HP, memungkinkan pelanggan untuk membeli berbagai jenis handphone secara online dengan fitur pembayaran yang aman dan pengiriman cepat. Dibuat menggunakan framework laravel dengan Boostrap.',
    links: {
      site: '#',
      github: '#'
    }
  },
  {
    img: project2,
    title: 'Sistem Arsip Surat',
    description: 'istem ini dikembangkan untuk mengarsipkan surat-surat penting secara digital, memudahkan pencarian dan penyimpanan dokumen dengan aman dan terstruktur. Dibuat menggunakan framework laravel dengan Boostrap.',
    links: {
      site: '#',
      github: '#'
    }
  },
  {
    img: project3,
    title: 'Sistem E-Ticketing',
    description: 'Sistem e-ticketing ini dikembangkan untuk Taman Pintar, memungkinkan pembelian tiket secara online, mempermudah pengelolaan dan pemantauan pengunjung. Dibuat menggunakan framework laravel dengan TailwindCSS. Serta integrasi dengan Payment Gateway Midtrans',
    links: {
      site: '#',
      github: '#'
    }, 
  },
  {
    img: project4,
    title: 'Sistem Logbook Marketing',
    description: 'Sistem logbook marketing ini mendukung pencatatan aktivitas pemasaran, laporan berbasis filter, dan kontrol akses berbasis peran. Dibangun dengan Laravel, Tailwind CSS, dan PostgreSQL, sistem ini scalable, responsif, dan stabil, dirancang untuk efisiensi dan kemudahan pengguna.',
    links: {
      site: '#',
      github: '#'
    }, 
  }
]

const Portofolio = () => {
  const [currentProject, setCurrentProject] = useState(0)
  return (
    <div
      className='relative max-w-[1000px] mx-auto p-6 md:my-20 flex flex-col md:flex-row'
      id='portofolio'
    >
      <div className='glass p-6 w-full border-2 max-w-[700px]'>
        <div className='w-full h-80'>
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className='w-full h-full object-cover rounded-lg mb-4'
          />
        </div>
        <p className='text-gray-300 my-4 text-2xl'>
          {projects[currentProject].title}
        </p>
        <p className='text-gray-200 my-4'>
          {projects[currentProject].description}
        </p>
        
        <div className='flex space-x-4'>
          <a
            href={projects[currentProject].links.site}
            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-800 transition duration-300'
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className='px-4 py-2 bg-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300 '
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      

      <div className='absolute inset-0 '>
            <div className='hidden md:block'>
              <ShinyEffect left={100} top={0} size={900}/>
            </div>
           

        </div>

      <ul className='z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap p-4 justify-center mt-4 md:gap-2'>
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 rounded-lg p-2 max-w-[200px] transition duration-300 ${
              currentProject === index
                ? 'bg-slate-900 text-white' 
                : 'bg-slate-700 hover:bg-slate-800' 
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Portofolio
