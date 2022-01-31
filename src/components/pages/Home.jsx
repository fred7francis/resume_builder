import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getResumes } from '../../actions/resumeActions';

import { Link } from 'react-router-dom';

import Loader from '../layout/Loader';
import Card from '../layout/Card';

const Home = ({ resume: { resumes, loading }, getResumes }) => {

    useEffect(() => {
        getResumes();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Loader />;
    }

    return <div>
        <Link to="/create" style={{ textDecoration: "none" }}>
            <Card colour={"bg-info text-light"} name={"Create Resume"}></Card>
        </Link>
        <div className='my-5 d-flex flex-wrap'>
            {!loading && resumes.length === 0 ? (
                <p className='center'>No resumes to show...</p>
            ) : (
                resumes.map((resume, id) => (<Link to={`view/${resume.id}`} key={resume.id} style={{ textDecoration: "none" }}>
                    <Card colour={"bg-light"} name={resume.personalInfo.name}></Card>
                </Link>))
            )}
        </div>
        <nav className="navbar fixed-bottom navbar-light bg-light mt-5 justify-content-center ">
            <a href="https://github.com/fred7francis/resume_builder/">GitHub Repository</a>
        </nav>
    </div>;
};

const mapStateToProps = state => ({
    resume: state.resume
});

export default connect(
    mapStateToProps,
    { getResumes }
)(Home);
