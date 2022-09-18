import { deleteRequest } from "../../Services/privateApiService";

// Call this function in the container component.
// Then pass it down to the child component as a prop.

export default async function deleteHelper (id, url, list, setList) {
    await deleteRequest(url, id);

    const newList = list.filter((item) => item.id !== id);
    setList(newList);
}