import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'
import { TodosContext } from '../context/TodosContext'
import {
  TextField,
  Button,
} from '@material-ui/core'
import {
  Create as CreateIcon
} from '@material-ui/icons'

export default (props) => {
  const context = useContext(TodosContext)
  const { addTodo } = context

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const updateTitle = e => setTitle(e.target.value)
  const updateDescription = e => setDescription(e.target.value)
  const add = e => {
    e.preventDefault()
    addTodo({ title, description })
    navigate('/')
  }

  // TODO: user material-ui form components
  return (
    <form onSubmit={add} noValidate autoComplete="off">
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={updateTitle}
        margin="normal"
        fullWidth
      />
      <TextField
        id="description"
        label="Description"
        value={description}
        onChange={updateDescription}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" size="medium" color="primary">
        <CreateIcon style={{
          marginRight: '1vh',
          fontSize: '20px',
        }} />
        Add
      </Button>
    </form>
  )
}
