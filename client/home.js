import React from 'react';
import NewBlog from './newBlog';
import PublishedBlogs from './publishedBlogs';
import EditBlogForm from './editBlogForm';


class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			blogposts: [],
			showEdit: false,
			blogToEdit: ''
		}
	}

	addBlog(title, content, tags) {
		var newBlog = {
			title: title,
			content: content,
			tags: tags
		}
		this.state.blogposts.push(newBlog);
		return this.setState({blogposts: this.state.blogposts});
	}

	removeBlogPost(blogPost) {
		var i = this.state.blogposts.indexOf(blogPost);
		if (i !== -1) {
			this.state.blogposts.splice(i, 1);
		}
		return this.setState({blogposts: this.state.blogposts});
	}

	editBlogStart(blogPost) {
		var i = this.state.blogposts.indexOf(blogPost);
		if(i !== -1) {
			this.state.showEdit = true;
			this.state.blogToEdit = blogPost;
			this.setState({ showEdit: true});
			this.setState({blogToEdit: blogPost});
		}
	}

	editBlogPost(title, content, tags) {
		var i = this.state.blogposts.indexOf(this.state.blogToEdit);
		if (i !== -1) {
			this.state.blogposts[i].title = title;
			this.state.blogposts[i].content = content;
			this.state.blogposts[i].tags = tags;
			this.state.blogToEdit = '',
			this.state.showEdit = false;
		}
		return this.setState({ blogposts: this.state.blogposts, blogToEdit: this.state.blogToEdit, showEdit: this.state.showEdit});
	}

	render() {
		if(this.state.showEdit) {
			return <div><EditBlogForm blogToEdit={this.state.blogToEdit} editBlogPost={this.editBlogPost.bind(this)} /></div>
		} else {
			return <div>
					<h1>my blog</h1>
					<NewBlog addBlog={this.addBlog.bind(this)}/>
					<PublishedBlogs 
						blogs={this.state.blogposts}
						removeBlogPost={this.removeBlogPost.bind(this)}
						editBlogStart={this.editBlogStart.bind(this)}
					/>
				</div>;
		}
	}
}

module.exports = Home;