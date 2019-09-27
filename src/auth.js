const axios = require('axios')

const auth = auth => {
    if(auth) {
        axios.defaults.headers["Auth"] = auth;
    }
    delete axios.defaults.headers["Auth"]
}

export default auth;