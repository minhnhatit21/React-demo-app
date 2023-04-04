import { useState } from "react";

function BookCreate({ onCreateNewBook} ) {
    
    const [title, setTitle] = useState('');
    
    const handleChangeInput = (event) => {
        setTitle(event.target.value);
    }
    
    const handelSubmmit = (event) => {
        event.preventDefault();
        onCreateNewBook(title);
        setTitle('');
    }
    
    return (
        <>  
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handelSubmmit}>
              <label>Title</label>
              <input className="input" value={title} onChange={handleChangeInput}/>
               <button className="button">Create</button>
            </form>
        </div>
        </>
    )
}

export default BookCreate;