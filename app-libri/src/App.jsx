import BookCard from './Components/CardBook'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>VAXCO</h1>
        <BookCard
          titulo='As cavernas de aço'
          autor='Isaac Asimov'
        />
        <BookCard
          titulo='Fred por Fred: As varias faces de min'
          autor='Fred'
        />
        <BookCard
          titulo='Who can it be now?'
          autor='insane sax solo'
        />
      </div>
    </>
  )
}

export default App
