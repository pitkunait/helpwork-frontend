import { combineReducers } from 'redux';

import { userReducer } from './UserReducer';
import { postsReducer } from './PostsReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
    // app: appReducer
});
