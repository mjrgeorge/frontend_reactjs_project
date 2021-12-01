import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './common/page_not_found/PageNotFound';
import SectionFooter from './common/section_footer/SectionFooter';
import SectionHeader from './common/section_header/SectionHeader';
import PageDashboard from './service_student_user/page_dashboard/PageDashboard';

const App = function () {
    return (
        <div>
            {/* STUDENT USER HEADER */}
            <SectionHeader />
            <Routes>
                <Route path="/" element={<PageDashboard />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* STUDENT USER FOOTER */}
            <SectionFooter />
        </div>
    );
};

export default App;
