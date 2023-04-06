const initialState = {
  jobs: [],
  preferiti: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        preferiti: [...state.preferiti, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        preferiti: state.preferiti.filter(
          (company) => company !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default mainReducer;
