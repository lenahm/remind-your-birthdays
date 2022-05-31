const Header = ({ peopleBirthdayToday }) => {
    return (
        <>
            <h1>Birthday Reminder</h1>
            {peopleBirthdayToday === undefined || peopleBirthdayToday.length === 0 ? <h2>No birthday today</h2> : <h2>{peopleBirthdayToday.length} {peopleBirthdayToday.length > 1 ? 'birthdays' : 'birthday'} today</h2>}
        </>
    )
}

export default Header