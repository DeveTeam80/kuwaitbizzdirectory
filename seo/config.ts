// /seo/config.ts
export const seoConfig = {
  // Site Identity
  siteName: "Kuwait Bizz Directory",
  defaultTitle: "Top Business Listing Directory in Kuwait | Kuwait Bizz Directory",
  titleTemplate: "%s | Kuwait Bizz Directory", 
  defaultDescription: "Find trusted businesses across Kuwait with our comprehensive business directory. Discover contacts, locations, reviews, and services from Kuwait City to Ahmadi across all 6 governorates.",
  siteUrl: "https://www.kuwaitbizzdirectory.com",
  defaultOgImage: "/assets/img/logo/og-default.png",
  twitterHandle: "@kuwaitbizzdirectory",
  defaultAuthor: "Kuwait Bizz Directory",
  
  // Localization
  defaultLocale: "en_KW", // Fixed: en_KW for Kuwait 
  supportedLocales: ["en_KW", "ar_KW"], // Arabic and English for Kuwait
  
  // SEO Defaults
  defaultRobots: "index, follow",
  defaultOgType: "website",
  
  // Regional Keywords (for SEO optimization)
  regionalKeywords: [
    "Kuwait business directory",
    "businesses in Kuwait City",
    "Hawalli companies",
    "Salmiya business listings",
    "Ahmadi services",
    "Kuwait business contacts",
    "KW directory",
    "Kuwait companies",
    "business listings Kuwait",
    "find businesses in Kuwait"
  ],
  
  // Analytics
  analytics: {
    googleAnalytics: {
      measurementId: "G-LZ3GP2FHBP", // Keep your existing GA4 ID or update as needed
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
  
  // Social Media
  social: {
    facebook: "https://facebook.com/kuwaitbizzdirectory",
    twitter: "https://twitter.com/kuwaitbizzdirectory",
    instagram: "https://instagram.com/kuwaitbizzdirectory",
    linkedin: "https://linkedin.com/company/kuwaitbizzdirectory",
    snapchat: "https://snapchat.com/add/kuwaitbizzdirectory", // Popular in Kuwait
  },
  
  // Business Information (for structured data)
  business: {
    name: "Kuwait Bizz Directory",
    legalName: "Kuwait Bizz Directory",
    description: "Kuwait's premier business directory connecting customers with trusted businesses across all 6 governorates",
    address: {
      streetAddress: "", // Add when available
      addressLocality: "Kuwait City",
      addressRegion: "Capital Governorate",
      postalCode: "",
      addressCountry: "KW"
    },
    contactPoint: {
      telephone: "+965-XXXX-XXXX", // Add your phone number
      contactType: "customer support",
      availableLanguage: ["English", "Arabic"]
    }
  },
  
  // Geographic Coverage
  geographicCoverage: {
    country: "Kuwait",
    countryCode: "KW",
    governorates: [
      "Capital Governorate (Al Asimah)",
      "Hawalli Governorate",
      "Farwaniya Governorate",
      "Ahmadi Governorate",
      "Jahra Governorate",
      "Mubarak Al-Kabeer Governorate"
    ],
    majorCities: [
      "Kuwait City",
      "Hawalli",
      "Salmiya",
      "Farwaniya",
      "Ahmadi",
      "Jahra",
      "Fahaheel",
      "Mangaf",
      "Fintas",
      "Mahboula",
      "Jleeb Al-Shuyoukh",
      "Shuwaikh",
      "Sabah Al-Salem"
    ]
  }
};

// Type export for better TypeScript support
export type SEOConfig = typeof seoConfig;