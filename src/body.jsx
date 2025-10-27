import React from 'react'
import { motion } from 'framer-motion'
const Body = () => {
  return (
    <>
          <div className="bg-linear-to-b from-amber-50 to-pink-200 ">
      <div className="mx-auto p-10">
        <div className=" grid  grid-cols-1 gap-x-8  justify-items-center lg:max-w-none lg:grid-cols-2">
            <motion.div 
             initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{ once: true }}
            className="flex flex-col gap-5 justify-center ">
              <h1 className="text-amber-900 font-bold text-3xl">Multipurpose <span className="text-orange-600">Food</span>  Client & Admin App with Tailwind</h1>
              <h3 className="text-gray-500 font-medium text-2xl">Discover the ease of having your preferred dishes delivered straight to your door. 🚪</h3>
            <button className="flex bg-amber-600 p-2 rounded-3xl text-amber-50 w-50 justify-center hover:-translate-y-1 transition duration-500 delay-150 ease-out cursor-pointer  gap-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

              View Demos

            </button>
            </motion.div>
            <motion.div 
             initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{ once: true }}
            className="mb:mt-2 sm:mt-2 lg:mt-0  "> 
              <img className="rounded-md shadow-md h-2/2" src="https://themes.coderthemes.com/yum_r/assets/1-S2wonqkS.png" alt="" />
            </motion.div>
        </div>
      </div>
        <div className='mt-20 text-center flex flex-col gap-10 items-center p-10'>
          
        <h1 className='text-gray-950 text-3xl'>Developed Using</h1>
        
        <div className='flex gap-10 items-center justify-center'>
        <div className=''>
        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2054%2033'%3e%3cg%20clip-path='url(%23prefix__clip0)'%3e%3cpath%20fill='%2338bdf8'%20fill-rule='evenodd'%20d='M27%200c-7.2%200-11.7%203.6-13.5%2010.8%202.7-3.6%205.85-4.95%209.45-4.05%202.054.513%203.522%202.004%205.147%203.653C30.744%2013.09%2033.808%2016.2%2040.5%2016.2c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C36.756%203.11%2033.692%200%2027%200zM13.5%2016.2C6.3%2016.2%201.8%2019.8%200%2027c2.7-3.6%205.85-4.95%209.45-4.05%202.054.514%203.522%202.004%205.147%203.653C17.244%2029.29%2020.308%2032.4%2027%2032.4c7.2%200%2011.7-3.6%2013.5-10.8-2.7%203.6-5.85%204.95-9.45%204.05-2.054-.513-3.522-2.004-5.147-3.653C23.256%2019.31%2020.192%2016.2%2013.5%2016.2z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='prefix__clip0'%3e%3cpath%20fill='%23fff'%20d='M0%200h54v32.4H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" height={50} width={50} />
        </div>
        <div className=''>
        <img src="data:image/svg+xml,%3csvg%20width='27'%20height='27'%20viewBox='0%200%2027%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M3.96223%2023.9057L1.8848%200.5979H24.7365L22.6591%2023.9057L13.2853%2026.5405'%20fill='%23E34F26'/%3e%3cpath%20d='M13.336%2024.5137L20.8857%2022.4363L22.6591%202.47266H13.336'%20fill='%23EF652A'/%3e%3cpath%20d='M13.336%2011.1371H9.53582L9.28247%208.19825H13.336V5.36078H6.14099L6.90103%2014.0252H13.336V11.1371ZM13.2853%2018.5854L10.0932%2017.724L9.8905%2015.4439H7.05303L7.40772%2019.9535L13.2853%2021.5749V18.5854Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M13.2854%2011.1371V14.0252H16.8322L16.4775%2017.724L13.2854%2018.5854V21.5749L19.163%2019.9535L19.9737%2011.1371H13.2854ZM13.2854%205.36078V8.19825H20.227L20.4804%205.36078H13.2854Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='25.9426'%20height='25.9426'%20fill='white'%20transform='translate(0.364685%200.5979)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" height={50} width={50} />
        </div>
        <div className=''>
        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20630'%3e%3crect%20width='630'%20height='630'%20fill='%23f7df1e'/%3e%3cpath%20d='m423.2%20492.19c12.69%2020.72%2029.2%2035.95%2058.4%2035.95%2024.53%200%2040.2-12.26%2040.2-29.2%200-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2%200-44.4%2033.83-78.2%2086.7-78.2%2037.64%200%2064.7%2013.1%2084.2%2047.4l-46.1%2029.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34%200-28.33%2011-28.33%2025.37%200%2017.76%2011%2024.95%2036.4%2035.95l14.8%206.34c50.3%2021.57%2078.7%2043.56%2078.7%2093%200%2053.3-41.87%2082.5-98.1%2082.5-54.98%200-90.5-26.2-107.88-60.54zm-209.13%205.13c9.3%2016.5%2017.76%2030.45%2038.1%2030.45%2019.45%200%2031.72-7.61%2031.72-37.2v-201.3h59.2v202.1c0%2061.3-35.94%2089.2-88.4%2089.2-47.4%200-74.85-24.53-88.81-54.075z'/%3e%3c/svg%3e" alt="" height={50} width={50} />
        </div>
        <div className=''>
        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='-11.5%20-10.23174%2023%2020.46348'%3e%3ctitle%3eReact%20Logo%3c/title%3e%3ccircle%20cx='0'%20cy='0'%20r='2.05'%20fill='%2361dafb'/%3e%3cg%20stroke='%2361dafb'%20stroke-width='1'%20fill='none'%3e%3cellipse%20rx='11'%20ry='4.2'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(60)'/%3e%3cellipse%20rx='11'%20ry='4.2'%20transform='rotate(120)'/%3e%3c/g%3e%3c/svg%3e" alt="" height={50} width={50} />
        </div>
        <div className=''>
        <img src="data:image/svg+xml,%3csvg%20width='410'%20height='404'%20viewBox='0%200%20410%20404'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M399.641%2059.5246L215.643%20388.545C211.844%20395.338%20202.084%20395.378%20198.228%20388.618L10.5817%2059.5563C6.38087%2052.1896%2012.6802%2043.2665%2021.0281%2044.7586L205.223%2077.6824C206.398%2077.8924%20207.601%2077.8904%20208.776%2077.6763L389.119%2044.8058C397.439%2043.2894%20403.768%2052.1434%20399.641%2059.5246Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M292.965%201.5744L156.801%2028.2552C154.563%2028.6937%20152.906%2030.5903%20152.771%2032.8664L144.395%20174.33C144.198%20177.662%20147.258%20180.248%20150.51%20179.498L188.42%20170.749C191.967%20169.931%20195.172%20173.055%20194.443%20176.622L183.18%20231.775C182.422%20235.487%20185.907%20238.661%20189.532%20237.56L212.947%20230.446C216.577%20229.344%20220.065%20232.527%20219.297%20236.242L201.398%20322.875C200.278%20328.294%20207.486%20331.249%20210.492%20326.603L212.5%20323.5L323.454%20102.072C325.312%2098.3645%20322.108%2094.137%20318.036%2094.9228L279.014%20102.454C275.347%20103.161%20272.227%2099.746%20273.262%2096.1583L298.731%207.86689C299.767%204.27314%20296.636%200.855181%20292.965%201.5744Z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='6.00017'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.81818'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.0833333'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" height={50} width={50} />
        </div>
        </div>
        
        </div>

    </div>
    </>
  )
}

export default Body
