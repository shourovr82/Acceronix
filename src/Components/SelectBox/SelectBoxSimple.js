import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BsCheckLg, BsChevronExpand } from 'react-icons/bs';
import { FaSortDown } from 'react-icons/fa';



const SelectBoxSimple = ({ people }) => {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative  ">
        <Listbox.Button className="flex items-center justify-between gap-2 relative
          cursor-pointer  text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="mb-1">
            <FaSortDown
              className="text-sm text-gray-400"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute  mt-1  w-full overflow-hidden  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-10 sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative  select-none py-2 flex   justify-center cursor-pointer w-full text-center  ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900 font-bold  '
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <div className={`flex justify-between`}>
                    <span
                      className={`block truncate ${selected ? 'font-semibold  ' : 'font-semibold  '
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