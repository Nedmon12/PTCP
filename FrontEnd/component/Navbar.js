import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className='shadow-sm fixed w-full z-10'>
                <div className='w-full'>
                    <div className='flex items-center h-'>

                    </div>
                    <h1>
                        logo
                    </h1>
                </div>
                <Link href="./landing"><a>Home</a></Link>
                <Link href="./landing/about"><a>about</a></Link>
                <Link href="./landing/schools"><a>Schools</a></Link>
            </nav>
        </div>
      );
}
 
export default Navbar;
