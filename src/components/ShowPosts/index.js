import React from 'react';
import './style.css';

function Header({ post }) {
	return (
		<div className='avatar-name-date'>
			<img className='avatar' src={post.author.avatar} alt='avatar' />
			<div className='name-date'>
				<span className='name'>{post.author.name}</span>
				<span className='date'>{post.date}</span>
			</div>
		</div>
	);
}

function Comments({ comments }) {
	return (
		<div className='comment-container'>
			{comments.map((comment) => {
				return (
					<div className='comment'>
						<img className='avatar' src={comment.author.avatar} alt='avatar' />
            <p><span>{comment.author.name}</span>{comment.content}</p>
					</div>
				);
			})}
		</div>
	);
}

function ShowPost({ post }) {
	console.log(post.author);

	return (
		<div className='post-container'>
			<Header post={post} />
			<p>{post.content}</p>
			<Comments comments={post.comments} />
		</div>
	);
}

export default ShowPost;
