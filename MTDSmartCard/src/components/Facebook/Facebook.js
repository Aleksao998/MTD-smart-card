import React, {Component} from "react"
import FacebookLogin from 'react-facebook-login';

export default class LoginFacebook extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth:false,
            name:"",
            picture:"",
        }
    }
    componentClicked = () => {
        console.log("facebook btn click!")
    }

    responseFacebook= (response) => {
        console.log(response);
    }
    render(){
        let facebookData;
        this.state.auth ? 
            facebookData=(
                <div>
                    HI!
                </div>
            ) :
            facebookData=(
                <FacebookLogin
                appId="2144181615728633"
                autoLoad={true}
                fields="name,picture,email,location"
                scope="public_profile,user_birthday"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
            
        return(
            <>
                { facebookData  }
            </>
        );
    }
}