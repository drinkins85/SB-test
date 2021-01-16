import React from 'react';
import TaskManager from './Components/TaskManager/TaskManager';
import './App.css';

const taskList = [
  {
    id: 1231231,
    type: 'Совещание отдела',
    title: 'Оценка инвестиционной привлекательности проекта застройки',
    description: '',
    author: { name: 'Зарембо-Годзяцкий' },
    assignee: { name: 'Зарембо-Годзяцкий' },
    date: new Date(2020, 8, 1),
    deadline: new Date(2020, 9, 10),
    status: 'В работе',
    subtasks: [
      {
        id: 3434343,
        status: 'В работе',
      },
      {
        id: 756756756,
        status: 'Завершена',
      },
      {
        id: 354353,
        status: 'Новая',
      },
      {
        id: 4354343,
        status: 'Новая',
      }
    ]
  },
  {
    id: 67456456,
    type: 'Встреча',
    title: 'Встреча с инвесторами',
    description: '',
    author: { name: 'Зарембо-Годзяцкий' },
    assignee: { name: 'Зарембо-Годзяцкий' },
    date: new Date(2021, 0, 1),
    deadline: new Date(2021, 2, 2),
    status: 'В работе'
  }
];

export default function App () {
  return <TaskManager tasks={taskList} />;
};
