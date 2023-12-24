import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://management-server-xi.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;