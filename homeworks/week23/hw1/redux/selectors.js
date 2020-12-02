import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = (store) => store.todos;

export const getTodoList = (store) => {
  return getTodosState(store) ? getTodosState(store).allIds : [];
};

export const getTodoById = (store, id) => {
  return getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};
};

export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.IMCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
