import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function BasicCard({ children, name }) {
  return (
    <>
      <Card
        sx={{
          minWidth: '60%',
          marginBottom: '2%',
          backgroundColor: 'lightgray',
        }}
      >
        <Typography variant='h4' component='div' sx={{ marginTop: '2%' }}>
          {name}
        </Typography>
        <CardContent sx={{ minWidth: '90%' }}>{children}</CardContent>
      </Card>
    </>
  )
}
