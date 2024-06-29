
import Feed from './Components/Feed'
import Footer from './Components/Footer'
import LeftSidebar from './Components/Leftsidebar'
import RightSidebar from './Components/RightSidebar'

const App = () => {
  return (
    <div className='bg-black w-full h-screen w-screen flex flex-row text-white'>
      
     <LeftSidebar/>
     <Feed/>
     <RightSidebar/>
     </div>
  )
}

// export default App
// import Feed from './Components/Feed'
// import Footer from './Components/Footer'
// import LeftSidebar from './Components/LeftSidebar'
// import RightSidebar from './Components/RightSidebar'

// const App = () => {
//   return (
//     <div className='bg-black h-screen w-screen flex flex-col text-white'>
//       {/* Main Content */}
//       <div className='flex-grow flex flex-row items-start'>
//         <LeftSidebar className='w-1/5' /> {/* adjust width as needed */}
//         <Feed className='w-3/5' /> {/* adjust width as needed */}
//         <RightSidebar className='w-1/5' /> {/* adjust width as needed */}
//       </div>
//       {/* Footer */}
//       <Footer className='w-full h-16 bg-black text-white' /> {/* adjust height as needed */}
//     </div>
//   )
// }

export default App