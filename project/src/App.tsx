import { useEffect, useReducer } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { initialState } from "./lib/initialState";
import { reducer } from './lib/reducer'
import { getAll, remove } from './lib/api';
import { ToDoContext } from './lib/context';
import { ActionTypes } from './lib/types';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getAll()
      .then(res => {
        dispatch({ type: ActionTypes.setTodos, payload: res })
      })
  }, [])

  // useEffect(() => {
  //   remove()
  //     .then(res => {
  //       dispatch({ type: ActionTypes.removeTodo, payload: res })
  //     })
  // }, [])

  return (
    <>
      <ToDoContext.Provider value={{ state, dispatch }}>
        <ToDoList

        />
      </ToDoContext.Provider>
    </>)
}

export default App
