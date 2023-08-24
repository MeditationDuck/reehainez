import React, { useState, useEffect } from 'react';


// icons from https://icon-icons.com/icon/whatsapp-pixel-logo/181923 cc license

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [buttonStatus, setButtonStatus] = useState({ 
    start: false, 
    search: false, 
    instagram: false,
  });

  const bar_contents = [
    {name: 'Start', icon: 'windows.ico', link: null},
    // {name: 'Search', icon: null},
    {name: 'Instagram', icon: 'instagram.ico', link: 'https://www.instagram.com/meditationduck/'},
    {name: 'Youtube', icon: 'youtube.ico', link: 'https://www.youtube.com/channel/UCZ3e0b37MykMtMUQQ-7Y4dA'},
    {name: 'Twitter', icon: 'twitter.ico', link: 'https://twitter.com/meditationduck'},
    {name: 'Facebook', icon: 'facebook.ico', link: 'https://www.facebook.com/naoki.yoshida.796774/'},
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 
  return(
    <div className='bg-element w-full flex justify-between items-center fixed bottom-0 py-1 px-2 z-1 text-black'>
      {bar_contents.map((content, index) => {
        console.log(process.env.PUBLIC_URL + content.icon)
        return(
        <div key={index}
        className={`flex p-1 cursor-pointer flex-shrink-0 mx-1 ${buttonStatus[content.name.toLowerCase()] ? 'custom-border-pushed' : 'custom-border'}`}
        onMouseDown={() => setButtonStatus(prev => ({...prev, [content.name.toLowerCase()]: true}))}
        onMouseUp={() => {
          setButtonStatus(prev => ({...prev, [content.name.toLowerCase()]: false}));
          if(content.link !== null) {
            window.location.href = content.link;
          }
          }}
        >
        { content.icon &&
          <img 
          src={process.env.PUBLIC_URL + '/'+ content.icon}
          alt="window icon" 
          className="h-6 w-6 mx-0.5 "
          />
        }
          <div className="ml-1 text-lg font-w95 hidden sm:block">{content.name}</div>
        </div>
      )
      })}
      
      <div className="w-full" />

      <div 
      className='custom-border-pushed py-1 px-2'
      style={{ whiteSpace: 'nowrap'}}
      > <p>{time}</p>
      </div>
    </div>
  )
}

export default Navbar;
