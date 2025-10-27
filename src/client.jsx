const posts = [
        {
            url:"https://themes.coderthemes.com/yum_r/assets/2-br11SwnL.png",
            heading:"Dishes Grid"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/3-xtoMduti.png",
            heading:"Dishes List "
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/4-XZHhhlcC.png",
            heading:"Dishes Details "
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/5-9awJmvk0.png",
            heading:"Cart"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/7-fOHmei67.png",
            heading:"Checkout"
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/6-moTWNITi.png",
            heading:"Wishlist"
        }
]

export default function Client() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div className="mx-auto m lg:mx-0">
            <button className="bg-pink-100 px-3 rounded-2xl text-amber-900 font-semibold border-l-2 border-r-2 border-amber-900">User</button>
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Client Apps</h1>
          <p className="mt-2 text-lg/8 text-gray-900 font-medium">Instant Flavor, Effortless Ordering: Your Culinary Journey Starts Here with Our Food Client Web App!</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:p-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[0].url} alt="" className="rounded-md " />
                <h3 className="text-amber-900 font-bold mt-5y"> {posts[0].heading}</h3>
        
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[1].url} alt="demo-img" class="w-full rounded-lg"/>
                <h3 className="text-amber-900 font-bold mt-5">
                    {posts[1].heading}
                </h3>
            </div>
            <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[2].url} alt="demo-img" class="w-full rounded-lg "/>
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
