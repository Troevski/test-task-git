import React, { useEffect, useState } from 'react'

import { PER_PAGE } from './../../constants/query-params'
import { useGetUsersMutation } from '../../services/usersAPI/usersApi'
import { UserPreview } from './UsersPreview'
import { UsersContainer, Loading } from './Users.styles'
import { Pagination } from '../Pagination/Pagination'
import { ButtonScrollToTop } from '../ButtonScrollToTop'

export const Users = () => {
  const [getUsers, { data, isLoading }] = useGetUsersMutation()

  const [page, setPage] = useState(0)

  const handlePageChange = (e) => {
    getUsers({ per_page: PER_PAGE, since: e.selected * PER_PAGE })
    setPage(e.selected)
  }

  useEffect(() => {
    getUsers({ per_page: PER_PAGE, since: 0 })
  }, [])

  return (
    <UsersContainer>
      <ButtonScrollToTop />
      <Pagination onPageChange={handlePageChange} forcePage={page} />
      {isLoading ? (
        <Loading
          type="spinningBubbles"
          color="white"
          height={667}
          width={375}
        />
      ) : (
        <>
          {data?.map((user) => (
            <UserPreview user={user} key={user.id} />
          ))}
          <Pagination onPageChange={handlePageChange} forcePage={page} />
        </>
      )}
    </UsersContainer>
  )
}
