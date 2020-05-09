import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from './AddForm.module.scss';
import Navbar from '../components/Navbar/Navbar';
import { addAdvert } from '../actions/advert.actions';
import Advert from '../types/adverts';

const validate = (form: Advert): string | null => {
  if (!form.title.length) {
    return 'Wprowadź tytuł';
  }
  if (form.link.length < 8) {
    return 'Wprowadź poprawny link ogłoszenia';
  }
  if (!form.price) {
    return 'Wprowadź cene ';
  }
  return null;
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

// eslint-disable-next-line no-shadow
const AddForm = ({ addAdvert }: DispatchProps) => {
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();
  const initalState = {
    title: '',
    link: '',
    image: '',
    price: 0,
    size: 0,
  };
  const [form, setForm] = useState(initalState);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formConfirm = () => {
    setSuccess('Ogłoszenie Dodane');
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.random();
    const newAdvert = { ...form, id };
    const errorMsg = validate(newAdvert);
    if (errorMsg) {
      setError(errorMsg);
    } else {
      setError(null);
      addAdvert(newAdvert);
      formConfirm();
      setForm(initalState);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styled.wrapper}>
        <form onSubmit={handleSubmit} className={styled.form}>
          {error && <p className={styled.form__error}>{error}</p>}
          {success && <p className={styled.form__success}>{success}</p>}
          <label className={styled.form__label} htmlFor="title">
            Tytuł:
          </label>
          <input
            className={styled.form__input}
            type="text"
            id="title"
            name="title"
            onChange={updateField}
            value={form.title}
          />

          <label className={styled.form__label} htmlFor="link">
            Link Ogłoszenia:
          </label>
          <input
            className={styled.form__input}
            type="text"
            id="link"
            name="link"
            onChange={updateField}
            value={form.link}
          />

          <label className={styled.form__label} htmlFor="image">
            Link Zdjęcia:
          </label>
          <input
            className={styled.form__input}
            type="text"
            id="image"
            name="image"
            onChange={updateField}
            value={form.image}
          />

          <label className={styled.form__label} htmlFor="price">
            Cena:
          </label>
          <input
            className={styled.form__input}
            type="number"
            id="price"
            name="price"
            onChange={updateField}
            value={form.price ? form.price : ''}
          />

          <label className={styled.form__label} htmlFor="size">
            Wielkość:
          </label>
          <input
            className={styled.form__input}
            type="number"
            id="size"
            name="size"
            onChange={updateField}
            value={form.size ? form.size : ''}
          />
          <button className={styled.form__btn} type="submit">
            gotowe
          </button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addAdvert: (advert: Advert) => dispatch(addAdvert(advert)),
});

export default connect(null, mapDispatchToProps)(AddForm);
