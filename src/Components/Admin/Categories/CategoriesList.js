import { useState, useEffect } from 'react'
import Category from './Category'
import deleteHelper from '../../Buttons/deleteHelper'
import './Category.css'


export default function CategoriesList({ data }) {
    const [categories, setCategories] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoaded(true)
            }, err=> console.log(err))
    }, [])

    const handleDelete = async (id) => {
        await deleteHelper(id, 'categories', categories, setCategories)
    }
    
    if(loaded)
    return (
        <div className="container">
            <h1 className="title is-1" >Lista de categorias</h1>
            <table className="table box media-center">
                <thead>
                    <tr>
                        <th><abbr title="firstName">ID</abbr></th>
                        <th><abbr title="lastName">Nombre</abbr></th>
                        <th><abbr title="email">Descripcion</abbr></th>
                        <th><abbr title="delete"></abbr></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => <Category key={category.id} category={category} handleDelete={handleDelete} />)}
                </tbody>
            </table>
        </div>
    )
}