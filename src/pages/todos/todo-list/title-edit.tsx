import React, { PureComponent, ChangeEvent, MouseEvent } from 'react'
import t from 'format-message'
import Input from '@material-ui/core/Input'
import styles from './title-edit.css'

type Props = {
  todo: ToDo
  onEdit: (todo: ToDo) => void
}

type State = {
  newText: string
}

export class TitleEdit extends PureComponent<Props, State> {
  state = {
    newText: this.props.todo.text,
  }

  handleEdit = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ newText: event.target.value })
  }

  handleSave = () => {
    const { onEdit, todo } = this.props
    const { newText } = this.state
    onEdit({ ...todo, text: newText.trim() })
  }

  handlePreventDefault = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  render() {
    const { newText } = this.state
    return (
      <Input
        autoFocus
        classes={{ root: styles.input }}
        inputProps={{ 'aria-label': t('Edit text') }}
        onBlur={this.handleSave}
        onChange={this.handleEdit}
        onClick={this.handlePreventDefault}
        value={newText}
      />
    )
  }
}
