import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={
            <PrivateRoute isPrivate={false}>
              <Private />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </>
  );
}

function Public() {
  return (
    <h1>Public</h1>
  )
}

function Private() {
  return (
    <h1>Private</h1>
  )
}

function Login() {
  return (
    <h1>Login</h1>
  )
}

function PrivateRoute({ children,isPrivate }) {

  // const auth = useAuth();
  // return auth ? children : <Navigate to="/login" />;
//   if(isPrivate){
//    return <Navigate to="/login"/>
//   }
//   else{
//     return children
//   }
// }

return isPrivate ?  children  : <Navigate to="/login"/> ;

}



// function useAuth() {
//   return false
// }

export default App;
