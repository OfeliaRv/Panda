import axios from "axios";

var config = {
    "authority": "https://localhost:3000",
    "client_id": "PandaAPI",
    "redirect_uri": "https://localhost:3000/authentication/login-callback",
    "post_logout_redirect_uri": "https://localhost:3000/",
    "response_type": "id_token token",
    "scope": "openid PandaAPIAPI"
}

var userManager = Oidc.UserManager(config);

var login = function () {
    userManager.signinRedirect();
}

userManager.getUser().then(user =>{
    console.log("user:", user );
    if (user){
        axios.defaults.headers.common["Authorization"] = "Bearer " + user.access_token
    }
})