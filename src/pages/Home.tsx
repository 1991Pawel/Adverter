import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar';
import styled from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className={styled.wrapper}>
        <h1 className={styled.title}>{t('How.1')}</h1>
        <div className={styled.container}>
          <div className={styled.steps}>
            <div className={styled.steps__step}>
              <span className={styled.steps__number}>1</span>
              <h3 className={styled.steps__title}>{t('Step1.1')}</h3>
            </div>
            <div className={styled.steps__step}>
              <span className={styled.steps__number}>2</span>
              <h3 className={styled.steps__title}>{t('Step2.1')}</h3>
            </div>
            <div className={styled.steps__step}>
              <span className={styled.steps__number}>3</span>
              <h3 className={styled.steps__title}>{t('Step3.1')}</h3>
            </div>
            <p className={styled.steps__desc}>{t('StepDesc.1')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
