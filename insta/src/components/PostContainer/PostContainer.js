import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import styled from 'styled-components'

const PostDiv = styled.div`
height: 10%;
width:50%;
color: yellow;
min-width:300px;
margin: auto;
`;

const Username = styled.div`
color: red;
font-weight:bold;
`;

const UserThumbnail = styled.img`
border-radius: 50%;
border:1px solid red;

`;


function PostContainer(property){
  console.log(property)
  return(
    <PostDiv>
    <div className="post-container">

     <div className="post-info">

       <h3>Instagram Post!</h3>



       <UserThumbnail src={property.stats.thumbnailUrl} alt="main-user-pic" />

       <Username><p>{property.stats.username}</p></Username>

       <p><img src={property.stats.imageUrl} alt="something to look at" /></p>
       <p>&hearts;</p>

       <button>&hearts;</button>

       <p>{property.stats.likes} likes</p>


         <CommentSection
         commentinfo={property.stats.comments}
         nextlevel={property.it}
         typefx={property.typingChangesHandler}
         />

       <p>{property.stats.timestamp}</p>


     </div>
   </div>
   </PostDiv>
  )

}

export default PostContainer
