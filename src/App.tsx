import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import CreditsPage from "./pages/CreditsPage"
import HelpPage from "./pages/HelpPage"
import DisclaimerPage from "./pages/DisclaimerPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chant" element={<HomePage />} />
      <Route path="/teach-me" element={<HomePage />} />
      <Route path="/learn-more" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
