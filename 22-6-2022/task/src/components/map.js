
export default function App() {

    let employees = [
        { id: 4, name: 'ahmad', country: 'Denmark' },
        { id: 3, name: 'ali', country: 'Canada' },
        { id: 2, name: 'omar', country: 'Belgium' },
        { id: 1, name: 'mahmoud', country: 'Austria' },
        { id: 6, name: 'osama', country: 'jordan' },
        { id: 5, name: 'amjad', country: 'Egypt' },
    ];


    return (
        <div>
            {employees.map(element => {
                (
                    <div key={element.id}>
                        <li>
                            ID : {element.id} &nbsp;&nbsp;&nbsp;&nbsp;
                            Name : {element.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Country : {element.country}
                        </li>

                        <hr />
                    </div>
                );
            })}
        </div>
    );

}