import React, {
  createRef,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  PureComponent,
} from 'react'
import t from 'format-message'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import AddIcon from '@material-ui/icons/Add'
import styles from './index.css'

type Props = {
  name?: string
  onAdd: (name: string) => void
}

type State = {
  name: string
}

export class AddTodo extends PureComponent<Props, State> {
  state = {
    name: '',
  }

  input = createRef<HTMLInputElement>()

  handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLElement>
  ) => {
    const { onAdd } = this.props
    const { name } = this.state

    event.preventDefault()
    if (!name.trim()) return
    onAdd(name)
    this.setState({ name: '' }, () => {
      const { current } = this.input
      if (current) {
        current.focus()
        current.value = '' // eslint-disable-line immutable/no-mutation
      }
    })
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name } = this.props

    return (
      <header>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            id="add-todo-input"
            inputRef={this.input}
            label={t('Create item')}
            margin="normal"
            onChange={this.handleChange}
            placeholder={t('What needs to be done?')}
            value={name}
          />
          <Tooltip
            aria-label={t('Create item')}
            arrow
            placement="top"
            title={t('Add')}
            TransitionComponent={Zoom}
          >
            <Fab
              size="small"
              aria-label={t('Add')}
              color="primary"
              onClick={this.handleSubmit}
              classes={{ root: styles.addButton }}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </form>
      </header>
    )
  }
}
