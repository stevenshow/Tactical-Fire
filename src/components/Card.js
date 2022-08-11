import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function BasicCard({ children }) {
  return (
    <Card sx={{ minWidth: '90%' }}>
      <Typography sx={{ marginTop: '2%' }}>Title</Typography>
      <CardContent sx={{ minWidth: '90%' }}>{children}</CardContent>
    </Card>
  )
}
