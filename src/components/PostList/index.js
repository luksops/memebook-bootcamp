import React, { Component } from 'react';
import ShowPosts from '../ShowPosts';
import './style.css';

class PostList extends Component {
	state = {
		posts: [
			{
				id: 1,
				author: {
					name: 'Lusga',
					avatar: require('../../assets/images/profile.png'),
				},
				date: '04 Oct 2020',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien arcu, fermentum eget iaculis eleifend, porta et metus. Suspendisse nibh tortor, egestas eleifend urna non, tristique maximus dolor.?',
				comments: [
					{
						id: 1,
						author: {
							name: 'Ruba',
							avatar: require('../../assets/images/guba.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
					{
						id: 2,
						author: {
							name: 'Leo',
							avatar: require('../../assets/images/leo.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
				],
			},
			{
				id: 2,
				author: {
					name: 'Dre',
					avatar: require('../../assets/images/dre.png'),
				},
				date: '05 Oct 2020',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
				comments: [
					{
						id: 1,
						author: {
							name: 'Mirro',
							avatar: require('../../assets/images/mirro.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
				],
			},
			{
				id: 3,
				author: {
					name: 'Shaka',
					avatar: require('../../assets/images/shaka.png'),
				},
				date: '06 Oct 2020',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
				comments: [
					{
						id: 1,
						author: {
							name: 'Ruba',
							avatar: require('../../assets/images/profile.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
					{
						id: 2,
						author: {
							name: 'Shaka',
							avatar: require('../../assets/images/shaka.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
					{
						id: 3,
						author: {
							name: 'Mirro',
							avatar: require('../../assets/images/mirro.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					},
					{
						id: 4,
						author: {
							name: 'Dre',
							avatar: require('../../assets/images/dre.png'),
						},
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at.',
					}
				],
			},
		],
	};

	render() {
		return (
			<div className='post-list-container'>
				{this.state.posts.map((post, index) => {
					return <ShowPosts key={index} post={post} />;
				})}
			</div>
		);
	}
}

export default PostList;
