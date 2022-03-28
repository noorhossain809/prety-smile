import React from 'react';
import img from '../../../images/images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import doctor1 from '../../../images/doctor2-removebg-preview.png'
import doctor2 from '../../../images/doctor3-removebg-preview.png'
import doctor3 from '../../../images/doctors.png'

const Doctor = ({doctor}) => {
    console.log(doctor)
    return (
        <div className="col-md-4 text-center">
            
            {/* { doctor.image ?
               <img src={`data:image/jpeg;base64,${doctor.image.img}`} width="300px" />
               :
                <img className="img-fluid mb-3" src={`http://localhost:5000/${doctor.image}`} alt="" width="200px"/>
                }
            <h4>{doctor.name}</h4> */}
            
            <p className="text-secondary"><FontAwesomeIcon  className="text-primary" icon={faPhoneSquare}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;