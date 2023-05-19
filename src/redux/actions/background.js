import axios from 'axios';

export const setBackground = background => ({
  type: 'SET_BACKGROUND',
  background
});

export const fetchBackground = () => dispatch => {
  axios.get('http://localhost:8000/admin/backgrounds')
    .then(response => {
      dispatch(setBackground(response.data.selectedBackground));
    })
    .catch(error => {
      console.error('Error fetching background:', error);
    });
};
