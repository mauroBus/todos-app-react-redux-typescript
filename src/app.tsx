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
          <h1 className={styles.title} translate="yes">
            Todos App
            <br />
            React - Redux - TypeScript
          </h1>
        </header>
        <TodosPage />
      </section>
    </>
  )
}
