import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.modules.css'

const Cards = (props) => {
    console.log(props);
    
    return (
        <div className={styles.container}>
             <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>\
                        <Typography variant='h5'>Real Data</Typography>
                        
                    </CardContent>
                </Grid>
             </Grid>
        </div>
    )
}

export default Cards;