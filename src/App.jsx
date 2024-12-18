import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './views/Home'
import Project from './views/Project'
import LandingPage from './views/Landingpage'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              {loaded ? (
                <Routes>
                  <Route path="/projects" element={<Home />} />
                  <Route path="/projects/:id" element={<Project />} />
                </Routes>
              ) : null}
              <Footer />
            </>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App

