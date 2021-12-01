import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './common/page_not_found/PageNotFound';
import About from './service_student_user/page_dashboard/testing/About';
import Contact from './service_student_user/page_dashboard/testing/Contact';
import Home from './service_student_user/page_dashboard/testing/Home';

const App = function () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default App;
