import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt="wait" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard since the 1500s.
            </p>
        </div>
    );
};

export default ServiceDetail;