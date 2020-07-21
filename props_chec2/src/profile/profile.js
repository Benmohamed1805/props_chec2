import React from 'react';
import propTypes from "prop-types"
const Profile = (props) => {
    return (
        <div style={props.mystyle}>
            <div>{props.children}</div>
            <h1>{props.fullname}</h1>
            <h2>{props.bio}</h2>
            <h3>{props.proffession}</h3>
            <button onClick={()=>props.myfunction(props.fullname)}>alert</button>
        </div>
    );
}
Profile.defaultProps={
    fullname:"dft"
}
Profile.propTypes={
    fullname:propTypes.string,
    bio:propTypes.string,
    proffession:propTypes.string
}
export default Profile;