import { Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Language, Launch } from '@mui/icons-material';
import Logo from "../assests/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            sx={{
              height: 45,
              mr: 2
            }}
            alt="GraphQL Logo"
            src={Logo}
          />
        </a>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GraphQL Playground
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" href="https://github.com/Shyam-Makwana/GraphQL" target="_blank" rel="noopener noreferrer">
            <Launch sx={{ fontSize: 30 }} />
          </IconButton>

          <IconButton color="inherit" href="https://github.com/Shyam-Makwana" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ fontSize: 30 }} />
          </IconButton>

          <IconButton color="inherit" href="https://linkedin.com/in/shyammakwana" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ fontSize: 33 }} />
          </IconButton>

          <IconButton color="inherit" href="https://shyammakwana.com" target="_blank" rel="noopener noreferrer">
            <Language sx={{ fontSize: 33 }} />
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;