import React from 'react';

const RegisterSide = () => {
  return (
    <div className='relative'>
      <div className='bg-b absolute -top-4 -right-20  origin-center rotate-3 w-full h-[110vh]'>
        <div className="relative flex justify-between  h-screen ...">
          <div className="absolute shadow-lg shadow-[#0201019a] bg-[#2e3796] w-full h-24 rounded-tl rounded-[3rem] p-3 origin-center -rotate-12  -left-14 -top-10 
               ">
          </div>
          <div className="absolute bg-[#151c6b] down-div w-full top-[25rem] rounded-[2rem]  p-3 origin-center -rotate-45  -bottom-20  -right-0 
               ">
          </div>
          <div className="absolute bg-[#151c68]  down-div  w-full top-[38rem] rounded-[2rem]  p-3 origin-center -rotate-45  -bottom-96  -right-10 
               ">
          </div>

        </div>
      </div>

    </div>
  );
};

export default RegisterSide;