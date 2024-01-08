const Popup = ({ movie, closePopup }) => {
  return (
    <div className="card" >
      <div className="card-thumbnail">
        <img src={ movie.Poster } />
      </div>
      <div className="card-body">
          <button className="close-btn" onClick={closePopup}>X</button>
          <span className="card-title">{ movie.Title }</span>
          <p>
            <span>{ movie.Year }</span>
            <span>{ movie.Runtime }</span>
            <span>{ movie.Genre }</span>
          </p>
          <p className="rating">
            ⭐ { movie.imdbRating }
          </p>
          <p className="card-description">
            { movie.Plot }
          </p>
          <i className="card-director">Directed by { movie.Director } </i>
      </div>
    </div>
  )
}

export default Popup