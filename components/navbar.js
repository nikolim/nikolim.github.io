import {useState} from "react";
import {Link, scroller} from 'react-scroll'
import Drawer from "./drawer";
import {List} from "phosphor-react";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div id="home">
            <nav className="fixed top-0 left-0 bg-gray-900 flex flex-col items-center default-text w-full px-2 sm:px-4 py-2 md:py-4 z-20" id="home">
                <div className="hidden md:block text-5xl pt-5">Nikolai Limbrunner</div>
                <div className='container flex justify-between items-center mx-auto'>
                    <div className="md:hidden pt-3 pl-3 text-3xl">Nikolai Limbrunner</div>
                    <button type='button' onClick={() => setMobileMenu(!mobileMenu)}
                            className='md:hidden inline-flex items-center p-2 pt-5 ml-3 text-sm text-gray-500 rounded-lg '>
                        <List size={24} weight='fill'/>
                    </button>
                    <Drawer LinkList={LinkList} isOpen={mobileMenu} close={() => setMobileMenu(false)}/>
                    <div className={`hidden w-full md:block md:w-auto mx-auto`} id='navbar-default'>
                        <ul className='flex flex-row space-x-8 mt-5 text-sm font-medium'>
                            <LinkList/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>)
}

const CustomLink = ({target}) => {
    return (
        <li key={target} className="py-1 md:py-0">
            <Link
                activeClass="text-gray-200"
                to={target}
                spy={true}
                smooth={true}
                offset={-120}
                className={'text-xl text-gray-400 hover:text-gray-200 cursor-pointer'}
                duration={700}>
                {target.charAt(0).toUpperCase() + target.slice(1)}
            </Link>
        </li>)
}

const LinkList = () => {
    return (<>
        <CustomLink target={'home'}/>
        <CustomLink target={'projects'}/>
        <CustomLink target={'experience'}/>
        <CustomLink target={'education'}/>
        <CustomLink target={'skills'}/>
        <CustomLink target={'person'}/>
    </>)
}

export default Navbar