Todo app created with React Hooks for learning purposes.
Uses Context API and useReducer/useContext and memo.

To start the app use: npm start. Open http://localhost:3000 to view it in the browser.

Helper hooks:

useInputState - sets value taken from input / resets value
useTodoState - all functions used for adding, editing, toggling or removing Todos placed in one hook
useToggleState - toggles the todo to completed
useLocalStorageState - syncs state in localstorage with useState hook.
useLocalStorageReducer - syncs state with useReducer.

Context:
Separate Providers passed to components for `todos` and for `dispach` to re-render when needed only.

Reducer function: includes all actions (add, edit, toggle, remove).

Uses uuidv4 for unique ids and keys and @material-ui for styling.
