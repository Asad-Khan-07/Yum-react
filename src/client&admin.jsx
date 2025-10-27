import { motion } from "framer-motion"
const posts = [
        {
            url:"https://themes.coderthemes.com/yum_r/assets/1-S2wonqkS.png",
            heading:"Home"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/admin-NJQ-X7Pf.png",
            heading:"Admin Panel "
        }
]

export default function Clientadmin() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div
        className="mx-auto m lg:mx-0">
            <button className="bg-pink-100 px-3 rounded-2xl text-amber-900 font-semibold border-l-2 border-r-2 border-amber-900">Apps</button>
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Client & Admin Apps</h1>
          <p className="mt-2 text-lg/8 text-gray-900 font-medium">Instant Flavor, Effortless Ordering: Your Culinary Journey Starts Here with Our Food Client Web App!</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:p-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
           
            <motion.div      
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:2}}
           viewport={{ once: true }}

            className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[0].url} alt="" className="rounded-md " />
                <h3 className="text-amber-900 font-bold mt-5y"> {posts[0].heading}</h3>
        {/* <img src="" alt="demo-img" class="w-full rounded-lg border border-default-100"></img> */}
            </motion.div>
            
            <motion.div             
           initial={{opacity:0}}
           whileInView={{opacity:1  }}
           transition={{duration:2}}
           viewport={{ once: true }}
            className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
<img src={posts[1].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[1].heading}
                </h3>
        {/* <img src="" alt="demo-img" class="w-full rounded-lg border border-default-100"></img> */}
            </motion.div>
        </div>
      </div>
    </div>
  )
}
