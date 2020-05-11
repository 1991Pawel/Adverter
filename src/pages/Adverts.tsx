import React from 'react';
import AdvertList from '../components/AdvertList/AdvertList';
import Navbar from '../components/Navbar/Navbar';
import styled from './Adverts.module.scss';

const Adverts = () => (
  <>
    <Navbar />
    <div className={styled.wrapper}>
      <h1 className={styled.title}>Ogłoszenia</h1>
      <AdvertList />
    </div>
  </>
);

export default Adverts;
