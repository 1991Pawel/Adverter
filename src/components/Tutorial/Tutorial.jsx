/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import video from '../../assets/tutorial.mp4';
import styled from './Tutorial.module.scss';
import videoPoster from '../../assets/videoplaceholder.jpg';

const Tutorial = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className={styled.wrapper}>
      <button onClick={handleClick} type="button" className={styled.button}>
        Tutorial
      </button>
      {open && (
        <video poster={videoPoster} autoPlay loop>
          >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Tutorial;
