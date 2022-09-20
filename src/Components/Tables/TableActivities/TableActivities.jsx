import TableTemplate from "../TableTemplate/TableTemplate";

const TableActivities =()=> {
    let json = [
        {
            name:'name 1'
        },
        {
            name:'name 2', 
        },
        {
            name:'name 3', 
        },
        {
            name:'name 4', 
        },
        {
            name:'name 5', 
        }
    ];

    return(
        <div className="container">
            <TableTemplate data={json} />
        </div>
    );
}

export default TableActivities;