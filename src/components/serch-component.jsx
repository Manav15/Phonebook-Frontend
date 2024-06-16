const Search = ({searchValue,setSearchValue}) => {
    return(
        <div>filter shown with <span><input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} /></span></div>
    )
}

export default Search;