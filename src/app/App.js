import SendIcon from '@mui/icons-material/Send';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as Sentry from '@sentry/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { demoAllData } from '../redux/service_student_user/actions/DemoActions';
import SectionHeader from './common/section_header/SectionHeader';
import Hello from './service_student_user/Hello';

const App = function () {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const demoData = useSelector((state) => state.DemoReducers.demoData);

    React.useEffect(() => {
        dispatch(demoAllData());
    }, [dispatch]);
    return (
        <div>
            <SectionHeader />
            <Container maxWidth="sm">
                <Stack direction="column" spacing={2} align="center">
                    <Typography variant="h2" color="primary" gutterBottom>
                        {t('App Title')}
                    </Typography>
                    <Typography variant="h4" color="secondary">
                        ESJ Group!
                    </Typography>
                    <Hello />
                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        onClick={() => {
                            throw Error('Error create for logger testing!');
                        }}
                    >
                        Break the Site!
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Next- {demoData.length}
                    </Button>
                </Stack>
            </Container>
        </div>
    );
};

export default Sentry.withProfiler(App);
