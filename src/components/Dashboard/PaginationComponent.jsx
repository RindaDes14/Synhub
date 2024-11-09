import React from 'react'
import Pagination from 'react-js-pagination'

const PaginationComponent = (props) => {
  return (
    props.total > 0 && (
      <Pagination
        innerClass={`pagination justify-content-${props.position}`}
        activeClass='page-item active'
        activePage={props.currentPage}
        itemsCountPerPage={props.perPage}
        totalItemsCount={props.total}
        pageRangeDisplayed={5}
        onChange={props.onChange}
        itemClass='page-item'
        linkClass='page-link'
      />
    )
  )
}

export default PaginationComponent