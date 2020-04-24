import React from 'react';
import AdvertListItem from '../AdvertListItem/AdvertListItem';
import styled from './AdvertList.module.scss';

const adverts = [
  {
    id: 0,
    title: 'lorem',
    price: 300000,
    size: 60,
    link:
      'https://www.otodom.pl/oferta/apartament-w-luksusowej-inwestycji-wola-justowska-ID45rDC.html',
    image:
      'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Im81aGo4YTl2engzbC1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.8cyJDbYZ5mfbnXrp1ktBZMCLjdJj7_vqrlw-JzOecHM/image;s=1280x1024;q=80',
  },
  {
    id: 1,
    title: 'lorem',
    price: 540000,
    size: 60,
    link:
      'https://www.otodom.pl/oferta/apartament-w-luksusowej-inwestycji-wola-justowska-ID45rDC.html',
    image:
      'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Im81aGo4YTl2engzbC1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.8cyJDbYZ5mfbnXrp1ktBZMCLjdJj7_vqrlw-JzOecHM/image;s=1280x1024;q=80',
  },
  {
    id: 2,
    title: 'lorem',
    price: 3000,
    size: 60,
    link:
      'https://www.otodom.pl/oferta/apartament-w-luksusowej-inwestycji-wola-justowska-ID45rDC.html',
    image:
      'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Im81aGo4YTl2engzbC1BUEwiLCJ3IjpbeyJmbiI6ImoxajNvMTNtNmJnbjEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.8cyJDbYZ5mfbnXrp1ktBZMCLjdJj7_vqrlw-JzOecHM/image;s=1280x1024;q=80',
  },
  {
    id: 3,
    title: 'advert2',
    price: 232210,
    size: 60,
    link:
      'https://www.otodom.pl/oferta/apartament-w-luksusowej-inwestycji-wola-justowska-ID45rDC.html',
    image:
      'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImRxbHpibmpzNWF2azItQVBMIiwidyI6W3siZm4iOiJqMWozbzEzbTZiZ24xLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.WSoCKNma-ZCh6vgknQwJXnGp8ug6ch2_OjeQiM0tLN4/image;s=1280x1024;q=80',
  },
];

const AdvertList: React.FC = () => {
  return (
    <ul className={styled.wrapper}>
      {adverts.map((advert) => (
        <AdvertListItem key={advert.id} advert={advert} />
      ))}
    </ul>
  );
};

export default AdvertList;
