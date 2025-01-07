import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}></Route>
      {/* we can use path="" instead of index its all are same but the home page refelcts "/" so we dont 
      need to mention it twice thats we use index. if you want know more you can ask chatgpt just copy and past it...
      */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
