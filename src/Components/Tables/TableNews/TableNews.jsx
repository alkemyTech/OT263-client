import { useState } from 'react';
import deleteHelper from '../../Buttons/deleteHelper';
import TableTemplate from '../TableTemplate/TableTemplate';

let json = [
    {
        id:1 ,
        name:'name 1', 
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/01/nearby_galaxy_ngc_1569_is_a_hotbed_of_star_birth_activity2/17880180-2-eng-GB/Nearby_galaxy_NGC_1569_is_a_hotbed_of_star_birth_activity.jpg', 
        createdAt:'2019-08-27'
    },
    {
        id: 2,
        name:'name 2', 
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/01/nearby_galaxy_ngc_1569_is_a_hotbed_of_star_birth_activity2/17880180-2-eng-GB/Nearby_galaxy_NGC_1569_is_a_hotbed_of_star_birth_activity.jpg', 
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

    const handleDelete = async (id) => {
        await deleteHelper(id, 'news', news, setNews);
    }
    

    return(
        <div className="container">
            <TableTemplate data={news} handleDelete={handleDelete} />
        </div>
    );
}

export default TableNews;