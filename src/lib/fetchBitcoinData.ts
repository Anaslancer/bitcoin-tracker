import axios from 'axios';

export interface BitcoinData {
  [date: string]: number;
}

export const fetchBitcoinData = async (): Promise<BitcoinData | null> => {
  try {
    const response = await axios.get(
      'https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD'
    );
    return response.data.bpi;
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
    return null;
  }
};