import React, { createContext, useCallback , useState, useContext} from 'react';
import api from '../../services/api';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [data, setData] = useState(()=>{
    const token = localStorage.getItem('@Shipping:token');
    const user = localStorage.getItem('@Shipping:user');

    if(token && user){
      return {
        token,
        user: JSON.parse(user)
      }
    }
    return {}
  });

  const signIn = useCallback(async ({email, password}) => {

    const response = await api.post('sessions',{
      email,
      password
    });

    const {token, user} = response.data;

    localStorage.setItem('@Shipping:token', token);
    localStorage.setItem('@Shipping:user', JSON.stringify(user));
    
    setData({token , user})
  },[]);

  
  const signOut = useCallback(async () => {
    localStorage.removeItem('@Shipping:token');
    localStorage.removeItem('@Shipping:user');

    setData({})
  },[]);




  return (
    <AuthContext.Provider value={{user: data.user,signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  
  if(!context){
    throw new Error('UseAuth deve ser utilizado com o AuthProvider')
  }

  return context;
}

export { AuthProvider, useAuth };