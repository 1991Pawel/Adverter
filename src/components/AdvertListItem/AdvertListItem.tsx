import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Highlight from 'react-highlighter';
import styled from './AdvertListItem.module.scss';
import linkIcon from '../../assets/link.png';
import btnRemoveIcon from '../../assets/bin.svg';
import { RemoveAdvert } from '../../actions/advert.actions';
import Advert from '../../types/adverts';
import { Id } from '../../types/id';
import { AppState } from '../../reducers/root.reducer';

const currencyConverter = (price: number | string): string => {
  const convertedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${convertedPrice} zł`;
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type AdvertProps = {
  advert: Advert;
  filter: String;
};
type Props = DispatchProps & AdvertProps;

const AdvertListItem = ({ filter, advert, removeAdvert }: Props) => {
  const removeHandler = (id: Id) => {
    removeAdvert(id);
  };

  return (
    <li className={styled.list}>
      <div className={styled.list__image}>
        <img src={advert.image} alt="" />
      </div>
      <a
        href={advert.link}
        className={styled.list__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkIcon} alt={advert.title} />
      </a>
      <div className={styled.list__header}>
        {currencyConverter(advert.price)}
      </div>
      <div className={styled.list__body}>
        <span className={styled.list__title}>
          <Highlight matchClass={styled.search} search={filter}>
            {advert.title}
          </Highlight>
        </span>
        {advert.size && (
          <span className={styled.list__desc}>{`${advert.size} m2`}</span>
        )}
        <button
          onClick={() => removeHandler(advert.id)}
          type="button"
          className={styled.list__btn}
        >
          <img src={btnRemoveIcon} alt="btn-remove-icon" />
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeAdvert: (id: Id) => dispatch(RemoveAdvert(id)),
});

const mapStateToProps = (state: AppState) => ({
  filter: state.filter.searchText,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdvertListItem);
