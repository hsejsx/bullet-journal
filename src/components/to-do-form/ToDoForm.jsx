import React, { useState } from 'react';
import styles from './ToDoForm.module.css';

export default function ToDoForm({ handleAdd }) {
    const [newToDo, setNewToDo] = useState();
    const onAdd = (e) => {
        e.preventDefault();
        handleAdd(newToDo);
        setNewToDo('');
    }
    return (
        <form onSubmit={onAdd} className={styles.toDoForm}>
            <input required className={styles.toDoInput} type="text" value={newToDo} onChange={e => setNewToDo(e.target.value)} />
            <button type='submit'>추가</button>
        </form>
    );
}

