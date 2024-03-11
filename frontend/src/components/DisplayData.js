import { Box, Grid, Typography, Paper, Alert } from '@mui/material';
import { exampleQueries, dummyData } from '../data/data';

const DisplayData = () => {
  return (
    <>
      <Grid item xs={12}>
        <Alert severity="info">
          <strong>Please note:</strong> When executing a query for the first time, it may take around 1 minute to receive data due to the backend deployed on a free instance. All the subsequent queries will be processed faster!
        </Alert>
      </Grid>
      <Grid item xs={12} md={6} mb={3}>
        <Paper elevation={3} sx={{ p: 2, width: '90%' }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" >
              Data
            </Typography>
          </Box>
          <Typography variant="body1" component="div" sx={{ '& pre': { whiteSpace: 'pre-wrap', wordWrap: 'break-word' } }}>
            <pre>{dummyData}</pre>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} mb={3}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" >
              Example Queries
            </Typography>
          </Box>
          <Typography variant="body1" component="div" sx={{ '& pre': { whiteSpace: 'pre-wrap', wordWrap: 'break-word' } }}>
            <pre>{exampleQueries}</pre>
          </Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default DisplayData;