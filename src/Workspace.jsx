import React from 'react'
import styl from './assets/styl.png'
import styl_1 from './assets/styl_1.png'
import styl_2 from './assets/styl_2.png'
import styl_3 from './assets/styl_3.png'
import styl_4 from './assets/styl_4.png'
import styl_5 from './assets/styl_5.png'

const Workspace = () => {
  return (
    <section className='mt-30'>
      <p className="text-5xl font-bold text-center dark:text-white">
        <span className="block text-pink-600 text-3xl mb-2, dark:text-[#FFCC00]">Working space</span>
        Let’s meet our interior room decoration
      </p>
      
      <div className='flex justify-center mt-10'>
        <div className="grid grid-cols-3 gap-20">
            <div>
              <img src={styl} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Front working space
              </p>
              <img src={styl_3} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Guest rest room
              </p>
            </div>
            <div>
              <img src={styl_1} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Meeting corner
              </p>
              <img src={styl_4} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Single working space
              </p>
            </div>
            <div>
              <img src={styl_2} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Guest meeting room
              </p>
              <img src={styl_5} alt="space" className="rounded-xl" />
              <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
                Kitchen room
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Workspace
