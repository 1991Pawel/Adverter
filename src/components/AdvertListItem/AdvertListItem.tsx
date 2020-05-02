import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from './AdvertListItem.module.scss';
import linkIcon from '../../assets/link.png';
import btnRemoveIcon from '../../assets/bin.svg';
import { RemoveAdvert } from '../../actions/advert.actions';
import Advert from '../../types/adverts';

const currencyConverter = (price: number): string => {
  const convertedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${convertedPrice} zł`;
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type AdvertProps = {
  advert: Advert;
};
type Props = DispatchProps & AdvertProps;

const AdvertListItem = ({ removeAdvert, advert }: Props) => {
  const removeHandler = (id: number) => {
    removeAdvert(id);
  };

  return (
    <li className={styled.list}>
      <div className={styled.list__image}>
        <img src={advert.image} alt={advert.title} />
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
        <span className={styled.list__title}>{advert.title}</span>
        <span className={styled.list__desc}>{`${advert.size}m2`}</span>
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
  removeAdvert: (id: number) => dispatch(RemoveAdvert(id)),
});

export default connect(null, mapDispatchToProps)(AdvertListItem);
