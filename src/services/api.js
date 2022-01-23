import axios from 'axios';

const api = axios.create({
    baseURL: "http://worldtimeapi.org/api"
})

export default {
    allTimezone(){
        return api.get("/timezone");
    },
    timezone(zone){
        return api.get(`/timezone/${zone}`);
    }
}