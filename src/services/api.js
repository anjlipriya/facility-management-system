export const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  };
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
  };