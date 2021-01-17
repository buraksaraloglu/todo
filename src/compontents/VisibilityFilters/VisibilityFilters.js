/* eslint-disable no-shadow */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setFilter } from '../../redux/actions';
import VISIBILITY_FILTERS from '../../constants';

import './c-visibility-filters.scss';

const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <div className="c-visibility-filters">
    {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
      const currentFilter = VISIBILITY_FILTERS[filterKey];
      return (
        <span
          key={`visibility-filter-${currentFilter}`}
          className={cx('filter', currentFilter === activeFilter && 'filter__active')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setFilter(currentFilter);
            }
          }}
          onClick={() => {
            setFilter(currentFilter);
          }}
          role="button"
          tabIndex={0}
        >
          {currentFilter}
        </span>
      );
    })}
  </div>
);

VisibilityFilters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ activeFilter: state.visibilityFilter });

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
