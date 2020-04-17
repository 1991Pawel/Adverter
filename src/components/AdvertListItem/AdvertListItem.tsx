import React from 'react';
import styled from './AdvertListItem.module.scss';
import linkIcon from '../../assets/link.png';
import btnRemoveIcon from '../../assets/bin.svg';

interface AdvertListItemProps {
  advert: {
    title: string;
    image: string;
  };
}

const AdvertListItem: React.FC<AdvertListItemProps> = ({ advert }) => (
  <li className={styled.list}>
    <div className={styled.list__image}>
      <img src={advert.image} alt={advert.title} />
    </div>
    <a href="href" className={styled.list__link}>
      <img src={linkIcon} alt={advert.title} />
    </a>
    <div className={styled.list__header}>371 510,98zł</div>
    <div className={styled.list__body}>
      <span className={styled.list__title}>
        Rondo SOLIDARNOŚCI-3 pokoje+ balkon
      </span>
      <span className={styled.list__desc}>61,68m2</span>
      <button type="button" className={styled.list__btn}>
        <img src={btnRemoveIcon} alt="btn-remove-icon" />
      </button>
    </div>
  </li>
);

export default AdvertListItem;
