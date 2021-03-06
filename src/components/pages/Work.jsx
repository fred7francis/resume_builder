import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setCurrent } from '../../actions/resumeActions';

import { useParams } from 'react-router-dom';

import Resume from "./Resume"
import Loader from '../layout/Loader';
import NotFound from './NotFound';

const Work = ({ resume: { current, loading }, setCurrent }) => {

    const params = useParams();

    useEffect(() => {
        setCurrent(params.id)
    }, [params, setCurrent]);


    if (loading || current === null) {
        return <Loader />;
    }

    if (current === "NOT_FOUND") {
        return <NotFound />;
    }

    if (params.id === current.id)
        return <Resume resume={current} />
    else
        return <Loader />;
}

const mapStateToProps = state => ({
    resume: state.resume
});

export default connect(mapStateToProps, { setCurrent })(Work);

