import React from 'react';
import Map from '../Map';
import SearchBar from '../component/SearchBar';

const MainPage = ({ match }) => {
    const category = match.params.category;
    const location = match.path;

    return(
        <>
            <SearchBar location={location}/>
            <Map category={category} />
        </>
    )
}

export default MainPage;