import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { GrPlayFill, GrPauseFill, GrStopFill } from "react-icons/gr";

const Sound = `${process.env.PUBLIC_URL}/musics/uk_drill_for_dev.mp3`;

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Player = forwardRef((props, ref) => {
  const [play, { sound, stop, pause, duration }] = useSound(Sound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [analyser, setAnalyser] = useState(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isPlaying && sound) {
      const interval = setInterval(() => {
        setCurrentTime(sound.seek());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, sound]);

  useEffect(() => {
    if (sound) {
      const audioContext = sound._sounds[0]._node.context;
      const source = sound._sounds[0]._node;
      const analyserNode = audioContext.createAnalyser();

      source.connect(analyserNode);
      setAnalyser(analyserNode);
    }
  }, [sound]);

  useEffect(() => {
    if (analyser && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const data = new Uint8Array(analyser.frequencyBinCount);

      const draw = () => {
        analyser.getByteFrequencyData(data);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / data.length) * 2.5;
        let posX = 0;

        for (let i = 0; i < data.length; i++) {
          const barHeight = data[i];
          ctx.fillRect(posX, canvas.height - barHeight, barWidth, barHeight);
          posX += barWidth + 1;
        }

        animationRef.current = requestAnimationFrame(draw);
      };

      draw();

      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [analyser]);

  useImperativeHandle(ref, () => ({
    stopMusic: () => {
      setIsPlaying(false);
      stop();
    }
  }));

  const progressBarPercentage = duration ? (currentTime / (duration / 1000)) * 100 : 0;

  return (
    <>  
      Player


      <canvas ref={canvasRef} width="300" height="400"></canvas>

      <div className="bg-gray-300 h-2 rounded-lg mt-4">
        <div style={{ width: `${progressBarPercentage}%` }} className="bg-blue-500 h-2 rounded-lg"></div>
      </div>
      <div className="mt-2">
        {formatTime(currentTime)} / {formatTime(duration / 1000)}
      </div>
      <div className="flex flex-row">
        <div className="flex p-1 pr-2 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={() => {
          if (!isPlaying) {
            play({
              onend: () => {
                setIsPlaying(false);
              }
            });
            setIsPlaying(true);
          } else {
            pause();
            setIsPlaying(false);
          }
        }}>
          <div className="ml-1 text-lg font-w95 hidden sm:block">{isPlaying ? <GrPauseFill/> : <GrPlayFill />}</div>
        </div>
        <div className="flex p-1 pr-2 cursor-pointer flex-shrink-0 mx-1 custom-border" onClick={() => {
          setIsPlaying(false);
          stop();
        }}>
          <div className="ml-1 text-lg font-w95 hidden sm:block"><GrStopFill/></div>
        </div>
      </div>
      
    </>
  );
});

export default Player;
