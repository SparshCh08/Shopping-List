import Header from './Header';
// import Content from './Content';
import AddItem from './AddItem';
import Content1 from './Content1';
import Footer from './Footer';
import SearchItem from './SearchItem';
import { useState, useEffect } from 'react';

function App() {
  // we want to total our no. of items in our list 
  // so we have need to access content1 data by footer  
  // this is the place where we locate the common data we are going to use 





  let defaultList = JSON.parse(localStorage.getItem('ShoppingList'));

  if (defaultList.length === 0) {
    defaultList = [{
      "id": 1,
      "checked": false,
      "item": "Almonds"
    },
    {
      "id": 2,
      "checked": false,
      "item": "Pizza"
    },
    {
      "id": 3,
      "checked": false,
      "item": "Bread"
    }];
  }
  // console.log(defaultList.length);
  const [items, setItems] = useState(defaultList);


  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('ShoppingList', JSON.stringify(items));
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }
  const handleCheck = (id) => {
    // map is because we can't directly access/change our data
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    // setting the default state into new one
    // ...item for traverse through all elements
    localStorage.setItem('ShoppingList', JSON.stringify(listItems));
    // to save into localStorage
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title={"Shopping List"} />
      {/* <Content /> */}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content1
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
