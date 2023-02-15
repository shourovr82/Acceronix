import React from 'react';
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './BestProducts.css';
import newArrivals1 from '../../../Assets/Home/BestProducts/NewArrivals/newArrivals1.gif'
import newArrivals2 from '../../../Assets/Home/BestProducts/NewArrivals/newArrivals2.gif'
const BestProducts = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className='grid mt-5 grid-cols-3'>
      <div className='  rounded-md '>
        <h1 className='text-2xl font-semibold text-center'>Top Brands</h1>
        <Tabs className='p-2 h-full  '>
          <TabList className='flex justify-around items-center border-b bg-white  '>
            <Tab className='hover:border-b-2 py-2  border-red-600  outline-none px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Electronics</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Everyday needs</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Fashion</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Home</Tab>
          </TabList>

          <TabPanel>
            <p>
              <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
              game franchise, owned by Nintendo and created by Japanese video game designer
              Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
              of the series, Mario has appeared in over 200 video games since his creation.
              Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
              Kingdom, his adventures generally center upon rescuing Princess Peach from the
              Koopa villain Bowser. His younger brother and sidekick is Luigi.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>

          <TabPanel >
            <div className='bg-white  p-2 mt-1'>
              <p>
                <b>Everybody Needs</b>
                is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                attack by Bowser. She often plays the damsel in distress role within the series and
                is the lead female. She is often portrayed as Mario's love interest and has appeared
                in Super Princess Peach, where she is the main playable character.
              </p>
              <p>
                Source:{' '}
                <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                  Wikipedia
                </a>
              </p>
            </div>

          </TabPanel>
          <TabPanel>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
              romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
              video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
              Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
              in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
              and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
              Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
              game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
              characterized by their variety of colors.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
              appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
              he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
              attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
              who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
              takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
              Super Mario 3D World, and Captain Toad: Treasure Tracker.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
        </Tabs>

      </div >
      <div>
        <h1 className='text-2xl font-semibold text-center'>Best of ACCERONIX</h1>
        <Tabs className='p-2 '>
          <TabList className='flex justify-around items-center border-b bg-white  '>
            <Tab className='hover:border-b-2 py-2  border-red-600  outline-none px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Beauty</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Home Lover</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Electronics</Tab>
            <Tab className='hover:border-b-2 py-2 border-red-600 outline-none  px-2  duration-100 ease-linear cursor-pointer text-[#999999]'>Home</Tab>
          </TabList>

          <TabPanel>
            <div className='bg-white border p-2 mt-1'>
              <p >
                <b>Beauty</b> is a fictional character in the Mario video
                game franchise, owned by Nintendo and created by Japanese video game designer
                Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
                of the series, Mario has appeared in over 200 video games since his creation.
                Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
                Kingdom, his adventures generally center upon rescuing Princess Peach from the
                Koopa villain Bowser. His younger brother and sidekick is Luigi.
              </p>
              <p >
                Source:{' '}
                <a className='text-blue-600' href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                  Wikipedia
                </a>
              </p>
            </div>


          </TabPanel>

          <TabPanel>
            <p>
              <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
              is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
              Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
              attack by Bowser. She often plays the damsel in distress role within the series and
              is the lead female. She is often portrayed as Mario's love interest and has appeared
              in Super Princess Peach, where she is the main playable character.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
              romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
              video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
              Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
              in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
              and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
              Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
              game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
              characterized by their variety of colors.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
              appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
              he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
              attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
              who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
              takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
              Super Mario 3D World, and Captain Toad: Treasure Tracker.
            </p>
            <p>
              Source:{' '}
              <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
                Wikipedia
              </a>
            </p>
          </TabPanel>
        </Tabs>

      </div>
      <div >
        <h1 className='text-2xl font-semibold text-center'>New Arrivals</h1>
        <div className='flex flex-col gap-3 mt-2'>
          <img src={newArrivals1} alt="" />
          <img src={newArrivals2} alt="" />
        </div>
      </div>
    </section >
  );
};

export default BestProducts;