import React from 'react';

const employees = [
    { id: 4, name: 'ahmad', country: 'Denmark' },
    { id: 2, name: 'omar', country: 'Belgium' },
    { id: 3, name: 'ali', country: 'Canada' },
    { id: 6, name: 'osama', country: 'jordan' },
    { id: 5, name: 'amjad', country: 'Egypt' },
    { id: 1, name: 'mahmoud', country: 'ustria' },
];

function App() {
    return (
        <div>
            {employees.filter(person => person.id <= 3).map(filteredPerson => (
                <div>
                    <li>
                        ID : {filteredPerson.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Name : {filteredPerson.name}
                    </li>
                    
                    <hr></hr>
                </div>
            ))}
        </div>
    );
}

export default App;