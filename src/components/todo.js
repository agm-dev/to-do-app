import React from 'react'
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  Avatar,
  Button
} from '@material-ui/core'

export default ({ title, description }) => {
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label={title}>
              {title[0]}
            </Avatar>
          }
          title={title}
          subheader={description}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mark as done
        </Button>
      </CardActions>
    </Card>
  )
}
