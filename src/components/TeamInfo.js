// import dakshu from '../team/dakshu.jpg'
// import jagroop from '../team/jagroop.jpg'
// import omkar from '../team/omkar.jpg'
// import parvee from '../team/parvee.png'
// import saurabh from '../team/saurabh.jpg'
// import sikha from '../team/sikha.png'
// import virat from '../team/virat.jpg'


// // import img1 from '../assets/someone1.jpg'
// // import img2 from '../assets/campus4.webp'
// // import img3 from '../assets/campus5.jpg'
// // import img4 from '../assets/campus6.jpg'
// // import img5 from '../assets/campus7.jpg'
// // import img6 from '../assets/monu1.jpg'
// // import img7 from '../assets/monu5.jpg'
// // import img8 from '../assets/monu6.jpg'
// // import img9 from '../assets/monu4.jpg'
// const TeamInfo = [
//     {
//         id: 1,
//         name: "Virat Upadhyay",
//         position: "PhD Student",
//         image: virat,
//         description: "Topographic affect of Earthquake, Engineering Seismology, Earthquake Induced Landslides"
//     },
//     {
//         id: 2,
//         name: "Omkar",
//         position: "PhD Student",
//         image: omkar,
//         description: "Seismology, Statistical Seismology, Engineering Seismology, Optimisation, Ground Motion Modelling, Ground Motion Simulation"
//     },
//     {
//         id: 3,
//         name: "Jagroop SIngh",
//         position: "Masters",
//         image: jagroop,
//         description: "Geodynamic Modeling"
//     },
//     {
//         id: 4,
//         name: "Dakshata Suresh bhamare",
//         position: "Masters",
//         image: dakshu,
//         description: "Statistical or engineering seismology"
//     },
//     {
//         id: 5,
//         name: "Saurabh Choubey",
//         position: "PhD Student",
//         image: saurabh,
//         description: "Numerical Geodynamic Modeling"
//     },
//     {
//         id: 6,
//         name: "Shikha Sharma",
//         position: "PhD Student",
//         image: sikha,
//         description: "Seismology, Earthquake Engineering Ground Motion, Seismic Hazard Analysis, Earthquake Seismology"
//     },
//     {
//         id: 7,
//         name: "Parvee",
//         position: "PhD Student",
//         image: parvee,
//         description: "Seismic Interpretation and Geodynamic Modelling"
//     },
// ]

// export default TeamInfo;



import { useEffect, useState } from 'react';
import axios from 'axios';

const useTeamInfo = () => {
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/team');
        setTeamInfo(response.data);
      } catch (error) {
        console.error('Error fetching team data', error);
      }
    };

    fetchData();
  }, []);

  return teamInfo;
};

export default useTeamInfo;
