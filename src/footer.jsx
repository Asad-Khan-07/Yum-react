import { motion } from "framer-motion"
export default function Footer() {
  return (
    <div className="bg-white py-24 sm:py-2">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div className="mx-auto m lg:mx-0 flex flex-col justify-around items-center gap-5">
       <motion.h3
       
           initial={{scale:1}}
           whileHover={{scale:1.2}}
           transition={{duration:0.5, ease:"easeIn"}}
        //    viewport={{ once: true}}
           
       className="text-4xax-w-2xl  tracking-tight text-pretty text-amber-900 sm:text-2xs mb-10 font-semibold">All these sounds yummy, right? Wait until you purchase it. 😉</motion.h3>
          <img
                alt="Your Company"
                src="https://themes.coderthemes.com/yum_r/assets/logo-dark-Be4neTbs.png"
                className="h-10 w-30"
              />
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Get Food for yourself
</h1>
          <p className="mt-2 text-lg/6 text-gray-900 font-medium">Start working with <span className="text-amber-600">Food</span> to showcase your app to millions of people.

</p>
            <button
              type="button"
              className="relative rounded-md px-5 py-1 text-amber-50 bg-amber-600 flex items-center hover:-translate-y-1 transition duration-500 delay-150 ease-out cursor-pointer "
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
                Buy Now
            </button>

        </div>
        <div className="mt-15">© Yum. Crafted and Coded with ❤️ by <span className="text-amber-600"> Coderthemes</span></div>
      </div>
    </div>
  )
}
