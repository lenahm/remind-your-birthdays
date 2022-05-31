import { FaCheckCircle } from 'react-icons/fa';

const Birthday = ({ person, today, onDelete }) => {
    const { key, id, name, img, birthday } = person;

    return (
        <div key={key} className="person">
            <img src={require(`../img/${img}`)} />
            <h4>{name}</h4>
            <h4>{birthday.day}.{birthday.month}.{birthday.year} <br /> {today.getFullYear() - birthday.year} years</h4>
            <button onClick={() => onDelete(id)}><FaCheckCircle /></button>
        </div>
    )
}

export default Birthday