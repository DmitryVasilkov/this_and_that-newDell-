import { Context } from './context';
import { peopleDefault } from './data/users';
import './App.css';
import CardsContainer from './components/CardsContainer';
import { useEffect, useState } from 'react';
import AddFormCard from './components/AddFormCard';
import {req} from './req'

function App() {
  
  const [darkMode, setDarkMode] = useState(() =>{
    return localStorage.getItem('mode') ?? false
  })
  
  useEffect(() => {
    localStorage.setItem('mode', darkMode)
  }, [darkMode]);

  const darkModeValue = darkMode ? 'Day theme' : 'Night theme'

  const [people, setPeople] = useState(() => {
  return JSON.parse(localStorage.getItem('people')) ?? []


})

useEffect(() => {
  if(people.length !== 0) return
  req(setPeople)
}, []);

useEffect(() => {
  localStorage.setItem('people', JSON.stringify(people))

}, [people]);


 const remove = (id)=> {
  const newObj = people.filter(el => id !== el.id)
  setPeople(newObj)
 } 

 const addPerson = (obj) => setPeople([...people, obj])

  return (
    <div className = {`App ${darkMode ? 'dark' : 'light'} `} >
      <Context.Provider value={{people, remove, addPerson}}>
        <button onClick={() => setDarkMode(!darkMode)}>{darkModeValue}</button>
        <AddFormCard />
        <CardsContainer  /> {/*data={peopleDefault}*/}
      </Context.Provider>
    </div>
  );
}

export default App;



//1. создать компонент CardsContainer который получает через context state проходится по нему циклом
// и генерирует Card 
//2. создать компонент card который получает через пропсы данные о деле и отображает их
//3. napisali funkziu remove i povesili slushatel sobitiy na cartu