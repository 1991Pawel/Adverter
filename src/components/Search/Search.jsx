import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from './Search.module.scss';
import searchImg from '../../assets/search.svg';
import { SearchText } from '../../actions/advert.actions';

// eslint-disable-next-line no-shadow
const Search = ({ SearchText }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    SearchText(search);
  }, [SearchText, search]);

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <form className={styled.search}>
      <input
        className={search ? styled.search__input__active : styled.search__input}
        type="text"
        placeholder="Is it me you’re looking for?"
        value={search}
        onChange={changeHandler}
      />
      <button className={styled.search__button} type="button">
        <span>
          <img src={searchImg} alt="search icon" />
        </span>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  SearchText: (text) => dispatch(SearchText(text)),
});

export default connect(null, mapDispatchToProps)(Search);
