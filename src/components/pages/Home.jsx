import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div>
        <Link to="/create" style={{ textDecoration: "none" }}>
            <button className="mb-0 h1 font-weight-bold btn btn-info" style={{ cursor: "pointer" }}>Create Resume</button>
        </Link>
    </div>;
};

export default Home;
