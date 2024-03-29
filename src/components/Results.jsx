import Result from './Result'

const Results = ({ results, openPopup }) => {

  if (!results) {
    return (
      <section className='not-found'>
        <h1>MOVIE NOT FOUND</h1>
      </section>
    )
  }

  return (
    <section className="results" >
      {results ? results.map(result => 
        <Result key={ result.imdbID } result={result} openPopup={ openPopup }/>
      ) : false}
    </section>
  )
}

export default Results