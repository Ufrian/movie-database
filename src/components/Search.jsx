import IMAGES from '../images/Images'

const Search = ({ handleChange, search}) => {
  return (
    <div className="search-container">
      <form className="searchbox">
        <input type="text" placeholder="Search for a movie..." onChange={handleChange} onKeyDown={search} />
        <button onClick={search}><img src={IMAGES.buttonImg}/></button>
      </form>
    </div>
  )
}

export default Search