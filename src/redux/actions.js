import axios from 'axios';
import API_BASE_URL from '../apiConfig';

export const FETCH_RANDOM_GREETING = 'FETCH_RANDOM_GREETING';
const API_ENDPOINT = `${API_BASE_URL}/greetings/random_greeting`;


export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    dispatch({
      type: FETCH_RANDOM_GREETING,
      payload: response.data.greeting,
    });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
