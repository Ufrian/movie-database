import Result from './Result'


// Not working with not finished words ex: batma throws an error.
const Results = ({ results, openPopup }) => {
  return (
    <section className="results" >
      {results ? results.map(result => 
        <Result key={ result.imdbID } result={result} openPopup={ openPopup }/>
      ) : false}
    </section>
  )
}

export default Results