import React, { ChangeEvent } from 'react'
import t from 'format-message'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../_constants'
import styles from './filters.css'

const inputName = 'todos-footer-filter'

type Props = {
  activeFilter: VisibilityFilterType
  onFilter: (filterType: VisibilityFilterType) => void
}

export const Filters = ({ activeFilter, onFilter }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onFilter(event.target.value as VisibilityFilterType)

  const radioAll = <Radio inputProps={{ 'aria-label': 'Show all items' }} />
  const radioActive = (
    <Radio inputProps={{ 'aria-label': 'Show active items' }} />
  )
  const radioCompleted = (
    <Radio inputProps={{ 'aria-label': 'Show completed items' }} />
  )

  return (
    <FormControl component="fieldset" classes={{ root: styles.filters }}>
      <FormLabel component="legend">{t('Filter By:')}</FormLabel>
      <RadioGroup
        aria-label={t('Filter todos')}
        classes={{ root: styles.radioGroup }}
        name={inputName}
        onChange={handleChange}
        row
        value={activeFilter}
      >
        <FormControlLabel
          value={SHOW_ALL}
          control={radioAll}
          label={t('All')}
          labelPlacement="start"
        />
        <FormControlLabel
          value={SHOW_ACTIVE}
          control={radioActive}
          label={t('Active')}
          labelPlacement="start"
        />
        <FormControlLabel
          value={SHOW_COMPLETED}
          control={radioCompleted}
          label={t('Completed')}
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  )
}
