import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth='lg'>
                <Typography variant='body2' color='textSecondary' align='center'>
                    {'Made with ⚛️  '}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
