/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
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
          onClick={() => {
            setFilter(currentFilter);
          }}
        >
          {currentFilter}
        </span>
      );
    })}
  </div>
);

const mapStateToProps = (state) => ({ activeFilter: state.visibilityFilter });

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
