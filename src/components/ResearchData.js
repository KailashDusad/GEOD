// import img7 from '../assets/monu5.jpg'
// import img8 from '../assets/monu6.jpg'
// import img9 from '../assets/monu4.jpg'

// const researchProjects = [
//     {
//       title: 'AI in Healthcare',
//       lead: 'Dr. John Doe',
//       description: 'A project exploring the applications of artificial intelligence in the healthcare industry.',
//       image: img9,
//     },
//     {
//       title: 'Renewable Energy Sources',
//       lead: 'Dr. Jane Smith',
//       description: 'Researching new and innovative renewable energy sources to combat climate change.',
//       image: img7,
//     },
//     {
//       title: 'Quantum Computing',
//       lead: 'Dr. Emily Johnson',
//       description: 'Investigating the potential of quantum computing and its future applications.',
//       image: img8,
//     },
//   ];
  
//   export default researchProjects;

import { useEffect, useState } from 'react';
import axios from 'axios';

const useReasearch = () => {
  const [Reasearch, setReasearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/research');
        setReasearch(response.data);
      } catch (error) {
        console.error('Error fetching Research data', error);
      }
    };

    fetchData();
  }, []);

  return Reasearch;
};

export default useReasearch;

  