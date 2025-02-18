import React, { useState } from "react"
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"
import { Todo } from "./todo.model"
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todos = [
    { id: "t1", text: "Finish the course" },
    { id: "t2", text: "study the course" },
  ]

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ])
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
