import React from 'react';
import { connect } from 'react-redux';
import AdvertListItem from '../AdvertListItem/AdvertListItem';
import styled from './AdvertList.module.scss';
import { AppState } from '../../reducers/root.reducer';

type Props = ReturnType<typeof mapStateToProps>;

const AdvertList = ({ adverts }: Props) => {
  return (
    <div>
      <ul className={styled.wrapper}>
        {adverts?.map((advert) => (
          <AdvertListItem key={advert.id} advert={advert} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  adverts: state.adverts.filter((advert) =>
    advert.title.toLowerCase().includes(state.filter.searchText.toLowerCase())
  ),
});

export default connect(mapStateToProps)(AdvertList);
