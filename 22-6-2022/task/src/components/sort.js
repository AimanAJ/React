const Sort =() =>{
    const array = ['Z' , 'A' , 'Q' , 'B' , 'C' , 'Y' , 'S' , 'W' ]
    array.sort();
    return(
        <div  className="m-5">
            <h1>Task 1</h1>
            {array.join(' ,  ')}
           <br></br>
        </div>
    );
}

export default Sort;