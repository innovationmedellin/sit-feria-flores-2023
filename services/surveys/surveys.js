import { axiosClient } from "../../config";


export const surveys = async ({ path }) => {
    try {
        const res = await axiosClient(path);
        return res.data;
    } catch (error){
        console.log(error);
    }
}
