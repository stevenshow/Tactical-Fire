import logo from './images/logo.svg'
import './styles/App.css'
import FilteredTable from './components/Table'
import BasicCard from './components/Card'
import SimpleAccordion from './components/Accordion'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tactical Fire</h1>
        <BasicCard name='Boots'>
          <SimpleAccordion>
            <FilteredTable name='Hiking' />
            <FilteredTable name='Work' />
          </SimpleAccordion>
        </BasicCard>
        <BasicCard name='Pants'>
          <SimpleAccordion>
            <FilteredTable name='Hiking' />
            <FilteredTable name='Work' />
          </SimpleAccordion>
        </BasicCard>
      </header>
    </div>
  )
}

export default App
