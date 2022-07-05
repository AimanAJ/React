import { useState } from "react";
const Filter = () => {
    let arr = ["ahmad", "ali", "omar", "me", "also-me"];
    const [search, searchHandler] = useState('');
    const ChangeHandler = (event) => {
        let filteredArr = arr.filter(e => e.includes(event.target.value));
        searchHandler(filteredArr);
    }
    return (
        <div>
            <form>
                <input type="text" onChange={ChangeHandler} />
                <h5>{search}</h5>
            </form>
        </div>
    );
}
export default Filter;