import React from 'react';
import styled from './spinner.module.scss';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';

const Spinner = () => (
  <AbsoluteWrapper>
    <div className={styled.loader} />;
  </AbsoluteWrapper>
);

export default Spinner;
