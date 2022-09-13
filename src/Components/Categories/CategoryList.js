import { useState, useEffect } from 'react'
import Category from './Category'
import './Category.css'


export default function CategoryList({data}){
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            setCategories(response)
        })
    }, [])
    return (
        <div className="container">
            <h1 className="title is-1" >Lista de usuarios</h1>
            <table className="table box media-center">
                <thead>
                    <tr>
                        <th><abbr title="firstName">Nombre</abbr></th>
                        <th><abbr title="lastName">Apellido</abbr></th>
                        <th><abbr title="email">Email</abbr></th>
                        <th><abbr title="edit">Edit</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => <Category key={category.id} user={category} />)}
                </tbody>
            </table>
        </div>
    )
}