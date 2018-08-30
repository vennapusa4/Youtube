import React, { PureComponent } from 'react';
const Search =(props)=>{
    if (!props) {
        return <h1>loading....</h1>
    }
 return <input onChange={(e)=>props.onSearch(e.target.value)} type='text'/>

}
export default Search;