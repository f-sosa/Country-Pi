import axios from "axios";

const postActivity = async (body) => {

    try {
        const endpoint = 'http://localhost:3001/activities';
        const result = await axios.post(endpoint, body);
        return result;
      } catch (error) {

        console.error(error);
      }

}

export default postActivity;