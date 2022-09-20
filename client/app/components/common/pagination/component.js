import React from 'react'
import ReactRouterPagination from 'react-router-pagination'
const Pagination = ({
  totalPages,
  pageNumber,
  spread,
  handleClick
}) => {
  return(
    <div>
      <ReactRouterPagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        spread={spread}
        onClick={handleClick}
      />
    </div> 
  )
}

export default Pagination
