import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './Heading'
import Hero from './Hero'
import Card from './Card'
import News from './News'
import Cardsection from './Cardsection'
import Footer from './Footer'

function App() {
  const [data1, setdata] = useState(true);
  const navtoggler=(data)=>{
    setdata(data);
    console.log(data)
  }

  return (
   
    <div style={{
      overflow:data1?'visible':'hidden',
      height:data1?'auto':'100vh'

    }}>
    <Heading navtoggler={navtoggler}></Heading>
    <Hero></Hero>
    <Card></Card>
    <News></News>
    <Cardsection></Cardsection>
    <Footer></Footer>
    </div>
   
  )
}

export default App
