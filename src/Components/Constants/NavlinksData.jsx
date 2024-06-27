import { FaRegHeart, FaSearch } from "react-icons/fa"
import { MdOutlineExplore } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { IoHome } from "react-icons/io5"
import profile from '../../assets/profile.jpg'

export const NAV_LINKS_DATA = [
    {
        Name : "Home",
        icon : <IoHome size={30}  />,
    },
    {
        Name : "Search",
        icon : <FaSearch size={30}/>,
    },
    {
        Name : "Explore",
        icon : <MdOutlineExplore size={30} />,
    },
    {
        Name : "Notification",
        icon : <FaRegHeart size={30} />,
    },
    {
        Name : "Message",
        icon : <RiMessengerLine  size={30}/>,
    },
    {
        Name : "Profile",
        icon : <img src={profile} width={30} height={30} style={{ borderRadius: '50%' }} alt="Profile" />

    },
    

]