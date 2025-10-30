import React from 'react'
import styl from './assets/styl.png'
import styl_1 from './assets/styl_1.png'
import styl_2 from './assets/styl_2.png'
import styl_3 from './assets/styl_3.png'
import styl_4 from './assets/styl_4.png'
import styl_5 from './assets/styl_5.png'

const imgs = [styl, styl_1, styl_2, styl_3, styl_4, styl_5]

const Workspace = () => {
  return (
    <section className='mt-30'>
      <p className="text-5xl font-bold text-center">
        <span className="block text-pink-600 text-3xl mb-2">Working space</span>
        Let’s meet our interior room decoration
      </p>

      <div className="grid grid-cols-3 mt-10">
        {imgs.map((img, i) => (
          <div key={i}>
            <img src={styl} alt="space" className="rounded-xl" />
            <p className="relative bottom-8 ml-3 text-white text-lg font-medium">
              Front working space
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Workspace
