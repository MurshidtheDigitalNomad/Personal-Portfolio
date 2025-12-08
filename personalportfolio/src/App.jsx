import './App.css'
import { TourProvider } from '@reactour/tour';
import Display from './Components/Layout/Layout.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  return (
    <>
    <TourProvider
        steps={[
          {
            selector: ".tour-about",
            content: "Start here to learn about me!",
          },
          {
            selector: ".tour-projects",
            content: "These are my brewed projects-the bestsellers! New variants coming soon!",
          },
          {
            selector: ".tour-experience",
            content: "My journey and experiences over the years!",
          },
          {
            selector: ".tour-skills",
            content: "Explore my tech skills, more coming soon!",
          }
        ]}
        padding={10}
        styles={{
          popover: (base) => ({
            ...base,
            background: 'linear-gradient(135deg, #e3c7a0 0%, #e2a165 100%)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 12px 40px rgba(74, 38, 19, 0.4), 0 0 60px rgba(218, 121, 56, 0.3)',
            border: '3px solid rgba(132, 76, 60, 0.4)',
            minWidth: '320px',
            fontFamily: 'Poppins, sans-serif',
          }),
          maskArea: (base) => ({ ...base, rx: 20 }),
          badge: (base) => ({
            ...base,
            background: 'linear-gradient(135deg, #966a2a 0%, #844c3c 100%)',
            color: '#e3c7a0',
          }),
          close: (base) => ({
            ...base,
            background: 'linear-gradient(135deg, #844c3c 0%, #6d3f32 100%)',
            color: '#e3c7a0',
          }),
        }}
      >
        <Navbar />
        <Display />
      </TourProvider>
    </>
  )
}

export default App