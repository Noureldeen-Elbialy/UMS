import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
