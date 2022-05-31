import Birthday from './Birthday';

const Birthdays = ({ peopleBirthdayToday, today, onDelete }) => {
  return (
    <>
        <p>already congratulated?</p>
        {peopleBirthdayToday.map(person => {
            return <Birthday key={person.id} person={person} today={today} onDelete={onDelete} />
        })}
    </>
  )
}

export default Birthdays