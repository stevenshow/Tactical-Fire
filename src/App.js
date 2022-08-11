import logo from './images/logo.svg'
import './styles/App.css'
import FilteredTable from './components/Table'
import BasicCard from './components/Card'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <BasicCard>
          <FilteredTable />
        </BasicCard>
      </header>
    </div>
  )
}

export default App
