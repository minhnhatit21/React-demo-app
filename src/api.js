import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID jJACyjhGgYzs5MQ0p7MI7A1uC3TF7Ck99jtOp577G54',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImage;