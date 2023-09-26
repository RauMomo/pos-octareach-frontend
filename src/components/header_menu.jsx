import cls from 'classnames';
import { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { BsPersonGear } from 'react-icons/bs';
import { IoExpandOutline } from 'react-icons/io5';
import { PiGlobe } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/images/no_avatar.png';
import logo from '../assets/images/octareach-logo-label.png';
import styles from '../assets/styles/dashboard.module.css';
import OutlineButton from './outline_button';

export default function HeaderMenu() {
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handlePosButton = () => {
    console.log('POS');
  }

  const handleProfileDropdownClick = () => {
    setIsProfileMenu(!isProfileMenu)
    console.log(isProfileMenu);
  }
  
  const fullScreenButton = () => {
    document.body.requestFullscreen();
  }

  return (
     <header className="bg-cream min-w-full max-w-screen-xl w-full fixed flex flex-nowrap flex-col md:w-auto lg:max-w-fit container flex-shrink-0 lg:min-w-full drop-shadow-lg px-5 z-10">
          <div className='flex flex-row justify-between h-20'>
            <div className="flex flex-row justify-normal items-start lg:px-0 lg:items-start">
              <div className="flex flex-col items-start justify-between px-4">
                <div className="text-2xl font-bold pt-8 justify-start items-start text-black lg:ml-auto lg:mr-auto flex-nowrap">
                  <img src={logo} alt="Caption Logo" width={500} height={60} className="w-11/12 h-6 self-center mb-8 inline-block" />
                  <div className="inline-flex lg:hidden" />
                </div>
              </div>
              <div className='flex flex-col items-center justify-normal px-4 align-middle'>
                <div className='absolute items-center justify-center top-1/3'>
                  <RxHamburgerMenu size={'2em'} alignmentBaseline='middle' />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-normal items-start align-middle lg:px-0 lg:items-start">
              {/* <div className="text-2xl justify-center items-center lg:ml-auto lg:mr-auto flex-nowrap absolute top-1/3"> */}
              <div className='flex flex-col items-center justify-center place-content-center align-middle h-20 mr-4'>
                 <div className="justify-center items-center align-middle">
                  {/* <Button variant='outline' className={styles.outlineBtn}>POS</Button> */}
                  <OutlineButton name='POS' color='text-main' onClick={handlePosButton} />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center place-content-center align-middle h-20 mx-4'>
                 <div className="justify-center items-center align-middle">
                  {/* <Button variant='outline' className={styles.outlineBtn}>POS</Button> */}
                  <IoExpandOutline size={'2em'} onClick={fullScreenButton} className='rotate-45 py-1.5'/>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center place-content-center align-middle h-20 mx-4'>
                 <div className="justify-center items-center align-middle">
                  {/* <Button variant='outline' className={styles.outlineBtn}>POS</Button> */}
                  <PiGlobe size={'2em'} className='py-1'/>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center place-content-center align-middle h-20 mx-4'>
                 <div className="justify-center items-center align-middle">
                  {/* <Button variant='outline' className={styles.outlineBtn}>POS</Button> */}
                  <AiOutlineBell size={'2em'} width={'3em'} className='py-1'/>
                </div>
              </div>
              <div className='flex flex-col items-center justify-normal px-4 align-middle'>
                <div className='absolute items-center justify-center top-1/3'>
                  <div id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button" onClick={handleProfileDropdownClick}>
                    <img src={defaultProfilePic} alt='No Avatar' className={styles.avatar} />
                  </div>
                  <div id="dropdownHover" className={cls("z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40", isProfileMenu ? 'block absolute -translate-x-28' : 'hidden')}>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                      <li>
                        <button href="#" class="block px-4 py-2 hover:bg-gray-100">
                          <div className='flex overflow-ellipsis whitespace-pre-wrap'>
                            <BsPersonGear width={20} height={20} />
                            <p className='leading-none mx-2 mb-1'>
                              William
                            </p>
                          </div>
                        </button>
                      </li>
                      <li>
                        <div onClick={navigate('/profile')} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black text-sm">Profile</div>
                      </li>
                      <li>
                        <div class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black text-sm">Settings</div>
                      </li>
                      <li>
                        <div class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black text-sm">Logout</div>
                      </li>
                    </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}