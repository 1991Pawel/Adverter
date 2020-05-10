import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from './Home.module.scss';

const Home = () => (
  <>
    <Navbar />
    <div className={styled.wrapper}>
      <h1 className={styled.title}>Jak to działa?</h1>
      <div className={styled.container}>
        <div className={styled.steps}>
          <div className={styled.steps__step}>
            <span className={styled.steps__number}>1</span>
            <h3 className={styled.steps__title}>Znajdź Ogłoszenie</h3>
          </div>
          <div className={styled.steps__step}>
            <span className={styled.steps__number}>2</span>
            <h3 className={styled.steps__title}>Wypełnij Pola Formularza</h3>
          </div>
          <div className={styled.steps__step}>
            <span className={styled.steps__number}>3</span>
            <h3 className={styled.steps__title}>Gotowe!</h3>
          </div>
          <p className={styled.steps__desc}>
            Aplikacja ma na celu śledzenie ogłoszeń oraz zmian ich cen bez
            konieczności dodawania ich do zakładek.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Home;
