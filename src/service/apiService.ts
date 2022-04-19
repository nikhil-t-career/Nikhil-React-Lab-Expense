import axios from "axios";
import DataList from "../model/DataList";

const getDataFromServer = () => {
    return axios.get<DataList[]>(`http://localhost:3001/items`)
        .then(response => response.data);
}

const pushDataFromUser = (formData: Omit<DataList, "id">) => {
    return axios.post<DataList>(`http://localhost:3001/items`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.data)
}

export { getDataFromServer, pushDataFromUser }