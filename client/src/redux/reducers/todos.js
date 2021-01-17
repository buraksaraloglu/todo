/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import { ADD_TODO, FETCH_TODOS_SUCCESS, TOGGLE_TODO } from '../actionTypes';

import getIds from '../../utils/getIds';

const initialState = {
  allIds: [],
  byIds: {},
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case FETCH_TODOS_SUCCESS: {
      const { content } = action.payload;
      const ids = getIds(content);
      const todosMap = {};
      content.map(
        (todo) =>
          (todosMap[todo._id] = {
            ...todo,
          }),
      );

      return {
        allIds: ids,
        byIds: todosMap,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
