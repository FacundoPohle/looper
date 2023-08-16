import Prueba from "./Prueba"

const Groups = ({ selectedGenre, handleGroupSelect }) => {

    const groups = ['Group A', 'Group B', 'Group C'];

    return (
        <div className='Graldiv'>
            <Prueba title='Groups' />
            <h3>Selecciona un grupo:</h3>
            <ul>
                {groups.map(group => (
                    <li key={group}>
                        <button onClick={() => handleGroupSelect(group)}>{group}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Groups;