import React from 'react';
import { UserData } from '../../utils/types/User';
import Post from '../Post/Post';


interface UserJobsDetailsProps {
    userData: UserData
}


const UserJobsDetails = (props: UserJobsDetailsProps) => {
    return (
        <div style={{padding:20}}>
            {props.userData?.posts?.map((item, index) => {
                return <Post key={index} title={item.title} description={item.description} createdAt={item.createdAt}/>;
            })}
        </div>
    );
};

export default UserJobsDetails;
