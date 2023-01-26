import React from 'react';

const RegisterMain = () => {



  <div>
    <h1>Register Now</h1>
    <p>Secure Your Communication with Acceronix</p>
  </div>



  return (
    <div className='w-full'>


      {/* Form for Registration */}

      <div className='w-full p-4 rounded-lg'>
        <div class="form">
          <div class="text-3xl font-bold uppercase">Register Now</div>
          <div class="subtitle"> <p className='text-[#475161] text-xs '>Secure Your Communication with Acceronix</p></div>
          <div className='flex items-center gap-4'>
            <div class="input-container ic1">
              <input id="firstname" class="forminput  focus:ring-2 ring-[#1f2aa1] ring-offset-0 " type="text" placeholder=" " />
              <div class="cut bg-base-100"></div>
              <label for="firstname" class="placeholder flex items-center gap-3">First name  </label>
            </div>
            <div class="input-container ic1">
              <input id="lastname" class="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" " />
              <div class="cut"></div>
              <label for="lastname" class="placeholder">Last name</label>
            </div>
          </div>

          <div class="input-container ic2">
            <input id="email" class="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Email</label>
          </div>
          <div class="input-container ic2">
            <input id="email" class="forminput  focus:ring-2 ring-[#1f2aa1] " type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Password</label>
          </div>



          <div class="input-container  ic2 bg-[#0306071c] rounded-xl">
            <input type="file" className="file-input file-input-info w-full" />
          </div>



        </div>
        <button type="text" class="submit">submit</button>
      </div>

    </div >
  );
};

export default RegisterMain;