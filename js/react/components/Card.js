import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

const Card = ({ title, description, onClick }) => {
  const match = useRouteMatch();

  if (!title) {
    return null;
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    onClick?.();
  };

  return (
    <a className="uk-width-1-3 card" href={`${match.url}/${title}`} onClick={onClickHandler}>
      <div className="uk-card uk-card-default uk-card-title">{title}</div>
      <div className="uk-card uk-card-default uk-card-body">{description}</div>
    </a>
  );
};

Card.defaultProps = {
  description: '',
  onClick: () => undefined,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Card);
