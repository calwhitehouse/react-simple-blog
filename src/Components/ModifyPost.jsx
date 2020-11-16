import React from "react";
const ModifyPost = (props) => {
	return (
		<>
			<form>
				<h1>Modify Post</h1>
				<input 
					defaultValue={props.title} 
					onChange={props.savePostTitleToState} 
					type="text" 
					placeholder="title" 
					size="39" 
					required
				></input>
				<br/>
				<br/>
				<textarea
					defaultValue={props.content} 
					onChange={props.savePostContentToState}
					placeholder="contents"
					name="postContent" 
					id="" 
					cols="41" 
					rows="8" 
					required
				></textarea>
				<br/>
				<br/>
				<button className="create" onClick={props.updatePost}>Update Post</button>
			</form>
		</>
	);
};
export default ModifyPost;