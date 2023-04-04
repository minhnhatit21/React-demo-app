import { useState } from "react";
import BookCreate from './BookCreate';
function App() {
    //const [countId, setCountId] = useState(0);
    const [books, setBooks] = useState([]);
    const createNewBook = (title) => {
        console.log("This is title: ", title);
        const updateBooks = [ ...books, {id: Math.round(Math.random() * 9999 ), title: title}]
        setBooks (updateBooks);
        // setCountId = {
        //     countId: countId + 1
        // }
    }
    return (
        <>
            {console.log(books)}
            <BookCreate onCreateNewBook={createNewBook}/>
        </>
    )
}

export default App;