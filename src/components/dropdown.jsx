import { FormLabel } from "@chakra-ui/react";
import cls from 'classnames';
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import styles from '../App.module.css';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Owner');
  // const [isStyleDropdown, setIsStyleDropdown] = useState(selectedDropdown);

  var roleList = ['Owner', 'Sales', 'Purchases'];

  var selectedDropdown = "flex min-w-full justify-between px-4 py-1 bg-red cursor-pointer border";
  var optionDropdown = "flex min-w-full justify-between px-4 py-1 bg-red cursor-pointer border";

  const onTouchDropdown = (value) => {
    setSelectedRole(value);
  }

  const onClickDropdown = (value) => {
    setIsOpen((prev) => !prev)

    setSelectedRole(value);
  }

  const openDropdown = (value) => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="min-w-full">
        <FormLabel className="text-left leading-3 text-sm">Role</FormLabel>
        <div className={cls(styles.formInput, "flex flex-row min-w-full align-middle px-3")}>
        <button id="multiLevelDropdownButton" className="flex justify-between items-center content-end h-8 min-w-full" data-dropdown-toggle="dropdown" onClick={openDropdown} type="button">
          <p className="">{ selectedRole }</p>
        {!isOpen ? (
          <AiOutlineCaretDown className="flex ml-7" />
        ) : (
          <AiOutlineCaretUp className="flex ml-7" />
          )
        }
        </button>
      </div>
      {isOpen && (
        <ul className="bg-white-400 relative flex flex-col items-start min-w-full">
          {/* <div className="flex w-full flex-nowrap justify-between items-stretch hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent"> */}
          {roleList.map((role, index) => (
            <li className={selectedRole === role ? selectedDropdown : optionDropdown} key={index} onClick={() => onClickDropdown(role)}>
                {role}
            </li>
          ))}
        </ul>
      )}

{/*       
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg></button>
              <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
                  </li>
                </ul>
            </div>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}