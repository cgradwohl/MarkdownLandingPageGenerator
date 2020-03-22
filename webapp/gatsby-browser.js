/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
/* eslint-disable */
// You can delete this file if you're not using it
// THIS CODE ONLY RUNS IN THE BROWSER AT RUNTIME
import React from 'react';
import { navigate } from 'gatsby';
import { AuthProvider } from 'react-use-auth';

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="markdownlandingpagetest.auth0.com"
    auth0_client_id="hNgYKy8TbOIL2ndJwMsky34By0c1BeMD"
  >
    {element}
  </AuthProvider>
);
