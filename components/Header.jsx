import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Header() {
  const title = "Gonzalo Giudice DJ";
  const desc =
    "I'm a tech founder, digital nomad, and a fun guy to hang around with. I like to build things that others find helpful.";
  const ogImgRelativePath = "/og.jpg";
  const siteURL = "https://gonzalogiudicedjs.com";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const twitterHandle = "@GorvGoyl";
  const siteName = "gonzalogiudicedjs.com";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "es_AR", //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "Gonzalo Giudice DJs - Sitio personal",
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "author",
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  );
}
