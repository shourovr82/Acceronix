import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BsCheckLg, BsChevronExpand } from 'react-icons/bs';
import { FaSortDown } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';



const SelectBoxSimple = ({ selectboxdata }) => {
  const [selected, setSelected] = useState(selectboxdata[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative  ">
        <Listbox.Button className="inline-flex border w-full  rounded-md py-2    px-2
           text-[11px] uppercase   hover:bg-violet-600  gap-2 ">
          <span className="inline-flex  w-full justify-center rounded-md  
           text-[11px] uppercase text-black   gap-2 ">{selected.name}</span>
          <span className="">
            <FiChevronDown
              className="text-sm  text-violet-800 hover:text-violet-800"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full  mt-1   overflow-hidden  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-12 sm:text-sm">
            {selectboxdata.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative  select-none py-2 flex text-[11px]    justify-center cursor-pointer w-full text-center  ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900 font-bold  '
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <div className={`flex justify-between`}>
                    <span
                      className={`block truncate ${selected ? 'font-bold text-[#3920a7]  ' : 'font-semibold  '
                        }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className=" inset-y-0 left-0 flex  items-center pl-3 text-[#3920a7] ">
                        <BsCheckLg className="text-xs   font-bold" />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectBoxSimple;