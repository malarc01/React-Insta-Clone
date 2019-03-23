import React from 'react'


{/**/}



function Comment(props){
  console.log(props);
  return(
    <div className="c-section">

     <div className="c-info">
       <p> {props.data.map(x=>
         (<div>
           {/*<p>username is: {x.username}</p>*/}
           <span>user: <strong>{x.username} </strong> says: "{x.text}"</span>
          </div>))}
          <p>add comment....below</p>

          <form onSubmit={props.addComment2}>
          <input
          type="text"
          value={props.almostthere}
          placeholder='Add a comment fool...'
          onChange={props.typi}

          />
          </form>

       </p>





     </div>

   </div>
  )

}

export default Comment
