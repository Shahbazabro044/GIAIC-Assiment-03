
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Homepage = () => {
  const route=useRouter()

  return (
    <>
    <div>
    <h1>THIS IS HOME PAGE</h1>
    <button onClick={()=>route.push('./Navbar')}>GO TO NAVBAR PAGE</button>
    <hr />
    <button onClick={()=>route.push('./Contact')}>GO TO CONTACT PAGE</button>
    <hr />
    <button onClick={()=>route.push('./About')}><i>GO TO MY ABOUT PAGE</i></button>
     <hr />
     <button onClick={()=>route.push('./Footer')}><i>go to my footer page</i></button>
    
    </div>
  </>
  )
}

export default Homepage









// 'use client'
// import React from 'react'

// import { useRouter } from 'next/navigation'
// import Navbar from './componet/Navbar'


// const Homepage = () =>{
//   const route =useRouter()
//   return (
//     <>
//     <div>
// <h1>THIS IS HOME PAGE</h1>
//     <button onClick={()=>route.push('/Navbar')}>go to Navbar</button>
//     </div>
//   </>
//   )
// }

// export default Homepage