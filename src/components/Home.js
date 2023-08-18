import React from 'react'
import Footer from './Footer'
import Form from './Form'
import Heading from './Heading'
import Type from './Type'

const Home = () => {
  return (
    <div className='home'>
      <Heading />
      <Form />
      <Type heading="Benefits of working with us" tname="benefits" tplaceholder="Type your benefits"/>
      <Type heading="Questions for candidates" tname="questions" tplaceholder="Type your questions"/>
      <Footer />
    </div>
  )
}

export default Home
