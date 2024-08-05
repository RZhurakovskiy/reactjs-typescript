import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bild">React App</span>
            <span>
                <Link to='/' className='mr-2'>Товары</Link>
                <Link to='/about'>О нас</Link>
            </span>
        </nav>
    )
}


export default Navigation