import React, { useState, useContext } from 'react'
import { navigate } from 'gatsby'
import { TodosContext } from '../context/TodosContext'
import {
  TextField,
  Button,
  Container,
  Grid,
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
    <form noValidate autoComplete="off">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              value={title}
              onChange={updateTitle}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Description"
              value={description}
              onChange={updateDescription}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: '3vh',
        }}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={add}
          >
            <CreateIcon style={{
              marginRight: '1vh',
              fontSize: '20px',
            }} />
            Add
          </Button>
        </div>
      </Container>
    </form>
  )
}
