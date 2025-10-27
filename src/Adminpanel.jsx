const posts = [
        {
            url:"https://themes.coderthemes.com/yum_r/assets/1-d2BeXmwF.png",
            heading:"Wallet"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/19-hv1oqyiD.png",
            heading:"Manage"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/13-PDG71ZkC.png",
            heading:"Restaurants List "
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/12-OCb4bxLR.png",
            heading:"Restaurants Details"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/16-1PC1arel.png",
            heading:"Customer Details"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/9-KJg_nlla.png",
            heading:"Dishes List"
        }
]

export default function Adminpanel() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div className="mx-auto m lg:mx-0">
            <button className="bg-pink-100 px-3 rounded-2xl text-amber-900 font-semibold border-l-2 border-r-2 border-amber-900">
Control</button>
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Admin Panel</h1>
          <p className="mt-2 text-lg/8 text-gray-900 font-medium">Effortless Kitchen Management: Elevate Your Culinary Business with Our Admin Web App!</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[0].url} alt="" className="rounded-md" />
                <h3 className="text-amber-900 font-bold mt-5y"> {posts[0].heading}</h3>
        
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center  hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[1].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[1].heading}
                </h3>
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[2].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[2].heading}
                </h3>
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[3].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[3].heading}
                </h3>
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[4].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[4].heading}
                </h3>
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[5].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[5].heading}
                </h3>
            </div>
        </div>
      </div>
    </div>
  )
}
