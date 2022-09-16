import { post } from './apiService';

export const createNewContact = async (data) => {
    try {
        await post('http://localhost:3001/contacts', data)
        return true
    } catch (err) {
        return err
    }
}