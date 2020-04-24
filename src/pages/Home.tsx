import React from 'react';
import AdvertList from '../components/AdvertList/AdvertList';
import Navbar from '../components/Navbar/Navbar';
import styled from './Home.module.scss';

const Home = () => (
  <>
    <Navbar />
    <div className={styled.wrapper}>
      <h1 className={styled.title}>Ogłoszenia</h1>
      <AdvertList />
    </div>
  </>
);

export default Home;
