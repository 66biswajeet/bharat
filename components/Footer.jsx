import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className='w-full bg-slate-300 text-gray-600 py-10'>
      <div className='mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row'>
        <div className='w-full px-4 md:w-1/2 lg:px-0'>
          <Image
            width={100}
            height={100}
            className='h-full w-1/2'
            src='/logo.webp'
            alt='bharatshakti logo'
          />
        </div>

        <div className='mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3'>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className='mb-8 lg:mb-0'>
              <p className='mb-6 text-lg font-semibold  '>Company</p>
              <ul className='flex flex-col space-y-4 text-[14px] font-medium '>
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
            </div>
          ))}
          <div>
            <h6 className='text-2xl mb-2'>Follow us on</h6>
            <div className='inline-flex gap-2'>
              <button className='p-2 rounded-full bg-slate-500'>
                <Facebook strokeWidth={2.75} color='#333' />
              </button>
              <button className='p-2 rounded-full bg-slate-500'>
                <Instagram strokeWidth={2.75} color='#333' />
              </button>
              <button className='p-2 rounded-full bg-slate-500'>
                <Twitter strokeWidth={2.75} color='#333' />
              </button>
              <button className='p-2 rounded-full bg-slate-500'>
                <Youtube strokeWidth={2.75} color='#333' />
              </button>
              <button className='p-2 rounded-full bg-slate-500'>
                <Linkedin strokeWidth={2.75} color='#333' />
              </button>
            </div>
            <div className='flex pt-8 flex-col space-y-2 '>
              <div className='inline-flex items-center gap-2'>
                <MapPin className='h-5 w-5' />
                <p className='w-full text-xl font-semibold  '>Head office</p>
              </div>
              <p className='text-sm font-medium'>
                12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
              </p>
              <hr />
              <p className='w-full text-sm lg:text-base inline-flex items-center gap-2'>
                <Phone className='lg:h-5 lg:w-5' /> +91-999-999-9999
              </p>
              <p className='w-full text-sm lg:text-base inline-flex items-center gap-2'>
                <Mail className='lg:h-5 lg:w-5' /> contact@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
