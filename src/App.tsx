import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Sustainability from './components/Sustainability'
import VotingSection from './components/VotingSection'
import ResultsChart from './components/ResultsChart'
import Footer from './components/Footer'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <Features />
      <HowItWorks />
      <Sustainability />
      <VotingSection />
      <ResultsChart />
      <Footer />
    </div>
  )
}

export default App
