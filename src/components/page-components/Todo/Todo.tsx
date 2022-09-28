import { FC, FormEvent, useMemo, useState } from 'react'
import { v4 as uuid } from 'uuid'
import styles from '@styles/todo.module.css'
import formStyle from '@styles/content.module.css'
import TodoModel from './type/TodoModel'

const Todo: FC = () => {
  const [todo, setTodo] = useState<TodoModel[]>([])
  const [value, setValue] = useState('')

  const handleOnInput = (e: FormEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value)

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    setTodo([...todo, { id: uuid(), description: value, isDone: false }])
    setValue('')
  }

  const handleItemCheck = (id: string) => {
    const checkTodo = todo
      .filter((item) => item.id === id)
      .map<TodoModel>((item) => {
        return {
          id: item.id,
          description: item.description,
          isDone: !item.isDone,
        }
      })
    const newTodo = todo.filter((item) => item.id !== id)
    setTodo([...newTodo, ...checkTodo])
    return
  }

  const handleItemDelete = (id: string) => {
    const newTodo = todo.filter((item) => item.id !== id)
    setTodo(newTodo)
    return
  }

  const sortedTodo = useMemo(() => {
    const sorted = todo.sort(
      (item1, item2) => Number(item1.isDone) - Number(item2.isDone)
    )
    return sorted
  }, [todo])

  return (
    <div>
      <form
        onSubmit={(e) => handleAddTodo(e)}
        className={styles['todo-form-group']}>
        <input
          type="text"
          placeholder="Add Todo"
          className={formStyle['input-style']}
          value={value}
          onInput={handleOnInput}
        />
        <button type="submit" className={formStyle['input-style']}>
          Add
        </button>
      </form>
      <div>
        {sortedTodo.map((item) => (
          <div key={item.id} className={styles['todo-item-container']}>
            <p
              className={`${styles.item} ${
                item.isDone && `${styles['item-check']}`
              }`}>
              {item.description}
            </p>
            <div className={styles['item-form']}>
              <input
                type="checkbox"
                onChange={() => handleItemCheck(item.id)}
              />
              <button onClick={() => handleItemDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
