import { useEffect, useState } from 'react'
import Search from './components/search-component';
import PersonForm from './components/person-form-component';
import Persons from './components/display-list-component';
import phoneBookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState(null)
  const [searchValue, setSearchValue] = useState('');
  let filteredResults = [];

  const getPersonsData = async() => {
    let data = await phoneBookService.getAll();
    setPersons(data)
  };

  useEffect(() => {
    if(persons === null) {
      getPersonsData()
    }
  },[]);

  if (searchValue !== "") {
    let searchDict = new Map();
    if (searchDict.has(searchValue)) {
      filteredResults = searchDict.get(searchValue);
    } else {
      filteredResults = persons.filter((person) => person.name.toLowerCase().startsWith(searchValue.toLowerCase()))
      searchDict.set(searchValue, filteredResults)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
        {persons && <Persons persons={persons} filteredResults={filteredResults} searchValue={searchValue} />}
    </div>
  )
}

export default App