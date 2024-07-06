import { useEffect, useState } from 'react';
import axios from 'axios';


const usePass = () => {
  const [Pass, setPass] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Pass');
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