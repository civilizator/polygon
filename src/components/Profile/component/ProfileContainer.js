import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import { connect } from "react-redux"
import { setUserProfile } from "../../../redux/profile-reducer"
// import { withRouter } from "react-router-dom"

//https://social-network.samuraijs.com/api/1.0/profile/1740
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 1740

        axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${ userId }` )
            .then( res => {
                this.props.setUserProfile( res.data )
            } )
    }

    render() {
        return (
            <Profile/>
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

// const LocationURL = withRouter(ProfileContainer)

export default connect( mapStateProps, mapDispatchToProps )( ProfileContainer )