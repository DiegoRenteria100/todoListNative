import { useState } from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Tareas pendientes']);

  const [isEdit, setIsEdit] = useState(true);


  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const updateAdd = state => {
    setShowAdd(state);
  };

  const editTask = text => {
    setTask(text);
  };

  const editItem = index => {
    const temp = [...tasks];
    temp[index] = task;
    setTasks(temp);
    setIsEdit(true);
  };

  const changeState = () => {
    setIsEdit(false);
  }
  return {
    addTask,
    deleteTask,
    task,
    tasks,
    showAdd,
    isEdit,
    updateAdd,
    editTask,
    editItem,
    changeState,
  };
};

export default useTask;
