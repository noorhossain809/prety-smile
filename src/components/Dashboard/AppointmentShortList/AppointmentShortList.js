import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr className="text-secondary" scope="col">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map( (appointment, index) => 
                    <tr>
                       <td>{appointment.name}</td>
                       <td>{appointment.phone}</td>
                       <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;