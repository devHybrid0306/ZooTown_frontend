const initialState = {
  items: [],
  item: {}
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COURSE":
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default course;
