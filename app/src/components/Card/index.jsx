import React, { useContext } from 'react'
import { Context } from '../../context'

export default function Card({id, name, email}) {
    const {remove} = useContext(Context)
    
  return (
    <div className='pers' onClick={() => remove(id)}>
        <p className='name'>{name}</p>
        <p className='surname'>{email}</p>
        
    </div>
  )
}
