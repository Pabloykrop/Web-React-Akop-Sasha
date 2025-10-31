import { useState } from 'react'
import Head from './Head'
import Servis from './Servis'
import Documentation from './Documentation'
import Customer from './Customer'
import Workspace from './Workspace'
import Great from './Great'
import Slade from './Slade'
import Question from './Question'

function App() {

return (
    <>
      <div className='bg-white dark:bg-[#00113B]'>
        <Head/>
        <Servis/>
        <Documentation/>
        <Customer/>
        <Workspace/>
        <Great/>
        <Slade/>
        <Question/>
      </div>
    </>
  )
}

export default App
