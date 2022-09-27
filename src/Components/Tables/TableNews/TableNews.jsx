import { useState } from 'react';
import deleteHelper from '../../Buttons/deleteHelper';
import TableTemplate from '../TableTemplate/TableTemplate';
import { useParams } from 'react-router-dom'

let json = [
    {
        id:1 ,
        name:'name 1', 
        image:'https://images.unsplash.com/photo-1615150338956-542fc878f7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80', 
        createdAt:'2019-08-27'
    },
    {
        id: 2,
        name:'name 2', 
        image:'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
        createdAt:'2019-08-27'
    },
    {
        id: 3,
        name:'name 3', 
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/01/nearby_galaxy_ngc_1569_is_a_hotbed_of_star_birth_activity2/17880180-2-eng-GB/Nearby_galaxy_NGC_1569_is_a_hotbed_of_star_birth_activity.jpg', 
        createdAt:'2019-08-27'
    },
    {
        id: 4,
        name:'name 4', 
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/01/nearby_galaxy_ngc_1569_is_a_hotbed_of_star_birth_activity2/17880180-2-eng-GB/Nearby_galaxy_NGC_1569_is_a_hotbed_of_star_birth_activity.jpg', 
        createdAt:'2019-08-27'
    },
    {
        id: 5,
        name:'name 5', 
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/01/nearby_galaxy_ngc_1569_is_a_hotbed_of_star_birth_activity2/17880180-2-eng-GB/Nearby_galaxy_NGC_1569_is_a_hotbed_of_star_birth_activity.jpg', 
        createdAt:'2019-08-27'
    }
];

const TableNews =()=> {
    const [news, setNews] = useState(json)
    const params = useParams()

    const handleDelete = async (id) => {
        await deleteHelper(id, 'news', news, setNews);
    }
    

    return(
        <div className="container">
            <p className='title is-size-2 has-text-centered mt-6 is-capitalized'>{ params['*'].split('-').join(' ') }</p>
            <TableTemplate data={news} handleDelete={handleDelete} />
        </div>
    );
}

export default TableNews;