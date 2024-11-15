import React, { useState } from 'react'
import { Trash } from 'lucide-react'

interface Item {
    id: number,
    text: string,
    completed: boolean
}

const ToDoList = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //agregar tareas a la lista
        setItems([...items, {id: Date.now(), text: newItem, completed: false}]);
        setNewItem('');
    }

    const handleDelete = (id:number) => {
        setItems(items.filter(item => item.id !== id ));
    }

    const handleToggleCompleted = (id: number) =>{
        setItems(items.map(item => item.id === id ? {...item, completed: !item.completed } : item ))
    }

  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-4'>
      <h2 className='mb-4'>Lista de Tareas</h2>
      <form onSubmit={handleSubmit} className='flex mb-4'>
        <input 
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder='Agregar nueva Tarea'
            />
        <button 
            type='submit'>
            Agregar
        </button>
      </form>
      <ul>
        {
            items.map(item => (
                <li className='flex items-center mb-2'>
                    <input 
                        type="checkbox" 
                        checked={item.completed}
                        onChange={() =>handleToggleCompleted(item.id)}
                        />
                    <span className={`text-lg ${item.completed ? 'line-through text-green-500' : 'text-gray-500'}`}> {item.text}</span>
                    <button onClick={() => handleDelete(item.id)}>
                        <Trash />
                    </button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ToDoList
