import React, { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { postsCancelCreatingNewPost, postsSubmitNewPost } from '../../store/actions/PostsActions';
import Divider from '@material-ui/core/Divider';
import Form from 'react-bootstrap/Form';


interface NewPostProps {
    postsCancelCreatingNewPost: () => void
    postsSubmitNewPost: any
}


const NewPost = (props: NewPostProps) => {

    const [postData, setPostData] = useState({
        title: '',
        description: '',
    });

    const handlePostDataChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, [event.target.name]: event.target.value });
    };

    const submitPost = () => {
        props.postsSubmitNewPost(postData);
    };

    return (
        <div className="d-flex flex-column">
            <div className="my-2">
                Create new job request
            </div>

            <Divider className="mb-3"/>

            <Form>
                <Form.Group controlId="title">
                    <Form.Label className="text-muted">
                        <small>Title:</small>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Title"
                        autoComplete="off"
                        onChange={handlePostDataChange}/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="text-muted">
                        <small>Description:</small>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        as="textarea"
                        placeholder="Description"
                        autoComplete="off"
                        rows={10}
                        onChange={handlePostDataChange}/>
                </Form.Group>
            </Form>

            <div className="d-flex">
                <Button variant="outline-primary" className="w-50 mr-2" onClick={submitPost}>Add New Post</Button>
                <Button variant="outline-primary" className="w-50 ml-2" onClick={props.postsCancelCreatingNewPost}>Discard
                    Post</Button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    postsCancelCreatingNewPost,
    postsSubmitNewPost,
};

export default connect(null, mapDispatchToProps)(NewPost);
