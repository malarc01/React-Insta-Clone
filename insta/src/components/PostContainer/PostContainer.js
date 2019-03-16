import React from 'react'
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(property){
  console.log(property)
  return(
    <div className="post-container">

     <div className="post-info">
       <h3>Instagram Post!</h3>

       <img src={property.stats.thumbnailUrl} alt="thumbnail" />

       <p><strong>{property.stats.username}</strong></p>

       <p><strong><img src={property.stats.imageUrl} alt="fullsize picture" /></strong>   </p>
       <p>&hearts; </p>

       <button>&hearts;</button>

       <p>{property.stats.likes} likes</p>


         <CommentSection commentinfo={property.stats.comments} />

       <p>{property.stats.timestamp}</p>


     </div>
   </div>
  )

}

export default PostContainer
