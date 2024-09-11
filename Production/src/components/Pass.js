import { useEffect, useState } from 'react';
import axios from 'axios';


const usePass = () => {
  const [Pass, setPass] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const host = window.location.hostname;
      const url = `/api/Pass`;
      try {
        const response = await axios.get(url);
        setPass(response.data);
      } catch (error) {
        console.error('Error fetching Pass Key data', error);
      }
    };

    fetchData();
  }, []);

  return Pass;
};

export default usePass;