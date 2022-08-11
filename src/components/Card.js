import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function BasicCard({ children }) {
  return (
    <Card sx={{ minWidth: '60%' }}>
      <Typography sx={{ marginTop: '2%' }}>
        <h2>Product Type?</h2>
      </Typography>
      <CardContent sx={{ minWidth: '90%' }}>{children}</CardContent>
    </Card>
  )
}
