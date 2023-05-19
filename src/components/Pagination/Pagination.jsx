import React from 'react'

import { CustomPaginate } from './Pagination.styles'

export const Pagination = ({ onPageChange, forcePage }) => {
  return (
    <CustomPaginate
      breakLabel="..."
      nextLabel=" > "
      pageRangeDisplayed={4}
      onPageChange={onPageChange}
      previousLabel=" < "
      previousClassName="page previous"
      nextClassName="page next"
      pageCount={100}
      renderOnZeroPageCount={null}
      pageClassName="page"
      activeClassName="page-active"
      breakClassName="page break"
      forcePage={forcePage}
    />
  )
}
