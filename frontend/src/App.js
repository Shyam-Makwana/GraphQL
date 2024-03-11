import { Grid, Container, Divider } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisplayData from './components/DisplayData';
import Editor from './components/Editor';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Grid container spacing={3} alignItems="flex-start">
          <Editor />
          <DisplayData />
        </Grid>
        <Divider />
        <Footer />
      </Container>
    </>
  );
}

export default App;
