import axios from "axios";


export default axios.create({
    baseURL: 'https://delta-intern.us-east-2.elasticbeanstalk.com',
    headers:{
        "Content-Type": "application/json"
    }
});