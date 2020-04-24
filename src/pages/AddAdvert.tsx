import React from 'react';
import styled from './AddAdvert.module.scss';
import Navbar from '../components/Navbar/Navbar';

const AddAdvert = () => (
  <>
    <Navbar />
    <div className={styled.wrapper}>
      <form className={styled.form}>
        <label className={styled.form__label} htmlFor="title">
          Tytuł:
        </label>
        <input className={styled.form__input} type="text" id="title" />

        <label className={styled.form__label} htmlFor="link">
          Link Ogłoszenia:
        </label>
        <input className={styled.form__input} type="text" id="link" />

        <label className={styled.form__label} htmlFor="linkImg">
          Link Zdjęcia:
        </label>
        <input className={styled.form__input} type="text" id="linkImg" />

        <label className={styled.form__label} htmlFor="price">
          Cena:
        </label>
        <input className={styled.form__input} type="number" id="price" />

        <label className={styled.form__label} htmlFor="size">
          Wielkość:
        </label>
        <input className={styled.form__input} type="number" id="size" />
        <button className={styled.form__btn} type="submit">
          gotowe
        </button>
      </form>
    </div>
  </>
);

export default AddAdvert;
