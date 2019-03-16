import React from 'react'


{/**/}



function Comment(props){
  console.log(props)
  return(
    <div className="c-section">

     <div className="c-info">
       <p> {props.data.map(x=>
         (<div>
           <p>username is: {x.username}</p>
           <p>{x.text}</p>
          </div>))}
          <p>add comment....</p>
       </p>





     </div>

   </div>
  )

}

export default Comment
