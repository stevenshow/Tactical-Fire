import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const useFakeMutation = () => {
  return useCallback(
    (product) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (product.name?.trim() === "") {
            reject(
              new Error("Error while saving product: quantity can't be empty.")
            );
          } else {
            resolve({ ...product, quantity: product?.quantity });
          }
        }, 200)
      ),
    []
  );
};

const rows = [
  { id: 1, name: "North Face", size: 12, quantity: 2 },
  { id: 2, name: "Columbia", size: 11, quantity: 2 },
  { id: 3, name: "Trailhead", size: 10, quantity: 2 },
  { id: 4, name: "Brooks", size: 10, quantity: 2 },
  { id: 5, name: "Salomon", size: 14, quantity: 2 },
  { id: 6, name: "Merrell", size: 15, quantity: 2 },
  { id: 7, name: "Keen", size: 12, quantity: 2 },
  { id: 8, name: "Oboz", size: 13, quantity: 2 },
  { id: 9, name: "Altra", size: 11, quantity: 2 },
];
const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    hide: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "name",
    headerName: "NAME",
    flex: 2,
  },
  {
    field: "size",
    headerName: "SIZE",
    flex: 1,
  },
  {
    field: "quantity",
    headerName: "QUANTITY",
    type: "number",
    editable: true,
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

const FilteredTabled = ({ data }) => {
  const mutateRow = useFakeMutation();
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = useCallback(
    async (newRow) => {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      console.log({ response });
      setSnackbar({
        children: `Quantity successfully updated to ${response.quantity}`,
        severity: "success",
      });
      return response;
    },
    [mutateRow]
  );

  const handleProcessRowUpdateError = useCallback((error) => {
    setSnackbar({ children: error.message, severity: "error" });
  }, []);

  return (
    <>
      <Box
        sx={{
          height: 400,
          width: 1,
          backgroundColor: "white",
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
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
        />
      </Box>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </>
  );
};

export default FilteredTabled;
