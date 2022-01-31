import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import CreateResume from './CreateResume';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateResume />} />
        <Route path="/view/:id" element={<CreateResume />} />
        <Route path="/edit/:id" element={<CreateResume />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
