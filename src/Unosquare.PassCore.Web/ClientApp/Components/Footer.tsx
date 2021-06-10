import Grid from '@material-ui/core/Grid/Grid';
import * as React from 'react';
import mitLogo from '../assets/images/License_icon-mit.svg.png';
import uslogo from '../assets/images/logo.png';
import osiLogo from '../assets/images/osi.png';
import passcoreLogo from '../assets/images/passcore-logo.png';

export const Footer: React.FunctionComponent<any> = () => (
    <div
        style={{
            marginTop: '10px',
            width: '650px',
        }}
    >

        <Grid alignItems="center" container={true} direction="column" justify="space-evenly">
		    <img src={uslogo} style={{ maxWidth: '600px' }} />
        </Grid>

    </div>
);
