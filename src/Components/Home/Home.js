import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import MakeAppoint from '../MakeAppoint/MakeAppoint';
import Footer from '../Shared/Footer/Footer';
import Testimonials from '../TestimonialData/Testimonials'
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppoint></MakeAppoint>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;