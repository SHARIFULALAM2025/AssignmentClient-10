import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import { toast, ToastContainer } from 'react-toastify'
const AllUser = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios
      .get('https://assignment-10-eosin.vercel.app/userData')
      .then((result) => {
        setUser(result.data)
      })
  }, [])

  const paginationModel = { page: 0, pageSize: 5 }
  const handelDelete = (id) => {
    axios
      .delete(`https://assignment-10-eosin.vercel.app/delete-user/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          const filterUser = user.filter((item) => item._id !== id)
          setUser(filterUser)
          toast.success('user delete successfully')
        }
      })

    console.log(id)
  }
  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 250,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <img
          src={params.value}
          alt=""
          className="rounded-full w-10 h-10 mx-auto "
        />
      ),
    },
    { field: 'role', headerName: 'Role', width: 250 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => (
        <IconButton
          onClick={() => handelDelete(params.row._id)}
          aria-label="delete"
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ]
  return (
    <div>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={user}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default AllUser
