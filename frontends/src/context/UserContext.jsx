import React, { createContext } from 'react'


export const UserDataContext = createContext()


function UserContext({children}) {
 

 const user = 'sharthak'

  return (
    <div>

      <UserDataContext.Provider value = {user}>
        {children}
      </UserDataContext.Provider>

    
    </div>
  )
}

export default UserContext