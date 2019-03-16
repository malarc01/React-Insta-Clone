import React from 'react'
import Comment from './Comment.js'
{/**/}
 {/*this.state.pass*/}
{/* addNewComment = (event,indexNumber) =>{console.log('add new comment invoked')} */}

class CommentSection extends React.Component{
  constructor(gagdsa){
    super(gagdsa);
    this.state = {
      pass:gagdsa.commentinfo
    }
  }


render(){
  return(
    <div>
    <p>Start of CommentSection Component & rendered.</p>
    <Comment data={this.props.commentinfo}  />
    </div>
  )
  }


}{/* End of Class extends.*/}

{/*function CommentSection(props){
  console.log(props)
  return(
    <div className="comment-section">

     <div className="comment-info">
       <h4>CommentSection Starts Here!</h4>
       {props.commentinfo.map(object=>(
         <div>
         <h3>username: {object.username}</h3>
         <h3>{object.text}</h3>
         </div>
       ))}
       <Comment c={props.commentinfo} />




     </div>

   </div>
  )

}
*/}



export default CommentSection
