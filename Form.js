import React from 'react'
import {useState} from 'react';

function Form({todos, setTodos, todo}) {
    const[form, setForm]= useState('')
    const onChangeForm= (e) =>{setForm(e.target.value)}

    const onSubmitTodo= (e) =>
    preventDeafult();
    if(form ===""){
        alert ('Bir Görev Ekleyin')
        return false
    };

    setTodos([...todos, {text:form, completed: false, id:Math.random()*1000,}]);
  return (
    <div>
        <header className='header'>
            
            <h1>todos</h1>

    <form>
        <input className='new-todo' value={form} placeholder="what needs to be done?" autofocus
        onChange={onChangeForm} ></input>

        <button onClick={onSubmitTodo}></button>
    </form>
        </header>

    </div>
  )
}

export default Form;