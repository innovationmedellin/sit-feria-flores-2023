import PropTypes from "prop-types";
import axiosClient from '../../config';

export const postAnswer = async ({ data }) => {
    console.log("data en Answer data: ",data)
    try{
        const response = await axiosClient.post('/survey-answer',{data});
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Error sending the answer. Try again later');
    };
};

postAnswer.propTypes = {
    data: PropTypes.object.isRequired,
}


export const getSurvey = async (path) => {
    console.log("path",path)
    try{
        const response = await axiosClient(path);
        return response.data;
    } catch (error){
        console.log(error);
        throw new Error('Error getting the survey. Try again later');
    };
};

getSurvey.propTypes = {
    url: PropTypes.string.isRequired,
}

export const mapSections = (sections, location) => {
    const sectionsArray = sections.map((section) => (
        { 
            answer:[],
            section_id: section.id,
            section_name: section.title,
        }
    ));
    return sectionsArray
}

mapSections.propTypes = {
    sections: PropTypes.array
}

