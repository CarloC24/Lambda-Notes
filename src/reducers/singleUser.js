import { NAME_PICTURE } from '../actions';

const initialState = {
  name: '',
  picture: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_PICTURE: {
      const { name, picture } = action.payload;
      return {
        ...state,
        name,
        picture
      };
    }
    default: {
      return state;
    }
  }
};
