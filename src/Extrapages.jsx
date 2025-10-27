import { motion } from "framer-motion"
const posts = [
        {
            url:"https://themes.coderthemes.com/yum_r/assets/8-1a5NBkQy.png",
            heading:"FAQs"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/10-dLyb3dQX.png",
            heading:"Error 404"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/9-K5R-AtI5.png",
            heading:"Contact Us"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/8-D0fEn_EC.png",
            heading:"Dish Details"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/7-1hX2lWi5.png",
            heading:"Add Dish"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/6-C8Zhxz29.png",
            heading:"Edit Dish"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/17-xVa1B-HL.png",
            heading:"Customer List"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/15-UZypgFk9.png",
            heading:"Add Customer"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/14-dq4qxHNH.png",
            heading:"Edit Customer"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/5-GMT4OA4M.png",
            heading:"Seller List "
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/4-CKeUYuq8.png",
            heading:"Seller Details"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/3-h-1_sD36.png",
            heading:"Add Seller"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/2-20lhwlnO.png",
            heading:"Edit Seller"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/21-Z_wozuh6.png",
            heading:"Profile"
        }

    ]

export default function Extrapages() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div className="mx-auto m lg:mx-0">
            <button className="bg-pink-100 px-3 rounded-2xl text-amber-900 font-semibold border-l-2 border-r-2 border-amber-900">
Helper</button>
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Extra Pages</h1>
          <p className="mt-2 text-lg/8 text-gray-900 font-medium">Beyond Taste: Explore Food Varieties with our Extra Pages Web App – Where Culinary Diversity Meets Innovation!</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[0].url} alt="" className="rounded-md " />
                <h3 className="text-amber-900 font-bold mt-5y"> {posts[0].heading}</h3>
        
            </div> */}

                {posts.map((each,index)=>(
                    <motion.div
                    
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:2}}
           viewport={{ once: true}}
           
                    key={index} className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                        <img src={each.url} alt="" />
                            <h1 className="text-amber-900 font-bold mt-5y">{each.heading}</h1>
                    </motion.div>
                ))}

        </div>
      </div>
    </div>
  )
}
