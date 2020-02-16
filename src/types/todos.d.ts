declare global {
  type ToDo = {
    id: number
    text: string
    completed: boolean
    starred: boolean
    createdAt: Date
  }
  type UnsavedToDo = {
    text: string
    completed: boolean
    starred: boolean
    createdAt: Date
  }

  type VisibilityFilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
}

export {}
