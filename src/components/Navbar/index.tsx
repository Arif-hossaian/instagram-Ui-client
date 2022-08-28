/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import OutlineAdd from '../../icons/OutlineAdd';
import OutlineExplore from '../../icons/OutlineExplore';
import ActivityFeed from './ActivityFeed';
import ProfilePopover from './ProfilePopover';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div>
      <div className="z-10 sticky top-0 border-b h-14 bg-white">
        <div className="max-w-screen-lg flex items-center justify-between h-full mx-auto px-5">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Logo"
            className="cursor-pointer"
            onClick={() => navigate('/')}
          />

          <div className="flex items-center space-x-5 text-gray-600">
            <div className="cursor-pointer" onClick={() => navigate('/')}>
              {/* {history.location.pathname === '/' ? <FillHome /> : <OutlineHome />} */}
            </div>
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <OutlineAdd />
            </div>
            <OutlineExplore />
            <div className="hidden md:block">
              <ActivityFeed />
            </div>
            <IoSearchOutline
              size={25}
              className="cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            />
            <ProfilePopover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
