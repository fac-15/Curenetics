import React from 'react';
import './results.css';

const Results = (props) =>  {
  if(props){
    const result = props.results.results;
    console.log(result);
}
  return
  (
  if(results) {
<div><h3>Results</h3><p>{result.Gender}</p></div>
}
    );

}

export default Results;
