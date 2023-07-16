import './searchbar.css';
// eslint-disable-next-line react/prop-types
const SearchBar = ({value, handleSearchKey, formSubmit, clearSearch})=>{
    return(
      <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input type='text' onChange={handleSearchKey} placeholder='Search By Category' value={value}/>
        {value && <span onClick={clearSearch}>X</span>}

        <button>Go</button>

      </form>
       
      </div>
    )
}  

export default SearchBar;