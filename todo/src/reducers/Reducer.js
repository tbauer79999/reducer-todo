export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      key: 3892987589,
    },
  ];
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return  [...state, {item: action.text, completed: false,  key: action.key, }, ] ;

      case "TOGGLE_TODOS":
        return state.map((t,idx) =>
          idx === action.idx ? { ...t, completed: !t.completed, item: t.text, key: t.key, } : t);

      default:
        return state;
    }
  };


  