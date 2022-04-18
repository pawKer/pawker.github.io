import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../gatsby-config";
export const WebHead = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{config!.siteMetadata!.title as string}</title>
      <meta
        name="description"
        content={config!.siteMetadata!.metaDescription as string}
      />
      <meta
        property="og:url"
        content={config!.siteMetadata!.siteUrl as string}
      />
      <meta
        property="image"
        content={config!.siteMetadata!.image as string}
      />
      <meta
        property="og:image"
        content={config!.siteMetadata!.image as string}
      />
    </Helmet>
  );
};
