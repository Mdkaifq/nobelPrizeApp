export const fetchPrizes = async () => {
  try {
    const response = await fetch('/v1/prize.json');  // Use the local proxy
    console.log('Raw Response:', response);
    const data = await response.json();
    return data.prizes || [];
  } catch (error) {
    console.error('Error fetching prizes:', error);
    return [];
  }
};
