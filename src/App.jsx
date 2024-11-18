import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"></Route>
      <Route path="/aldwin" element={<Home />}></Route>
      <Route path="/projects/:slug"></Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
