import React from 'react';

import { Button, Heading } from 'rebass';

// REDO THIS WITH MST
import { useAuth } from 'react-use-auth';

import Layout from '../components/layout';
import SEO from '../components/seo';


const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth();

  // const handleClick = () => {
  //   console.log('HOOOO', isAuthenticated);
  //   login();
  // };

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
      <p>Create an HTML landing page from Markdown.</p>
      {
        isAuthenticated()
          ? <span>Hello! {user.nickname}</span>
          : null
      }
      <Button onClick={login}>Get Started</Button>
    </Layout>
  );
};


export default IndexPage;
