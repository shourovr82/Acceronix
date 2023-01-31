import React from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';

const MobileNavbar = () => {
  return (
    <div>
      <div className='z-10 w-full pt-10  lg:hidden'>
        <div className='z-10 absolute top-0 w-full'>
          <ReactNavbar
            color="rgb(25, 25, 25)"
            menu={[
              { name: "HOME", to: "/", },
              { name: "ARTICLES", to: "/articles", },
              { name: "ABOUT ME", to: "/about", },
              { name: "CONTACT", to: "/contact", },
            ]}
            logo="https://i.ibb.co/WB5909x/image-removebg-preview.png"

            social={[
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/nazeh-taha/",
                icon: ["fab", "linkedin-in"],
              },
              {
                name: "Facebook",
                url: "https://www.facebook.com/nazeh200/",
                icon: ["fab", "facebook-f"],
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/nazeh_taha/",
                icon: ["fab", "instagram"],
              },
              {
                name: "Twitter",
                url: "http://nazehtaha.herokuapp.com/",
                icon: ["fab", "twitter"],
              },
            ]}
          />
        </div>
      </div>

    </div>
  );
};

export default MobileNavbar;