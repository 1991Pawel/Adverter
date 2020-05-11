import React from 'react';
import { connect } from 'react-redux';
import AdvertListItem from '../AdvertListItem/AdvertListItem';
import styled from './AdvertList.module.scss';
import { AppState } from '../../reducers/root.reducer';

type Props = ReturnType<typeof mapStateToProps>;

const AdvertList = ({ adverts }: Props) => {
  return (
    <ul className={styled.wrapper}>
      {adverts &&
        adverts.map((advert) => (
          <AdvertListItem key={advert.id} advert={advert} />
        ))}
    </ul>
  );
};

const mapStateToProps = (state: AppState) => ({
  adverts: state.adverts,
});

export default connect(mapStateToProps)(AdvertList);
