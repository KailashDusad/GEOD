// import img7 from '../assets/monu5.jpg'
// import img8 from '../assets/monu6.jpg'
// import img9 from '../assets/monu4.jpg'

// const publicationData = [
//     {
//       title: 'Advancements in AI',
//       authors: 'John Doe, Jane Smith',
//       journal: 'Journal of AI Research',
//       year: 2022,
//       description: 'An in-depth look at the latest advancements in artificial intelligence.',
//       image: img7,
//     },
//     {
//       title: 'Renewable Energy Innovations',
//       authors: 'Emily Johnson, Michael Brown',
//       journal: 'Renewable Energy Journal',
//       year: 2021,
//       description: 'Exploring the latest innovations in renewable energy technologies.',
//       image: img8,
//     },
//     {
//       title: 'Quantum Computing Breakthroughs',
//       authors: 'David Wilson, Sarah Lee',
//       journal: 'Quantum Computing Journal',
//       year: 2023,
//       description: 'Recent breakthroughs in the field of quantum computing.',
//       image: img9,
//     },
//   ];
  
//   export default publicationData;
  


import { useEffect, useState } from 'react';
import axios from 'axios';


const usePublication = () => {
  const [Publication, setPublication] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/publications');
        setPublication(response.data);
        
      } catch (error) {
        console.error('Error fetching Publication data', error);
      }
    };

    fetchData();
  }, []);

  return Publication;
};

export default usePublication;

  