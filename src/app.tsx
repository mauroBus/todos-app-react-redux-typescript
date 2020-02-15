import React from 'react'
import { TodosModule } from './pages/todos'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from './app.css'

export default function App() {
  return (
    <>
      <CssBaseline />

      <section className={styles.app}>
        <header>
          <h1 className={styles.title}>React Redux Todos Example</h1>
        </header>
        <TodosModule />
      </section>
    </>
  )
}
