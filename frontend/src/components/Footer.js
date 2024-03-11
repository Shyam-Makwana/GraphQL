import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          A playground designed by Shyam Makwana for exploring and learning GraphQL.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          It has two main goals: to make GraphQL easier to understand and to be a place where people can try things out themselves. Whether you are making your very first query or looking into complicated data setups, our interactive playground is ready to help. It shows results right away, gives examples of queries, and has a special set of fake data for you to use. This is all to help you learn better. Jump in and start learning about GraphQL, improve your skills, and see how powerful this query language can be.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer;