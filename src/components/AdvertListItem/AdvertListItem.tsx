import React from 'react';
import styled from './AdvertListItem.module.scss';
import linkIcon from '../../assets/link.png';
import btnRemoveIcon from '../../assets/bin.svg';

type Props = {
  advert: {
    title: string;
    image: string;
    id: number;
    price: number;
    size: number;
    link: string;
  };
};

const currencyConverter = (price: number): string => {
  const convertedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${convertedPrice} zł`;
};

const AdvertListItem = ({ advert }: Props) => (
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
    <div className={styled.list__header}>{currencyConverter(advert.price)}</div>
    <div className={styled.list__body}>
      <span className={styled.list__title}>
        Rondo SOLIDARNOŚCI-3 pokoje+ balkon
      </span>
      <span className={styled.list__desc}>{`${advert.size}m2`}</span>
      <button type="button" className={styled.list__btn}>
        <img src={btnRemoveIcon} alt="btn-remove-icon" />
      </button>
    </div>
  </li>
);

export default AdvertListItem;
