import React, { useEffect, useState } from 'react';
import ToDoForm from '../to-do-form/ToDoForm';
import ToDoList from '../to-do-list/ToDoList';
import styles from './Daily.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Daily({ env, handleEnv }) {
    const date = new Date();
    const [mode, setMode] = useState('all');
    const [init, setInit] = useState(false);
    const day = () => {
        switch (date.getDay()) {
            case 0:
                return '일'
            case 1:
                return '월'
            case 2:
                return '화'
            case 3:
                return '수'
            case 4:
                return '목'
            case 5:
                return '금'
            case 6:
                return '토'
            default:
                break;
        }
    }
    const [todo, setTodo] = useState([]);
    const handleUpdate = (id) => {
        const index = todo.findIndex(item => item.id === id);
        const copy = [...todo];
        copy[index].type = !copy[index].type;
        setTodo(copy);
    }
    const handleAdd = (newToDo) => {
        setTodo(prev => [...prev, { id: Date.now(), title: newToDo, type: false }]);
    }
    const handleDelete = (id) => {
        setTodo(prev => [...prev.filter(item => {
            if (item.id !== id) {
                return item;
            }
        })]);
    }

    useEffect(() => {
        let myTodo = localStorage.getItem('todo');
        myTodo = JSON.parse(myTodo);
        setTodo(myTodo);
        setInit(true);
    }, [])

    useEffect(() => {
        if (init) {
            localStorage.setItem('todo', JSON.stringify(todo));
        }
    }, [todo])

    return (
        <section className={styles.daily}>
            <header className={styles.header}>
                <h1>{`${date.getFullYear()}년.${date.getMonth() + 1}월.${date.getDate()}일(${day()})`}</h1>
                <div>
                    <button onClick={handleEnv}>
                        {env && <FaSun></FaSun>}
                        {env || <FaMoon></FaMoon>}
                    </button>
                    <button className={mode === 'all' && styles.active} onClick={() => { setMode('all') }}>전체</button>
                    <button className={mode === 'active' && styles.active} onClick={() => { setMode('active') }}>진행중</button>
                    <button className={mode === 'complete' && styles.active} onClick={() => { setMode('complete') }}>완료</button>
                </div>
            </header>
            <ToDoList mode={mode} toDo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate}></ToDoList>
            <ToDoForm handleAdd={handleAdd}></ToDoForm>
            <div className={styles.holeGroup}>
                <span className={styles.hole}></span>
                <span className={styles.hole}></span>
                <span className={styles.hole}></span>
            </div>
        </section>
    );
}

