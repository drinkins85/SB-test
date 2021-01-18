import React from 'react';
import TaskManager from './Components/TaskManager/TaskManager';
import './App.css';

const taskList = [
  {
    id: 1,
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
    id: 2,
    type: 'Встреча',
    title: 'Встреча с инвесторами',
    description: '',
    author: { name: 'Зарембо-Годзяцкий' },
    assignee: { name: 'Зарембо-Годзяцкий' },
    date: new Date(2021, 0, 1),
    deadline: new Date(2021, 2, 2),
    status: 'Новая'
  },
  {
    id: 3,
    type: 'Конференция',
    title: 'Встреча с инвесторами',
    description: '',
    author: { name: 'Иванов Иван' },
    assignee: { name: 'Петров Петр' },
    date: new Date(2021, 0, 1),
    deadline: new Date(2021, 2, 2),
    status: 'Завершена',
    closeType: 'Автоматически'
  },
  {
    id: 4,
    type: 'Встреча',
    title: 'Встреча с консультантами',
    description: '',
    author: { name: 'Константинов Константин' },
    assignee: { name: 'Петров Петр' },
    date: new Date(2021, 0, 1),
    deadline: new Date(2021, 2, 2),
    status: 'В работе'
  },
  {
    id: 5,
    type: 'Совещание отдела',
    title: 'Обсуждение квартальных показателей',
    description: '',
    author: { name: 'Александров Александр' },
    assignee: { name: 'Петров Петр' },
    date: new Date(2021, 0, 1),
    deadline: new Date(2021, 2, 2),
    status: 'В работе'
  },
  {
    id: 6,
    type: 'Конференция',
    title: 'СберКонф 2020',
    description: '',
    author: { name: 'Иванов Иван' },
    assignee: { name: 'Петров Петр' },
    date: new Date(2020, 0, 1),
    deadline: new Date(2020, 2, 2),
    status: 'Завершена',
    closeType: 'Вручную'
  },

];

export default function App () {
  return <TaskManager tasks={taskList} />;
};
