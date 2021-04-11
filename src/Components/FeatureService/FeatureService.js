import React from 'react';
import featured from '../images/featured.png'


const FeatureService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt="wait"></img>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care<br/> on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;