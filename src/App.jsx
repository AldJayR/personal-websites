import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Selection from './pages/Selection';
import Home from './pages/Home'
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Selection />} />
      <Route path="/aldwin" element={<Home />} />
      <Route path="/aldwin/projects/:slug" />
      <Route path="*" element={<NotFound />}/>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
