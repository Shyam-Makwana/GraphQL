import React, { useState } from 'react';
import axios from 'axios';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import MUISwitch from './MUISwitch';
import LoadingButton from '@mui/lab/LoadingButton';
import { PlayCircleOutline } from '@mui/icons-material';

const Editor = () => {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('light');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEditorChange = (value, event) => {
    setQuery(value);
  };

  const toggleTheme = (event) => {
    setTheme(event.target.checked ? 'vs-dark' : 'light');
  };

  const executeQuery = async () => {
    setLoading(true);
    try {
      const result = await axios.post(process.env.REACT_APP_BASE_API_URL, {
        query: query,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse("Error: Invalid Query");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid item xs={12} md={5} >
        <Paper elevation={3} sx={{ p: 2, minHeight: '50vh', display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" gutterBottom>
            Query Editor
          </Typography>
          <MonacoEditor
            height="50vh"
            theme={theme}
            defaultLanguage="graphql"
            defaultValue={query}
            onChange={handleEditorChange}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, minHeight: '50vh', width: "100%" }}>
          <MUISwitch theme={theme} toggleTheme={toggleTheme} />
          <LoadingButton
            variant="contained"
            onClick={executeQuery}
            loadingPosition='start'
            loading={loading}
            startIcon={<PlayCircleOutline />}
            sx={{
              width: '80%', background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', borderRadius: "7px",
              '&:hover': {
                background: theme === 'light' ? 'black' : 'white', color: theme === 'light' ? 'white' : 'black',
              }
            }}
          >
            {loading ? "Executing" : "Execute"}
          </LoadingButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper elevation={3} sx={{ p: 2, minHeight: '50vh', display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6" gutterBottom>
            Response
          </Typography>
          <MonacoEditor
            height="50vh"
            theme={theme}
            defaultLanguage="json"
            value={response}
            options={{ readOnly: true }}
          />
        </Paper>
      </Grid>
    </>
  )
}

export default Editor;