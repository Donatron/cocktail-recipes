import axios from 'axios';

export const DATA_LOADING = 'DATA_LOADING';

export const dataLoading = () => {
  return {
    type: DATA_LOADING
  }
}