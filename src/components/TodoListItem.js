import React, { useContext } from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Card,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  CropDin,
  Done,
} from '@material-ui/icons'
import { TodosContext } from '../context/TodosContext'

export default ({ todo }) => {
  const { id, title, description, done } = todo
  const context = useContext(TodosContext)
  const { toggleTodo } = context
  const update = () => toggleTodo(id)

  return (
    <Card key={id} style={{
      marginBottom: '2vh',
      paddingTop: '1vh',
      paddingBottom: '1vh',
    }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar aria-label={title}>
            {title[0]}
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={title}
          secondary={description && description.length ? description : null}
        />

        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>

          {!done ?
          <IconButton edge="end" aria-label="todo" onClick={update}>
            <CropDin />
          </IconButton> :
          <IconButton edge="end" aria-label="done" onClick={update}>
            <Done style={{
              color: 'green',
            }} />
          </IconButton>}

        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  )
}
