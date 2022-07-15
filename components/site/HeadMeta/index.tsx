import React from "react";
import Head from "next/head";
import { FRONT_DOMAIN } from "utils/envirenments";
import { useRouter } from "next/router";
import { DESCRIPTION, TITLE } from "utils/constants";
import logoIcon from "public/img/icons/Icon.svg";

export interface HeadMetaProps {
  title?: string;
  description?: string;
  image?: string;
  schemaOrg?: object[];
}

const HeadMeta = (props: HeadMetaProps) => {
  const { asPath: currentPageUrl } = useRouter();
  const { title: propsTitle } = props;
  const { src: logotype } = logoIcon;
  const title = propsTitle ? propsTitle : TITLE;
  const {
    description = DESCRIPTION,
    image = logotype,
    schemaOrg = [{}]
  } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport"
            content="initial-scale=1.0, width=device-width, user-scalable=false"
      />
      <link rel="stylesheet" href={`${FRONT_DOMAIN}${currentPageUrl}`} />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Fonts */}
      <link rel="preload"
            href="/fonts/inter/Inter-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
      />
      <link rel="preload"
            href="/fonts/inter/Inter-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
      />

      {/* Favicons */}
      <link rel="shortcut icon"
            href="/favicon/favicon.ico"
            type="image/x-icon"
      />
      <link rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicon/android-icon-192x192.png"
      />
      <link rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
      />
      <link rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon/favicon-96x96.png"
      />
      <link rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
      />

      <link rel="apple-touch-icon"
            sizes="57x57"
            href="/favicon/apple-icon-57x57.png"
      />
      <link rel="apple-touch-icon"
            sizes="60x60"
            href="/favicon/apple-icon-60x60.png"
      />
      <link rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-icon-72x72.png"
      />
      <link rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon/apple-icon-76x76.png"
      />
      <link rel="apple-touch-icon"
            sizes="114x114"
            href="/favicon/apple-icon-114x114.png"
      />
      <link rel="apple-touch-icon"
            sizes="120x120"
            href="/favicon/apple-icon-120x120.png"
      />
      <link rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-icon-144x144.png"
      />
      <link rel="apple-touch-icon"
            sizes="152x152"
            href="/favicon/apple-icon-152x152.png"
      />
      <link rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-icon-180x180.png"
      />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage"
            content="/favicon/ms-icon-144x144.png"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
      />

      {/* Schema.org markup for Google+ */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />

      {/* For Facebook */}
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={currentPageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={"website"} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: TITLE,
            image: `${FRONT_DOMAIN}/${logotype}`,
            url: FRONT_DOMAIN
          })
        }}
      />

      {schemaOrg.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default HeadMeta;
