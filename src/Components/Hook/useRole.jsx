import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'

const useRole = () => {
  const [role, setRole] = useState(null)
  const { user, loading} = useContext(AuthContext)
  const [roleLoading, setRoleLoading] = useState(true)

    useEffect(() => {
      if (!user?.email || loading) return
    const fetchRole = async () => {
      try {
          const res = await axios.get(
            `http://localhost:5000/users/role/${user?.email}`
          )
          console.log(res.data.role);

        setRole(res.data.role)
      } catch (error) {
        console.error('role fetch error', error)
      } finally {
        setRoleLoading(false)
      }
      }
      fetchRole()
  }, [user,loading])

return { role, roleLoading }
}

export default useRole
