import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Selection from './pages/Selection';
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Selection />} />
      <Route path="/aldwin" element={<Home />} />
      <Route path="/aldwin/projects/:slug" />
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
