import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
                <a className="btn btn-ghost"><span className='text-4xl'>rorar</span><span className='mt-5'>Media</span></a>
            </div>
            <div className="flex-1">
                <div className="dropdown border-l-2 border-r-2 border-gray border-t-0 border-b-0 w-20 text-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex-none'>
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>

            <div className="flex-none ml-4 border-l border-r border-gray-400 px-4">
                <button className="flex items-center gap-2">
                    <span className="text-base font-medium">
                        Bangla
                    </span>

                    <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black text-sm font-semibold">
                        BAN
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Header;