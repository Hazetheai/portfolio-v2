import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'bc690c0b2bce4c599a7f00860e41ccf9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jake Riordan - Portfolio',
  domain: 'jakeriordan.dev',
  author: 'Jake Riordan',

  // open graph metadata (optional)
  description:
    "Front-end engineer and creative coder, based in Berlin. This is my little corner of the internet where I showcase my past projects and what I'm working on at the moment. Come say hi!",
  // socialImageTitle: 'Jake Riordan',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: '_stefario_',
  github: 'hazetheai',
  linkedin: 'jake-riordan-610ab1172',
  cv: 'Resume_Nov_2022.pdf',

  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '924a69ead2c64ae8b6b5fd183e80cb40'
    },
    {
      title: 'Contact',
      pageId: '737cd6ef27f04666962e6ed8e4f80d85'
    }
  ]
})
