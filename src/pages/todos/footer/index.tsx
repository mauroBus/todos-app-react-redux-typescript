import React from 'react'
import t from 'format-message'
import Button from '@material-ui/core/Button'
import { Filters } from './filters'
import { getCompletedAmount, getUncompletedAmount } from '../utils'
import styles from './index.css'

type Props = {
  todos: ToDo[]
  activeFilter: VisibilityFilterType
  filterTodos: (filterType: VisibilityFilterType) => void
  clearCompleted: () => void
  toggleAll: (completed: boolean) => void
}

export const Footer = ({
  todos,
  activeFilter,
  filterTodos,
  clearCompleted,
  toggleAll,
}: Props) => {
  const amountLeft = getUncompletedAmount(todos)
  const amountCompleted = getCompletedAmount(todos)
  const handleToggleAll = () => toggleAll(amountLeft > 0)

  return (
    <footer className={styles.footer}>
      <label className={styles.itemsLeft}>
        {t(
          '{amountLeft, plural, =0 {All completed!} one {# item left} other {# items left}}',
          { amountLeft }
        )}
      </label>

      <Filters activeFilter={activeFilter} onFilter={filterTodos} />

      {todos.length > 0 && (
        <div className={styles.actions}>
          <Button color="primary" onClick={handleToggleAll}>
            {amountLeft > 0 ? t('Complete all') : t('Uncomplete all')}
          </Button>
          {amountCompleted > 0 && (
            <Button color="secondary" onClick={clearCompleted}>
              {t('Clear completed')}
            </Button>
          )}
        </div>
      )}
    </footer>
  )
}
