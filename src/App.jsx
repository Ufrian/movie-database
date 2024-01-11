  import { useState, useEffect, useRef } from 'react'
  import moviesService from './services/moviedb'

  import Search from './components/Search'
  import Results from './components/Results'
  import Popup from './components/Popup'

  const App = () => {
    const [state, setState] = useState({
      inp: "",
      results: [],
      selected: {},
      isBlurred: false
    })

    const popupRef = useRef(null)

    useEffect(() => {
      let handler = (e) => {
        if(!popupRef.current.contains(e.target)) {
          closePopup()
        }
      }

      document.addEventListener("mousedown", handler)

      return () => {
        document.removeEventListener("mousedown", handler)
      }
    })

    const handleInput = (e) => {
      setState(prev => ({...prev, inp : e.target.value}))
    }

    const searchMovies = (e) => {
      if (e.key === "Enter" || e.type === "click") {
      e.preventDefault()

        moviesService
          .getMovies(state.inp)
          .then(({ data }) => {

            setState(prev => ({...prev, results: data.Search }))
          })
          .catch(err => console.log(err))
      }
    }

    const openPopup = (id) => {
      moviesService
        .getMovieById(id)
        .then(({ data }) => {
          setState(prev => ({ ...prev, selected: data, isBlurred: true}))
        })
    }

    const closePopup = () => {
      setState(prev => ({...prev, selected: {},  isBlurred: false}))
    }

    return (
      <div>
        <div className={state.isBlurred ? "blur" : ""}>
          <header>
            <h1>Movie Database</h1>
          </header>
          <main>
            <Search handleChange={ handleInput } search={ searchMovies }/>
            <Results results={ state.results } openPopup={ openPopup }/>
          </main>
        </div>
        <div className="popup-container" ref={ popupRef }>
          {state.selected.Title 
            ? <Popup movie={state.selected} closePopup={ closePopup }/> 
            : false}
        </div>
      </div>
    )
  }

  export default App
