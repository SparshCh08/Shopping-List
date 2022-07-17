import ItemList from './ItemList';
const Content1 = ({ items, handleCheck, handleDelete }) => {
  // prps drilling 
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  )
}
export default Content1