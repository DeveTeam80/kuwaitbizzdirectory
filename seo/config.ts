// /seo/config.ts
export const seoConfig = {
  // Site Identity
  siteName: "Kuwait Bizz Directory", // Added - used throughout the refactored code
  defaultTitle: "Top Business Listing Directory in Kuwait | Kuwait Bizz Directory",
  titleTemplate: "%s | Kuwait Bizz Directory", 
  defaultDescription: "Find trusted businesses across Kuwait with our comprehensive business directory. Discover contacts, locations, reviews, and services all in one place.",
  siteUrl: "https://www.kuwaitbizzdirectory.com",
  defaultOgImage: "/assets/img/logo/og-default.png",
  twitterHandle: "@kuwaitbizzdirectory",
  defaultAuthor: "Kuwait Bizz Directory",
  
  // Localization
  defaultLocale: "en_KE", // Changed from en_US to en_KE (Kuwait)
  supportedLocales: ["en_KE", "sw_KE"], // Added Swahili support for Kuwait
  
  // SEO Defaults
  defaultRobots: "index, follow",
  defaultOgType: "website",
  
  // Analytics
  analytics: {
    googleAnalytics: {
      measurementId: "G-LZ3GP2FHBP",
    },
    googleTagManager: {
      containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
    },
  },
  
  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
  
  // Social Media (optional - for future expansion)
  social: {
    facebook: "https://facebook.com/kuwaitbizzdirectory",
    twitter: "https://twitter.com/kuwaitbizzdirectory",
    instagram: "https://instagram.com/kuwaitbizzdirectory",
    linkedin: "https://linkedin.com/company/kuwaitbizzdirectory",
  },
};

// Type export for better TypeScript support
export type SEOConfig = typeof seoConfig;