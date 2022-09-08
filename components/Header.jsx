import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Header() {
  const title = "Gonzalo Giudice DJ";
  const desc = "¿Estás organizando un evento y necesitás que alguien se ocupe de ponerle música?";
  const ogImgRelativePath = "/og.jpg";
  const siteURL = "https://gonzalogiudicedjs.com.ar";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const siteName = "gonzalogiudicedjs.com.ar";

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
            alt: "Gonzalo Giudice DJs - Contacto",
          },
        ],
        site_name: siteName,
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
          href: `${siteURL}/favicon.svg`,
        },
      ]}
    />
  );
}
