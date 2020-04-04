import React from 'react';

import {
  useStaticQuery,
  graphql,
} from 'gatsby';

import {
  useQuery,
} from 'react-apollo-hooks';

import gql from 'graphql-tag';

import {
  Button,
  Heading,
  // Box,
  Flex,
} from 'rebass';

// REDO THIS WITH MST
import { useAuth } from 'react-use-auth';

import Layout from '../components/layout';
import SEO from '../components/seo';


const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth();

  // BUILD TIME DATA !!!!!
  // __________________________________________________
  // useStaticQuery provides the ability to query with GraphQL at __build time__.
  // cannot take any parameters, bakes data into the HTML at build time :)

  /**
   * NOTE: without an apollo client there no refetch from the server :(
   * THIS DATA IS ONLY FETCHED AT __BUILD TIME__! WHICH IN THIS CASE IS WHEN
   * WE RUN `yarn start`
   */
  const data = useStaticQuery(graphql`
    query {
      mdlapi {
        hello {
          world
        }
      }
    } 
  `);


  // DATA A RUNTIME
  const liveData = useQuery(gql`
    query {
      hello {
        world
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
      <Flex flexDirection="column">
        <p>Create an HTML landing page from Markdown.</p>
        <p>FROM SERVER, AT BUILD TIME: {data.mdlapi.hello.world}</p>
        {
          liveData.loading
            ? <p>LOADING....</p>
            : <p>FROM SERVER, AT RUNTIME: {liveData.data.hello.world}</p>
        }
        {
          isAuthenticated()
            ? <span>Hello! {user.nickname}</span>
            : null
        }
        <Button onClick={login}>Get Started</Button>
      </Flex>
    </Layout>
  );
};


export default IndexPage;
