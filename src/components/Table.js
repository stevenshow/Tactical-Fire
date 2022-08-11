import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const FilteredTabled = ({ data }) => {
  const rows = [
    { id: 1, name: 'Gourav', size: 12, quantity: 2 },
    { id: 2, name: 'Geek', size: 43, quantity: 2 },
    { id: 3, name: 'Pranav', size: 41, quantity: 2 },
    { id: 4, name: 'Abhay', size: 34, quantity: 2 },
    { id: 5, name: 'Pranav', size: 73, quantity: 2 },
    { id: 6, name: 'Disha', size: 61, quantity: 2 },
    { id: 7, name: 'Raghav', size: 72, quantity: 2 },
    { id: 8, name: 'Amit', size: 24, quantity: 2 },
    { id: 9, name: 'Anuj', size: 48, quantity: 2 },
  ]
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      hide: true,
      // width: 170,
      flex: 1,
      // sortable: false,
    },
    {
      field: 'name',
      headerName: 'NAME',
      // width: 170,
      flex: 1,
    },
    {
      field: 'size',
      headerName: 'SIZE',
      // width: 170,
      flex: 1,
    },
    {
      field: 'quantity',
      headerName: 'QUANTITY',
      // width: 170,
      flex: 1,
      editable: true,
      type: 'number',
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
        experimentalFeatures={{ newEditingApi: true }}
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
