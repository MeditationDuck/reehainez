// import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Navbar, About, LiveSchedule, Musics} from './components';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-desktop w-screen min-h-screen'>

        <Routes>
          <Route path="reehainez/" element={<> <Navbar /> <Home /> </>} />
          <Route path="reehainez/about" element={<><About /> <Navbar /> </>} />
          <Route path="reehainez/schedules" element={<><LiveSchedule /> <Navbar /></>} />
          <Route path="reehainez/musics" element={<><Musics /> <Navbar /></>} />
          
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
