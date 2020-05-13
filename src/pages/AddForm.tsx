import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { v1 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import styled from './AddForm.module.scss';
import { addAdvert } from '../actions/advert.actions';
import Advert from '../types/adverts';
import AbsoluteWrapper from '../components/AbsoluteWrapper/AbsoluteWrapper';

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

// eslint-disable-next-line no-shadow
const AddForm = ({ addAdvert }: DispatchProps) => {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();
  const initalState = {
    title: '',
    link: '',
    image: '',
    price: '',
    size: '',
  };

  const [form, setForm] = useState(initalState);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formConfirm = () => {
    setSuccess(t('AdvertAdd.1'));
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  const validate = (forms: Advert): string => {
    const { title, link, price } = forms;
    const linkWithHttp = link.includes('http');

    if (!title.length) {
      return `${t('ErrorTitle.1')}`;
    }
    if (title.length > 60) {
      return `${t('ErrorTitleTwo.1')}`;
    }
    if (!link.length) {
      return `${t('ErrorLink.1')}`;
    }
    if (!linkWithHttp) {
      return `${t('ErrorLinkTwo.1')}`;
    }
    if (!price) {
      return `${t('ErrorPrice.1')}`;
    }

    return '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = uuidv4();
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
      <AbsoluteWrapper>
        <div className={styled.wrapper}>
          <form onSubmit={handleSubmit} className={styled.form}>
            {error && <p className={styled.form__error}>{error}</p>}
            {success && <p className={styled.form__success}>{success}</p>}
            <label className={styled.form__label} htmlFor="title">
              {t('Title.1')}
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
              {t('AdvertLink.1')}
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
              {t('ImageLink.1')}
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
              {t('Price.1')}
            </label>
            <input
              className={styled.form__input}
              type="text"
              id="price"
              name="price"
              onChange={updateField}
              value={form.price}
              maxLength={12}
            />

            <label className={styled.form__label} htmlFor="size">
              {t('Size.1')}
            </label>
            <input
              className={styled.form__input}
              type="text"
              id="size"
              name="size"
              onChange={updateField}
              value={form.size}
              maxLength={5}
            />
            <button className={styled.form__btn} type="submit">
              {t('Submit.1')}
            </button>
          </form>
        </div>
      </AbsoluteWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addAdvert: (advert: Advert) => dispatch(addAdvert(advert)),
});

export default connect(null, mapDispatchToProps)(AddForm);
