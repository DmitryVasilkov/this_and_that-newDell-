import React, { useContext } from 'react'
import { Context } from '../../context';

export default function AddFormCard() {

    const {addPerson} =useContext(Context)

    const submit = event => {
        event.preventDefault();

        const person = {
            id: Date.now(),
            name: event.target.name.value,
            email: event.target.email.value
        }
        addPerson(person)
        event.target.reset();
        
    }
  return (
    <form className='formAddItem' onSubmit={submit}>
        <input type="text" placeholder='Name' name='name'/>
        <input type="text" placeholder='email' name='email'/>
        <button>Add</button>
    </form>
  )
}
