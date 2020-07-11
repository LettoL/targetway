import React from 'react';
import { LinearProgress } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'

export const GlobalTargetItem = props => {

  const {title, percent} = props

  return (
    <>
      <span>{title}</span>
      <br/>
      <BorderLinearProgress variant="determinate" value={percent} />
    </>
  )
}

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);
