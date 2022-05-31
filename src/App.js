import data from './data'; 
import { useState } from 'react';
import Header from './components/Header';
import Birthdays from './components/Birthdays';

const App = () => {
  const today = new Date();
  const [ people, setPeople ] = useState(data); 
  const [ peopleBirthdayToday, setPeopleBirthdayToday ] = useState(people.filter(person => person.birthday.month === (today.getMonth() + 1) && person.birthday.day === today.getDate())); 

  const deleteBirthday = id => {
    setPeopleBirthdayToday(peopleBirthdayToday.filter(person => person.id !== id));
  }

  return (
    <div className="container">
      <Header peopleBirthdayToday={peopleBirthdayToday} />
      <Birthdays peopleBirthdayToday={peopleBirthdayToday} today={today} onDelete={deleteBirthday} />
      <button className="btn" onClick={() => setPeopleBirthdayToday([])}>clear all</button>
    </div>
  )
}

export default App