import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import { connect } from "react-redux"
import { setUserProfile } from "../../../redux/profile-reducer"

//https://social-network.samuraijs.com/api/1.0/profile/1740
class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${ 1740 }` )
            .then( res => {
                this.props.setUserProfile( res.data )
            } )
    }

    render() {
        return (
            <Profile { ...this.props } />
        )
    }
}

const mapStateProps = (state) => {
    return {
        profile: state.profile.profile
    }
}
const mapDispatchToProps = {
    setUserProfile
}
export default connect( mapStateProps, mapDispatchToProps )( ProfileContainer )