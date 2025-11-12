/**
 * AI Agent Optimization Configuration - KUWAIT
 * 
 * This file contains configuration for optimizing content for AI search engines
 * like ChatGPT, Claude, Gemini, and Perplexity.
 * Optimized for Kuwait market.
 */

export interface AIAgentConfig {
  // Primary intent keywords that AI agents should understand
  primaryIntents: string[];
  
  // Entity recognition patterns
  entityPatterns: {
    businessTypes: string[];
    locations: string[];
    services: string[];
    industries: string[];
  };
  
  // Conversational hooks for better AI understanding
  conversationalHooks: {
    greetings: string[];
    questions: string[];
    callsToAction: string[];
  };
  
  // Knowledge graph optimization
  knowledgeGraph: {
    mainTopics: string[];
    relatedTopics: string[];
    semanticKeywords: string[];
  };
  
  // AI agent specific meta tags
  metaTags: {
    contentLanguage: string;
    geoRegion: string;
    geoCountry: string;
    distribution: string;
    rating: string;
    revisitAfter: string;
  };
}

export const aiAgentConfig: AIAgentConfig = {
  primaryIntents: [
    'find business',
    'search directory',
    'locate service',
    'contact company',
    'business information',
    'service provider',
    'local business',
    'Kuwait business',
    'Kuwait company',
    'KW directory'
  ],
  
  entityPatterns: {
    businessTypes: [
      'restaurant', 'hotel', 'clinic', 'hospital', 'school', 'bank', 'shop', 'office',
      'factory', 'warehouse', 'salon', 'gym', 'pharmacy', 'garage', 'mall',
      'law firm', 'accounting firm', 'real estate', 'insurance', 'construction',
      'engineering', 'consulting', 'retail store', 'supermarket', 'café', 'spa'
    ],
    locations: [
      // Capital Governorate (Al Asimah)
      'Kuwait City', 'Sharq', 'Qibla', 'Mirgab', 'Dasman', 'Abdullah Al-Salem',
      'Adiliya', 'Kaifan', 'Khaldiya', 'Mansouriya', 'Nuzha', 'Qadsiya',
      'Qortuba', 'Rawda', 'Shamiya', 'Shuwaikh', 'Sulaibikhat', 'Yarmouk',
      'Bneid Al-Gar', 'Daiya', 'Dasma', 'Faiha', 'Ghornata',
      
      // Hawalli Governorate
      'Hawalli', 'Salmiya', 'Mangaf', 'Rumaithiya', 'Bayan', 'Mishref',
      'Salwa', 'Shaab', 'Siddiq', 'Jabriya', 'Surra', 'Hitteen',
      
      // Farwaniya Governorate
      'Farwaniya', 'Andalous', 'Abdullah Al-Mubarak', 'Ardhiya', 'Khaitan',
      'Ferdous', 'Jleeb Al-Shuyoukh', 'Omariya', 'Rai', 'Rabiya', 'Rehab',
      
      // Ahmadi Governorate
      'Ahmadi', 'Fahaheel', 'Fintas', 'Mahboula', 'Abu Halifa', 'Sabahiya',
      'Wafra', 'Riqqa', 'Hadiya', 'Julaia', 'Khiran',
      
      // Jahra Governorate
      'Jahra', 'Sulaibiya', 'Qasr', 'Taima', 'Naeem', 'Saad Al-Abdullah',
      'Abdali', 'Kabd',
      
      // Mubarak Al-Kabeer Governorate
      'Qurain', 'Qusour', 'Funaitees', 'Messila', 'Sabah Al-Salem',
      'Adan', 'Abu Ftaira'
    ],
    services: [
      'consulting', 'repair', 'maintenance', 'delivery', 'installation',
      'training', 'cleaning', 'security', 'transport', 'catering',
      'photography', 'design', 'marketing', 'legal', 'financial',
      'accounting', 'auditing', 'engineering', 'construction', 'renovation',
      'IT services', 'web design', 'translation', 'visa services', 'logistics'
    ],
    industries: [
      'healthcare', 'education', 'technology', 'manufacturing', 'retail',
      'hospitality', 'construction', 'real estate', 'finance', 'transport',
      'oil and gas', 'telecommunications', 'tourism', 'food and beverage',
      'automotive', 'pharmaceuticals', 'banking', 'insurance', 'logistics'
    ]
  },
  
  conversationalHooks: {
    greetings: [
      'Looking for a business in Kuwait?',
      'Need to find a service provider in Kuwait?',
      'Searching for local businesses in Kuwait?',
      'Want to connect with companies in Kuwait?',
      'Find businesses across all 6 governorates'
    ],
    questions: [
      'What type of business are you looking for?',
      'Which governorate or area interests you?',
      'What services do you need in Kuwait?',
      'Are you looking for verified businesses in Kuwait?',
      'Need businesses in Kuwait City, Salmiya, or other areas?',
      'Looking for Arabic or English-speaking services?'
    ],
    callsToAction: [
      'Browse our Kuwait directory now',
      'Find verified businesses in Kuwait',
      'Connect with local Kuwait companies',
      'Discover services across Kuwait',
      'Explore businesses in your governorate',
      'List your business for free'
    ]
  },
  
  knowledgeGraph: {
    mainTopics: [
      'Kuwait business directory',
      'Kuwait business listings',
      'Kuwait local businesses',
      'Kuwait service providers',
      'Kuwait company listings',
      'business information Kuwait',
      'contact details Kuwait businesses',
      'location services Kuwait'
    ],
    relatedTopics: [
      'Gulf business',
      'GCC companies',
      'Middle East business',
      'Arab business directory',
      'business networking Kuwait',
      'professional services Kuwait',
      'commercial directory Kuwait',
      'business verification',
      'Kuwait economy',
      'Kuwait New Vision 2035'
    ],
    semanticKeywords: [
      'business directory Kuwait',
      'company listings Kuwait City',
      'service providers Salmiya',
      'local businesses Hawalli',
      'verified companies Kuwait',
      'business contacts Kuwait',
      'professional services directory Kuwait',
      'businesses in Fahaheel',
      'Ahmadi companies',
      'Farwaniya businesses',
      'Kuwait business ecosystem',
      'find businesses in Kuwait'
    ]
  },
  
  metaTags: {
    contentLanguage: 'en-KW, ar-KW',
    geoRegion: 'KW',
    geoCountry: 'KW',
    distribution: 'global',
    rating: 'general',
    revisitAfter: '1 day'
  }
};

/**
 * Generates AI agent optimized content based on business data
 */
export function generateAIAgentContent(
  businessName: string,
  category: string,
  location: string,
  description: string,
  type: 'listing' | 'category' | 'location' = 'listing'
) {
  const config = aiAgentConfig;
  
  // Generate intent based on type
  let intent = '';
  switch (type) {
    case 'listing':
      intent = `Find information about ${businessName}, a ${category} business in ${location}, Kuwait`;
      break;
    case 'category':
      intent = `Find ${category} businesses and services in Kuwait`;
      break;
    case 'location':
      intent = `Find businesses and services in ${location}, Kuwait`;
      break;
  }
  
  // Generate entities
  const entities = [
    businessName,
    category,
    location,
    'Kuwait',
    'KW',
    'business directory',
    ...config.entityPatterns.businessTypes.filter(bt => 
      category.toLowerCase().includes(bt.toLowerCase())
    ),
    ...config.entityPatterns.locations.filter(loc => 
      location.toLowerCase().includes(loc.toLowerCase())
    )
  ];
  
  // Generate topics
  const topics = [
    category.toLowerCase(),
    'business services',
    'local directory',
    'Kuwait business',
    'Kuwait services',
    ...config.knowledgeGraph.mainTopics,
    ...config.knowledgeGraph.semanticKeywords.filter(keyword =>
      keyword.toLowerCase().includes(category.toLowerCase()) ||
      keyword.toLowerCase().includes(location.toLowerCase())
    )
  ];
  
  // Generate conversational hooks
  const conversationalHooks = [
    ...config.conversationalHooks.greetings,
    `Looking for ${category} in ${location}?`,
    `Find the best ${category} services in Kuwait`,
    `Connect with ${businessName}`,
    `Discover ${category} businesses in Kuwait`
  ];
  
  // Generate Q&A pairs
  const questionAnswer = [
    {
      question: `What is ${businessName}?`,
      answer: `${businessName} is a ${category} business located in ${location}, Kuwait. ${description.substring(0, 200)}...`
    },
    {
      question: `Where is ${businessName} located?`,
      answer: `${businessName} is located in ${location}, Kuwait. You can find their exact address and contact details on our directory.`
    },
    {
      question: `What services does ${businessName} offer?`,
      answer: `${businessName} offers ${category} services in ${location}. For detailed information about their services, contact them directly through our directory.`
    },
    {
      question: `How can I contact ${businessName}?`,
      answer: `You can find ${businessName}'s phone number, email, and location details on Kuwait Bizz Directory. Visit their profile for complete contact information.`
    },
    {
      question: `Is ${businessName} a verified business?`,
      answer: `${businessName} is listed on Kuwait Bizz Directory. Check their profile for verification status and customer reviews.`
    }
  ];
  
  return {
    intent,
    entities: [...new Set(entities)],
    topics: [...new Set(topics)],
    questionAnswer,
    conversationalHooks: [...new Set(conversationalHooks)]
  };
}

/**
 * Generates AI agent optimized schema markup
 */
export function generateAIAgentSchema(
  businessName: string,
  category: string,
  location: string,
  description: string,
  type: 'listing' | 'category' | 'location' = 'listing'
) {
  const content = generateAIAgentContent(businessName, category, location, description, type);
  
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: businessName,
      description: description,
      inLanguage: ['en-KW', 'ar-KW'],
      about: {
        '@type': 'Thing',
        name: category,
        description: `${category} services in ${location}, Kuwait`
      },
      mainEntity: {
        '@type': 'Organization',
        name: businessName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location,
          addressCountry: 'KW'
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kuwait'
        },
        knowsAbout: content.topics,
        sameAs: content.entities
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.kuwaitbizzdirectory.com/listings?q={search_term_string}',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
            'https://schema.org/IOSPlatform',
            'https://schema.org/AndroidPlatform'
          ]
        },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.questionAnswer.map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${category} in ${location}`,
      description: `Directory of ${category} businesses in ${location}, Kuwait`,
      itemListElement: content.entities.slice(0, 10).map((entity, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entity,
        item: {
          '@type': 'Thing',
          name: entity,
          description: `${entity} related to ${category} in ${location}, Kuwait`
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.kuwaitbizzdirectory.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: category,
          item: `https://www.kuwaitbizzdirectory.com/listings/${category.toLowerCase().replace(/\s+/g, '-')}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: businessName,
          item: `https://www.kuwaitbizzdirectory.com/listings/${category.toLowerCase().replace(/\s+/g, '-')}/${businessName.toLowerCase().replace(/\s+/g, '-')}`
        }
      ]
    }
  ];
}