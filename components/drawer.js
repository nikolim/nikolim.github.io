import { X } from 'phosphor-react'

const Drawer = ({ close, isOpen, LinkList }) => {
    return (
        <div id='navbar-drawer' onClick={close}
             className={`top-0 right-0 fixed z-40 h-screen p-4 overflow-y-auto bg-gray-800 w-48 
             ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} tabIndex='-1'
             aria-labelledby='drawer-right-label'>
            <button type='button' onClick={close}>
                <X size={24} weight='fill' className='absolute top-0 right-0 m-4 cursor-pointer' />
            </button>
            <ul className='flex flex-col'>
                <LinkList />
            </ul>
        </div>
    )
}

export default Drawer