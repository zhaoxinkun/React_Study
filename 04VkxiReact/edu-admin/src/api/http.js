import request from "@/api/request.js";

const http={
    get(url,params){
        return request.get(url,params).then(res=>res.data);
    },
    put(url,params){
        return request.put(url,params).then(res=>res.data);
    },
    delete(url,params){
        return request.delete(url,params).then(res=>res.data);
    }
}
export default http