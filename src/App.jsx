import { useState } from 'react'
import Search from './components/serch-component';
import PersonForm from './components/person-form-component';
import Persons from './components/display-list-component';

const App = () => {
  const defaultData = [
    {
      name: "Ash",
      number: "88900765"
    },
    {
      name: "Blossum",
      number: "12345-00987"
    },
    {
      name: "Bubbles",
      number: "9900786"
    },
    {
      name: "Butter",
      number: "112450090"
    },
    {
      name: "Cody",
      number: "1334-0008-976"
    },
    {
      name: "Doby",
      number: "990087651"
    },
    {
      name: "Drake",
      number: "66-5543-098"
    }
  ];

  const [persons, setPersons] = useState(defaultData)
  const [searchValue, setSearchValue] = useState('');
  let filteredResults = [];

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
        <Persons persons={persons} filteredResults={filteredResults} searchValue={searchValue} />
    </div>
  )
}

export default App