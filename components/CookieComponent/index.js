import React from 'react';

import { Container, Paragraph, Button } from './styles';

const CookieComponent = ({ setSessionStorage, preloader }) => (
  <Container style={preloader ? { opacity: 0 } : {}}>
    <Paragraph>
      Our website uses cookies to personalise content and to analyse our traffic
      which may also result in profiling. You may review our privacy policy{' '}
      <a
        style={{ textDecoration: 'underline' }}
        href="http://fulcrum.rocks/privacy-policy/index.html"
      >
        here.
      </a>
    </Paragraph>
    <Button onClick={setSessionStorage}>Confirm</Button>
  </Container>
);

export default CookieComponent;
