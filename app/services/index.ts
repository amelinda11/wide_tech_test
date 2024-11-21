import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/todos';

export const getTypeCode = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await axios.get(endpoint, options);
    return response.data; 
};