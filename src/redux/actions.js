import axios from 'axios';

export const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://your-api-url/api/random_greeting');
    dispatch({
      type: FETCH_RANDOM_GREETING,
      payload: response.data.greeting,
    });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
