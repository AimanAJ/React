

export default function App() {
    const employees = [
        { id: 4, name: 'ahmad', country: 'Denmark' },
        { id: 3, name: 'ali', country: 'Canada' },
        { id: 2, name: 'omar', country: 'Belgium' },
        { id: 1, name: 'mahmoud', country: 'Austria' },
        { id: 6, name: 'osama', country: 'jordan' },
        { id: 5, name: 'amjad', country: 'Egypt' },
    ];

    // ASCENDING (1 - 100)
    const numAscending = [...employees].sort((a, b) => a.id - b.id);
    console.log(numAscending);



    // DESCENDING (100 - 1)
    const numDescending = [...employees].sort((a, b) => b.id - a.id );
    console.log(numDescending);



    // ASCENDING (A - Z)
    const strAscending = [...employees].sort((a, b) => a.name > b.name ? 1 : -1,);
    console.log(strAscending);



    // DESCENDING (Z - A)
    const strDescending = [...employees].sort((a, b) => a.name > b.name ? -1 : 1,);
    console.log(strDescending);




    const list = []
    numAscending.forEach((element) => {
        list.push(
            <li>
                ID : {element.id} &nbsp;&nbsp;&nbsp;&nbsp;
                Name : {element.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Country : {element.country}
            </li>)

        list.push(<hr></hr>)
    })

    return (
        <div>
            {list}
        </div>
    )


}