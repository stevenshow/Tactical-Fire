import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SimpleAccordion({ children, name }) {
  return (
    <div>
      {children.map((table, index) => {
        return (
          <Accordion mt={2} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h6'>{table.props.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>{table}</AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
