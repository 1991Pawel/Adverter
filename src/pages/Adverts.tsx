import React from 'react';
import AdvertList from '../components/AdvertList/AdvertList';
import styled from './Adverts.module.scss';
import AbsoluteWrapper from '../components/AbsoluteWrapper/AbsoluteWrapper';

const Adverts = () => (
  <>
    <AbsoluteWrapper>
      <div className={styled.wrapper}>
        <h1 className={styled.title}>Ogłoszenia</h1>
        <AdvertList />
      </div>
    </AbsoluteWrapper>
  </>
);

export default Adverts;
