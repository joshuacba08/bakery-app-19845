import React,{ useState } from 'react';
import SearchItemList from './SearchItemList';
import './styles/SearchModal.scss';

const SearchModal = () => {

    const [query, setQuery] = useState("");
    const handleSearch = (e) =>{ 
        console.log(e.target.value);
        setQuery(e.target.value)
    }

  return (
    <section className="search-modal">

        <input 
            value={query}
            onChange={(e)=>{ handleSearch(e) }}
        />

        { query.length && <SearchItemList query={query}/> }


    </section>
  )
}

export default SearchModal