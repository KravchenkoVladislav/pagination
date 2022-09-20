import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import getUser from '../../../api/GetUser'
import {
  Link
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'

const PaginatedPage = ({ pageNumber }) => {
  const [page, setPage] = useState([])

  useEffect(() => {
    getUser(pageNumber).then(res => {
      setPage(res.data.data)
    })
  }, [pageNumber])
  return(
    <section>
      <h1>Pagination</h1>
      <Pagination/>
      <nav>
        <p>Return to the <Link to='/'>index page</Link>.</p>
          {page.map((item)=>(
            <div>
              <div>Email: {item.email}</div>
              <div>First Name: {item.first_name}</div>
              <div>Last Name: {item.last_name}</div>
              <img src = {item.avatar}></img>
            </div>
          ))}
        <p>Redux has state for page {pageNumber}.</p>
      </nav>
    </section>
  )
}

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default PaginatedPage
