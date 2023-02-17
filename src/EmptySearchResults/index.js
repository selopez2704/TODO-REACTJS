import './EmptySearchResults.css'
import React from 'react'


function EmptySearchResults(props){
    return(
        <div className='NoMatches-grandParent-Container'>
            <div className='NoMatches-Container'>
                <div className='NoMatches-Icon'>
                    <i className="fa-solid fa-magnifying-glass fa-8x"></i>
                </div>
                <p className='NoMatches-Text'>Sorry We couldn't find any marches for "{props.searchValue}"</p>
            </div>
        </div>
    )
}

export{EmptySearchResults}