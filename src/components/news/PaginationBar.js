import Pagination from 'react-bootstrap/Pagination';

function PaginationBar() {
    return (
      <>
        <Pagination>
          <Pagination.Item className="current">{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
        </Pagination>
      </>
    )
}
    
export default PaginationBar
