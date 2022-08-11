import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const FilteredTabled = ({ data }) => {
  const rows = [
    { id: 1, name: 'Gourav', age: 12 },
    { id: 2, name: 'Geek', age: 43 },
    { id: 3, name: 'Pranav', age: 41 },
    { id: 4, name: 'Abhay', age: 34 },
    { id: 5, name: 'Pranav', age: 73 },
    { id: 6, name: 'Disha', age: 61 },
    { id: 7, name: 'Raghav', age: 72 },
    { id: 8, name: 'Amit', age: 24 },
    { id: 9, name: 'Anuj', age: 48 },
  ]
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      // width: 170,
    },
    {
      field: 'name',
      headerName: 'NAME',
      // width: 170,
    },
    {
      field: 'age',
      headerName: 'AGE',
      // width: 170,
    },
  ]

  // Otherwise filter will be applied on fields such as the hidden column id
  // const columnss = React.useMemo(
  //   () => columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
  //   [columns]
  // )

  return (
    <Box
      sx={{
        height: 400,
        width: 1,
        backgroundColor: 'white',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100 },
          },
        }}
      />
    </Box>
  )
}

export default FilteredTabled
