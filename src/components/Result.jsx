const Result = ({ result, openPopup }) => {
  return (
    <div className="result" onClick={ (e) => openPopup(result.imdbID)} >
      <img src={ result.Poster } />
      <h3>{ result.Title }</h3>
    </div>
  )
}

export default Result
