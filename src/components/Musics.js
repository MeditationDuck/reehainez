import React from 'react';

function Musics() {
  return (
    <div>
      Musics
      <div className='p-5'>
        <iframe 
          className='rounded-3xl'
          title="music" 
          width="300" 
          height="300"
          // background="transparent"
          // allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/957562288&color=%23008282&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </div>
    </div>
  );
}

export default Musics;
