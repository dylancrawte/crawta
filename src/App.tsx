import { Footer } from "./layout/Footer"
import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"
import { Music } from "./sections/Music"
import { Newsletter } from "./sections/Newsletter"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Music />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
