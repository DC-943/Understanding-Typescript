import React, {useRef} from "react":

type NewTodoProps ={
  onAddTodo: (text:string) => void
}



const NewTodo:React.FC<NewTodoProps> =(props)=>{
  const textInputRef = useRef<HTMLInputElement>();
   const todoSubmitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText)
    props.onAddTodo(enteredText)
  }

  return <form onSubmit ={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo Test</label>
      <input type="text" id="todo-text" ref={textInputRef}/>
    </div>
    <button type="submit">ADD TODO</button>
  </form>
}