import React, { PureComponent, MouseEvent } from 'react'
import t from 'format-message'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import BackspaceIcon from '@material-ui/icons/Backspace'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'
import { TitleEdit } from './title-edit'
import styles from './todo.css'

type Props = ToDo & {
  onDelete: (id: number) => void
  onEdit: (todo: ToDo) => void
  onStarred: (id: number) => void
  onToggle: (id: number) => void
}

type State = {
  isEditing: boolean
}

export class Todo extends PureComponent<Props, State> {
  state = {
    isEditing: false,
  }

  handleToggle = () => {
    const { onToggle, id } = this.props
    onToggle(id)
  }

  handleStarred = (event: MouseEvent<HTMLButtonElement>) => {
    const { onStarred, id } = this.props
    event.preventDefault()
    event.stopPropagation()
    onStarred(id)
  }

  handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const { onDelete, id } = this.props
    event.preventDefault()
    event.stopPropagation()
    onDelete(id)
  }

  handleEditModeOn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({ isEditing: true })
  }

  handleEdit = (todo: ToDo) => {
    this.props.onEdit(todo)
    this.setState({ isEditing: false })
  }

  renderTitle() {
    const { id, completed, text, starred, createdAt } = this.props
    const { isEditing } = this.state
    const todo: ToDo = {
      text,
      id,
      completed,
      starred,
      createdAt,
    }

    return isEditing ? (
      <TitleEdit todo={todo} onEdit={this.handleEdit} />
    ) : (
      <ListItemText
        inset
        primary={text}
        classes={{
          primary: completed
            ? styles.textCompleted
            : starred
            ? styles.textStarred
            : styles.text,
        }}
      />
    )
  }

  render() {
    const { completed, text, starred } = this.props

    return (
      <li className={styles.todo}>
        <ListItem button onClick={this.handleToggle} selected={starred} divider>
          <Checkbox
            checked={completed}
            checkedIcon={<CheckCircleIcon color="primary" />}
            disableRipple
            icon={<CheckCircleOutlineIcon />}
            inputProps={{ 'aria-label': t('Complete item') }}
            tabIndex={-1}
          />

          <Tooltip arrow title={t('Highlight')} TransitionComponent={Zoom}>
            <IconButton
              aria-label={t('Highlight {itemName}', { itemName: text })}
              size="small"
              color={starred ? 'primary' : 'default'}
              onClick={this.handleStarred}
            >
              <StarIcon
                fontSize="small"
                className={starred ? styles.starred : undefined}
              />
            </IconButton>
          </Tooltip>

          {this.renderTitle()}

          <Tooltip arrow title={t('Edit')} TransitionComponent={Zoom}>
            <IconButton
              aria-label={t('Edit {itemName}', { itemName: text })}
              classes={{ root: styles.actionButton }}
              color="primary"
              onClick={this.handleEditModeOn}
              size="small"
            >
              <CreateIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip arrow title={t('Delete')} TransitionComponent={Zoom}>
            <IconButton
              classes={{ root: styles.actionButton }}
              aria-label={t('Delete {itemName}', { itemName: text })}
              size="small"
              color="secondary"
              onClick={this.handleDelete}
            >
              <BackspaceIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ListItem>
      </li>
    )
  }
}
