import withRoot from './modules/withRoot'
// --- Post bootstrap -----
import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Markdown, Typography } from './modules/components'
import { AppAppBar,  AppFooter, privacy } from './modules/views'

function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy)
