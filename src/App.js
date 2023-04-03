import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImage from './api';
import ImageList from "./components/ImageList";

function App() {

    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImage(term);
        setImages(result);
    }
    return (
        <>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}></ImageList>
        </>
    );
}

export default App;