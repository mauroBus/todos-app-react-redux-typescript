import React from 'react'
import { TodosPage } from './pages/todos'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from './app.css'

export default function App() {
  return (
    <>
      <CssBaseline />

      <section className={styles.app}>
        <header>
          <h1 className={styles.title}>React - Redux - TypeScript Todos App</h1>
        </header>
        <TodosPage />
      </section>
    </>
  )
}
