/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './c-delete-button.scss';

const DeleteButton = ({ onDelete }) => (
  <div className="c-delete-button" onClick={onDelete}>
    Delete Button
  </div>
);

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
