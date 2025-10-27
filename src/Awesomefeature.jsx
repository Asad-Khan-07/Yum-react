const posts = [
        {
            url:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
            heading:"Ultra Responsive",
            para:"Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using."
        },
        {
            url:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
            heading:"Production Ready",
            para:"Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment."
        },
        {
            url:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z ",
            heading:"Hygienic Design",
            para:"Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate."
        },
        {
            url:"M11 9h4a2 2 0 0 0 2-2V3 M7 21v-4a2 2 0 0 1 2-2h4",
            heading:"High Performance",
            para:"We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals."
        },
        {
            url:"M21.54 15H17a2 2 0 0 0-2 2v4.54 M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17 M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            heading:"Multi Browser Support",
            para:"Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers."
        },
        {
            url:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            heading:"Well Documented",
            para:"Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services."
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/1-S2wonqkS.png",
            heading:"Great Support",
            para:"Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away."
        },
        {
            url:"https://themes.coderthemes.com/yum_r/assets/1-S2wonqkS.png",
            heading:"Highly Customizable",
            para:"Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking."
        },
        {
            url:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
            heading:"Light as a Feather",
            para:"From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines."
        },
        {
            url:"M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z",
            heading:"UX Considered",
            para:"A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience."
        }
    ]

{/* <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg> */}

export default function Awesomefeature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  px-6 text-center lg:px-8">
        <div className="mx-auto m lg:mx-0">
            <button className="bg-pink-100 px-3 rounded-2xl text-amber-900 font-semibold border-l-2 border-r-2 border-amber-900">
Feature</button>
          <h1 className="text-4xax-w-2xll  tracking-tight text-pretty text-gray-900 sm:text-4xl font-semibold">Awesome Template Features</h1>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:p-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* <div className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                <img src={posts[0].url} alt="" className="rounded-md " />
                <h3 className="text-amber-900 font-bold mt-5y"> {posts[0].heading}</h3>
        
            </div> */}

                {posts.map((each,index)=>(
                    <div key={index} className="p-5 shadow-lg rounded-lg cursor-pointer flex flex-col items-center hover:-translate-y-1  transition duration-500 delay-100 ease-in-out">
                        <div className="p-2 bg-orange-100 rounded-md">
                        <svg stroke="currentColor" fill="none" className="text-amber-600" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d={each.url}></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                        </div>
                        {/* <img src={each.url} alt="" /> */}
                            
                            <h1 className="text-gray-900 text-center font-bold mt-5y">{each.heading}</h1>
                            <p className="text-gray-600 font-semibold mt-2">{each.para}</p>
                    </div>
                ))}

        </div>
      </div>
    </div>
  )
}
