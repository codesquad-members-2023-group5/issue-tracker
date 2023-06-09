import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const FilterStateContext = createContext(null);
const FilterDispatchContext = createContext(null);

const useFilterStateContext = () => {
  const filterState = useContext(FilterStateContext);

  if (filterState === null) {
    throw new Error('useFilterStateContextContext should be used within FilterStateProvider');
  }

  return filterState;
};

const useFilterDispatchContext = () => {
  const filterDispatch = useContext(FilterDispatchContext);

  if (filterDispatch === null) {
    throw new Error('useFilterDispatchContext should be used within FilterDispatchProvider');
  }

  return filterDispatch;
};

const initState = {
  issue: null,
  milestone: null,
  label: null,
  assignee: null,
  writer: null,
};

const FILTER_ACTION_TYPES = {
  CHANGE_MENU: 'CHANGE_MENU',
  RESET_FILTER: 'RESET_FILTER',
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.CHANGE_MENU: {
      const { filterType, id } = action.payload;

      const value = state[filterType] !== id || state[filterType] === null ? id : null;

      if (filterType === 'issue') {
        return { ...state, issue: value };
      }

      return { ...state, [filterType]: value };
    }

    case FILTER_ACTION_TYPES.RESET_FILTER: {
      return { ...initState };
    }

    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initState);
  const isFilterChanged = JSON.stringify(filterState) !== JSON.stringify(initState);

  console.log(filterState);

  return (
    <FilterStateContext.Provider value={{ filterState, isFilterChanged }}>
      <FilterDispatchContext.Provider value={filterDispatch}>{children}</FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  FilterProvider,
  useFilterStateContext,
  useFilterDispatchContext,
  FILTER_ACTION_TYPES,
  filterReducer,
};
