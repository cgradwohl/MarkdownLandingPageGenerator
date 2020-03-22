/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

import { Heading } from 'rebass';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';


const IndexPage = () => (
  <Layout>
    <SEO title="Markdown Landing Page" />
    <Heading fontSize={[5, 6, 7]} color="secondary">Markdown Landing Page</Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
