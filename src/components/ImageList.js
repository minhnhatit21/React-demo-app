import "./ImageList.css"
import ImageShow from "./ImageShow";

function ImageList({images}) {
    const rederedImages = images.map((image) => {
        return <ImageShow image={image}></ImageShow>
    })
    return (
        <>  
            <div className="image-list">{rederedImages}</div>   
        </>
    )
}

export default ImageList;