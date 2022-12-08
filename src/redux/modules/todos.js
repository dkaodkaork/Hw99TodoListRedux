// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};
// export const getTodoById = (payload) => {
//   return { type: GET_TODO_BY_ID, payload };
// };

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트공부",
      body: "리액트 어려워요",
      isDone: false,
      hard: 5,
    },
    {
      id: 2,
      title: "리액트공부",
      body: "리액트 질문있어요",
      isDone: true,
      hard: 3,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos], // 새로추가되는 Todo가 젤위로 추가 되도록 수정  수정전: todos:[...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone, // isDone:isDone  false => false => true
            };
          } else {
            return {
              ...todo,
            };
          }
        }),
      };
    default:
      return state;
  }
};
export default todos;
