import React from 'react'
import FilterLink from './containers/FilterLink'
import { VisibilityFilters } from './redux/actions'

export default function Footer(props) {
  return (
    <section>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </section>
  )
}