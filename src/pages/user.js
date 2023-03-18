import { React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';

export default function User() {
    useEffect(() => {
        return () => {
            const bars = document.getElementById('bars');
            const menu = document.getElementById('menu');
            
            bars.addEventListener('click', () => {
                menu.classList.toggle('mob-view');
            });
        };
    });
    return (
        <div className="bg-gray-200 flex flex-col md:flex-row">
        <div className=" mx-4 mt-3 md:w-1/5 ">
            <div className="p-2 bg-white flex items-center justify-between">
                <h2 className="text-black font-bold text-lg mb-2">Holi Company</h2>
                <FontAwesomeIcon icon={faBars} id="bars" className='menu_btn text-black hide'/>
            </div>
            <div className="bg-gray-200 py-1">
            </div>
            <div id="menu" className="mob-view bg-white min-h-screen">
            <ul className="bg-white px-3 divide-y">
                        <li className=" mb-2  p-2">
                            <Link to='/' className='flex text-gray-900 items-center'>
                                {/* <i classNameName="fas text-black active fa-home mr-2"></i> */}
                                <FontAwesomeIcon icon={faHome} className='text-black mr-2' />
                                Home
                            </Link>
                        </li>
                        <li className=" mb-2 p-2">
                            <Link to='/user' className='flex active text-gray-900 items-center'>
                            <FontAwesomeIcon icon={ faUsers} className='active text-black mr-2'/>
                                Users
                            </Link>
                        </li>
                        <li className=" mb-2 p-2">
                            <Link to='#' className='flex text-gray-900 items-center'>
                            <FontAwesomeIcon icon={ faGear} className='text-black mr-2'/>
                                Settings
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>

        <div className="mt-3 md:w-4/5 mx-4 px-3">
            <div className="bg-white flex rounded-md justify-between border-b-2 mb-4">
                <h2 className="font-bold text-2xl  p-2">Users</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-md shadow-md p-3 card">
                    d
                </div>
                <div className="bg-white rounded-md shadow-md p-3 card">
                    d
                </div>
                <div className="bg-white rounded-md shadow-md p-3 card">
                    d
                </div>
                <div className="bg-white rounded-md shadow-md p-3 card">
                    d
                </div>
            </div>
        </div>
    </div>
    )
}