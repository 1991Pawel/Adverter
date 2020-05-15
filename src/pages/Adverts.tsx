import React from 'react';
import AdvertList from '../components/AdvertList/AdvertList';
import styled from './Adverts.module.scss';
import AbsoluteWrapper from '../components/AbsoluteWrapper/AbsoluteWrapper';
import Search from '../components/Search/Search';

const Adverts = () => (
  <>
    <AbsoluteWrapper>
      <div className={styled.wrapper}>
        <h1 className={styled.title}>Ogłoszenia</h1>
        <Search />
        <AdvertList />
      </div>
    </AbsoluteWrapper>
  </>
);

export default Adverts;
