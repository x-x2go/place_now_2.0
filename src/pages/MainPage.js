import React from 'react';
import Map from '../Map';
import SearchBar from '../component/SearchBar';

const MainPage = ({ match }) => {
    const category = match.params.category;
    return(
        <>
            <SearchBar />
            <Map category={category}/>
        </>
    )
}

export default MainPage;