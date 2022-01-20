import { useSession } from "next-auth/client";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null
})

export function AuthContextProvider({ children }) {
  const [session, loading] = useSession()
  console.log(session);
  const [user, setUser] = useState(session)

  useEffect(() => {
    setUser(session)
  }, [session])

  const context = {
    user
  }
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext