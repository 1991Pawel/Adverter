import React from 'react';
import styled from './AbsoluteWrapper.module.scss';

const AbsoluteWrapper = ({ children }) => {
  return <div className={styled.wrapper}>{children}</div>;
};

export default AbsoluteWrapper;
