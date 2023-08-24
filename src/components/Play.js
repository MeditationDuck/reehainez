import React, { useState } from 'react';
// import { motion } from "framer-motion";
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';
import  Player from './Player';

function Play() {
  const elements = [
    { name: 'Profile', icon: 'folder.ico', link: "about"},
    { name: 'Player', icon: 'music.ico', link: null },
    { name: 'Schedules', icon: 'globe.ico', link: "schedules" },
    { name: 'Shop', icon: 'folder-open.ico', link: "http://amazon.com"},
    { name: 'Musics', icon: 'my_computer.ico', link: "musics" }
  ];

  const [showWindow, setShowWindow] = useState(false);
  const [position, setPosition] = useState({x: 40, y: 40});

  const playerRef = React.useRef(null); // for player stop when it is close window.

  const navigate = useNavigate();
  
  const onStop = (data, element) => {
    if ( Math.abs(data.x - position.x) <= 2  && Math.abs(data.y - position.y) <= 2) {
      if( element.name === "Player"){
        setShowWindow(true);

      }else if(element.link && element.link.startsWith('http')) {
        window.open(element.link, '_blank');
      }else{
        navigate(element.link);
        console.log("pushed");
      }
    } else {
      setPosition({ x: data.x, y: data.y });
    }
  };

  const bar_contents = [
    { name: 'File'},
    { name: 'Edit'},
    { name: 'View'},
    { name: 'Favorites'},
    { name: 'Help'},
  ]

  return (
    <div className=''>
      {elements.map((element, index) => {
        return(
        <Draggable
          defaultPosition={{x: 40, y: 40}}
          onStop={(_, data) => onStop(data, element)}
          key={index}
          grid={[2, 2]}
        >
          <div 
            style={{ width: "100px", height: "100px" }} 
            className="handle flex item-center justify-center border border-dashed border-black cursor-pointer"
          >
            <div className="box text-center p-2">
              {/* <a href={element.link}> */}
              <div style={{ 
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${element.icon})`,
                  backgroundSize: 'cover',
                  height: '50px',
                  width: '50px'
              }}></div>
              {/* </a> */}
              <p>{element.name}</p>
            </div>
          </div>
        </Draggable>
        )
      })}

        {showWindow && 
        <div>
          <Draggable handle="strong" 
          defaultPosition={{x: 150, y: -450}}
         
          >
            <div className="bg-element custom-border" style={{ width: "400px", height: "600px" }} >
              <div className="box p-0.5">
                <strong className="cursor flex justify-between bg-[#000082]  px-0.5">
                  <div className=' text-white cursor-pointer '>Player</div>
                  <div 
                  className='bg-element px-1 my-1  custom-border cursor-pointer'
                  onClick={() => {
                    if(playerRef.current){
                      playerRef.current.stopMusic();
                    }
                    setShowWindow(false)
                  }}
                  >
                    <div
                    className='-my-1 pb-0.2 pt-0.5'
                    >X</div>
                  </div>
                </strong>
                
                <div className='flex flex-row'>
                  {
                    bar_contents.map((bar_content, index) => {
                      return(
                        <div className=' pr-2' key={index}>{bar_content.name}</div>
                      )
                    })
                  }
                </div>
                <div className="h-0.5 bg-white -mt-0.5"></div>
                <Player ref={playerRef}/>
              </div>
            </div>
          </Draggable>
        </div>
        }
    </div>
  );
}

export default Play;
