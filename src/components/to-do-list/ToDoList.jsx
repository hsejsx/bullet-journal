import React from 'react';
import styles from './ToDoList.module.css';
import { FaTrashAlt } from 'react-icons/fa';


export default function ToDoList({ toDo, handleDelete, handleUpdate, mode }) {
    return (
        <>
            {mode === 'all' && <ul className={styles.toDoList}>
                {toDo.map((item, index) => {
                    return (<li key={item.id} className={styles.item}>
                        <input checked={item.type} className={styles.toDo} type="checkbox" name={item.title} id={index} onChange={() => { handleUpdate(item.id) }} />
                        <label className={styles.bullet} htmlFor={index}><span>{item.title}</span></label>
                        <div className={styles.btnGroup}>
                            <button onClick={() => { handleDelete(item.id) }}><FaTrashAlt></FaTrashAlt></button>
                        </div>
                    </li>)
                })}
            </ul>}
            {mode === 'active' && <ul className={styles.toDoList}>
                {toDo.map((item, index) => {
                    return (item.type || <li key={item.id} className={styles.item}>
                        <input checked={item.type} className={styles.toDo} type="checkbox" name={item.title} id={index} onChange={() => { handleUpdate(item.id) }} />
                        <label className={styles.bullet} htmlFor={index}><span>{item.title}</span></label>
                        <div className={styles.btnGroup}>
                            <button onClick={() => { handleDelete(item.id) }}><FaTrashAlt></FaTrashAlt></button>
                        </div>
                    </li>)
                })}
            </ul>}
            {mode === 'complete' && <ul className={styles.toDoList}>
                {toDo.map((item, index) => {
                    return (item.type && <li key={item.id} className={styles.item}>
                        <input checked={item.type} className={styles.toDo} type="checkbox" name={item.title} id={index} onChange={() => { handleUpdate(item.id) }} />
                        <label className={styles.bullet} htmlFor={index}><span>{item.title}</span></label>
                        <div className={styles.btnGroup}>
                            <button onClick={() => { handleDelete(item.id) }}><FaTrashAlt></FaTrashAlt></button>
                        </div>
                    </li>)
                })}
            </ul>}
        </>
    );
}

