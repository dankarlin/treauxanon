import Header from './components/Header'
import Hero from './components/Hero'
import Episodes from './components/Episodes'
import About from './components/About'
import Footer from './components/Footer'
import ConspiracyAlert from './components/ConspiracyAlert'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ConspiracyAlert />
      <Episodes />
      <About />
      <Footer />
    </div>
  )
}

export default App