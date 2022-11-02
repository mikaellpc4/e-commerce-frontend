import { Navbar } from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import MainRoutes from "./MainRoutes"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {MainRoutes}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
