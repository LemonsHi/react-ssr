import React, { useState } from 'react'
import { Button } from '@/components/Button'

import * as styles from './App.module.css'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p style={{ color: 'red' }}>count: {count}</p>
      <div className={styles.btnWrapper}>
        <Button
          text="Increment"
          className={styles.btn}
          onClick={() => setCount((prev) => prev + 1)}
        />
        <Button
          text="Decrement"
          className={styles.btn}
          onClick={() => setCount((prev) => prev - 1)}
        />
        <Button
          text="Reset"
          className={styles.btn}
          onClick={() => setCount(0)}
        />
      </div>
    </div>
  )
}
