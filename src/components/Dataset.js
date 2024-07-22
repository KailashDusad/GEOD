// import img7 from '../assets/monu5.jpg'
// import img8 from '../assets/monu1.jpg'
// import img9 from '../assets/monu4.jpg'

// const Dataset = [
  // {
  //   title: 'Healthcare Data',
  //   description: 'A comprehensive dataset on patient health records and treatments.',
  //   lead: 'Dr. John Doe',
  //   image: img7,
  //   link: '/datasets/healthcare-data'
  // },
  // {
  //   title: 'Renewable Energy Data',
  //   description: 'Datasets on various renewable energy sources and their efficiency.',
  //   lead: 'Dr. Jane Smith',
  //   image: img8,
  //   link: '/datasets/renewable-energy-data'
  // },
  // {
  //   title: 'Quantum Computing Data',
  //   description: 'Data related to quantum computing experiments and simulations.',
  //   lead: 'Dr. Emily Johnson',
  //   image: img9,
  //   link: '/datasets/quantum-computing-data'
  // },
// ];

// export default Dataset;



import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataset = () => {
  const [Dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const host = window.location.hostname;
      const url = `http://${host}:5000/api/datasets`;
      try {
        const response = await axios.get(url);
        setDataset(response.data);
      } catch (error) {
        console.error('Error fetching Dataset data', error);
      }
    };

    fetchData();
  }, []);

  return Dataset;
};

export default useDataset;