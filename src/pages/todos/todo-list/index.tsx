import React, { PureComponent, ReactNode, createRef } from 'react'
import t from 'format-message'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { SHOW_ALL } from '../_constants'
import { Todo } from './todo'
import styles from './index.css'

type Props = {
  todos: ToDo[]
  activeFilter: VisibilityFilterType
  filterTodos: (filterType: VisibilityFilterType) => void
  onDelete: (id: number) => void
  onEdit: (todo: ToDo) => void
  onStarred: (id: number) => void
  onToggle: (id: number) => void
}

export class TodoList extends PureComponent<Props> {
  list = createRef<HTMLUListElement>()

  componentDidMount() {
    this.layout()
  }

  componentDidUpdate() {
    this.layout()
  }

  // Animates the list items.
  layout = () => {
    const { current: list } = this.list
    if (!list) return
    let y = 0
    let child = list.firstElementChild

    while (child instanceof HTMLElement) {
      // eslint-disable-next-line immutable/no-mutation
      child.style.transform = `translateY(${y}px)`
      y += child.offsetHeight
      child = child.nextElementSibling
    }

    // eslint-disable-next-line immutable/no-mutation
    list.style.height = `${y}px`
  }

  handleShowAll = () => this.props.filterTodos(SHOW_ALL)

  renderList(): ReactNode {
    const { todos, onToggle, onEdit, onStarred, onDelete } = this.props

    return (
      <List component="ul" ref={this.list}>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onToggle={onToggle}
            onStarred={onStarred}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </List>
    )
  }

  renderEmptyCard(): ReactNode {
    const { activeFilter } = this.props
    return (
      <Card className={styles.emptyCard} variant="outlined" component="h3">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {t('There are no items for the selected criteria.')}
          </Typography>
        </CardContent>
        <CardActions classes={{ root: styles.emptyCardActions }}>
          {activeFilter !== SHOW_ALL && (
            <Button size="small" onClick={this.handleShowAll}>
              {t('Show all')}
            </Button>
          )}
        </CardActions>
      </Card>
    )
  }

  render() {
    return (
      <Paper elevation={3}>
        {this.props.todos.length ? this.renderList() : this.renderEmptyCard()}
      </Paper>
    )
  }
}
