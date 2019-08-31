import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from "../middleware/thunk";
// import { fetchTodos } from "../actions/todo_actions"
// window.fetchTodos = fetchTodos;

// const store = createStore(() => ({}))

const configStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}



export default configStore;