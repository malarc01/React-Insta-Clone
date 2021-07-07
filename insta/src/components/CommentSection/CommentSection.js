import React from 'react'
import Comment from './Comment.js'
{/**/}
 {/*this.state.pass*/}
{/* addNewComment = (event,indexNumber) =>{console.log('add new comment invoked')} */}

class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pass:props.commentinfo
    }
  }
addNewComment = (e,i) =>{
  console.log('HEY  has been invoked' )
  e.preventDefault()
    const newComment = {
      id: i,
      id: Date.now(),

    };
    this.setState({
      pass: [...this.state.pass, newComment]
    });
  console.log(...this.state.pass )}

render(){
  console.log(this.gagdsa);
  console.log(this.state);
  return(
    <div>
    <p>Start of CommentSection Component & rendered.</p>
    <Comment

    addComment2={this.addNewComment}
    almostthere={this.props.nextlevel}
    data={this.props.commentinfo}
    test={this.props}
    typi={this.props.typefx}

    />

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
