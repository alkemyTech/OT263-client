import TableTemplate from '../TableTemplate/TableTemplate'

const TableActivities = ({ data }) => {
  return (
    <div className='container'>
      <TableTemplate data={data} />
    </div>
  )
}

export default TableActivities
