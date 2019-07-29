import React from 'react'
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
  DoneOutline,
} from '@material-ui/icons'

export default ({ id, title, description }) => {
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
          <IconButton edge="end" aria-label="todo">
            <CropDin />
          </IconButton>
          <IconButton edge="end" aria-label="done">
            <DoneOutline />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  )
}
