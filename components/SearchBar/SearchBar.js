import styles from './SearchBar.module.css';
import { createRef, useEffect, useState } from 'react';

function SearchBar(props) {
  let searchBarContainer = createRef();
  let searchBarContainerForProperAnimating = createRef();
  let searchBar = createRef();
  let [search, setSearch] = useState('');
  useEffect(() => {
    if (props.display === 'none') {
      hideSearchBar();
    } else {
      showSearchBar();
    }
  }, [props.display]);

  function showSearchBar() {
    if (searchBarContainer.current !== null) {
      searchBarContainer.current.style.display = 'block';
    }
    setTimeout(() => {
      if (searchBarContainerForProperAnimating.current !== null) {
        searchBarContainerForProperAnimating.current.style.width = '100%';
        searchBar.current && searchBar.current.focus();
      }
    }, 100)



  }
  function hideSearchBar() {
    if (searchBarContainerForProperAnimating.current !== null) {
      searchBarContainerForProperAnimating.current.style.width = '0%';
    }
    setTimeout(() => {
      if (searchBarContainer.current !== null) {
        searchBarContainer.current.style.display = 'none';
      }
    }, 300)
  }
  return (
    <div onBlur={() => props.hideSearchBar('none')} ref={searchBarContainer} className={styles.searchBarContainer}>
      <div ref={searchBarContainerForProperAnimating} className={styles.searchBarContainerForProperAnimating}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} ref={searchBar} className={styles.searchBar} type="text" placeholder="Search..." />
        <div onClick={() => props.hideSearchBar('none')} className={styles.searchBarX}>
          <div className={styles.searchBarXTopBar}></div>
          <div className={styles.searchBarXBottomBar}></div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;