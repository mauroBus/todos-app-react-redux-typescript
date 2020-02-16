import { State as TodosReducerState } from '../../src/pages/todos/_reducer'

declare global {
  type AppState = {
    todos: TodosReducerState
  }

  type StateProp<T extends keyof AppState> = AppState[T]
}

export {}
