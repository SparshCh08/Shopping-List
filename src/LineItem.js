import { FaTrashAlt } from 'react-icons/fa'
const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                // anonomyous fuction to passing attributes
                checked={item.checked}
            />
            <p
                style={(item.checked ? { textDecoration: 'line-through' } : null)}
            >{item.item}</p>
            {/* <button>Delete</button> */}
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex={0}
            // aria-lable={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem