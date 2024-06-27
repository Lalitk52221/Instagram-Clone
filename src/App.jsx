
import Feed from './Components/Feed'
import LeftSidebar from './Components/Leftsidebar'
import RightSidebar from './Components/RightSidebar'

const App = () => {
  return (
    <div className='bg-black w-screen h-screen flex flex-row items-start text-white'>
     <LeftSidebar/>
     <Feed/>
     <RightSidebar/>
    </div>
  )
}

export default App
