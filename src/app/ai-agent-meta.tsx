/**
 * AI Agent Meta Tags Component - KUWAIT
 * 
 * This component adds AI agent specific meta tags to improve discoverability
 * in AI search engines like ChatGPT, Claude, Gemini, and Perplexity.
 * Optimized for Kuwait market.
 */

interface AIAgentMetaProps {
  intent?: string;
  entities?: string[];
  topics?: string[];
  questionAnswer?: Array<{ question: string; answer: string }>;
  conversationalHooks?: string[];
}

export default function AIAgentMeta({
  intent,
  entities,
  topics,
  questionAnswer,
  conversationalHooks
}: AIAgentMetaProps) {
  return (
    <>
      {/* AI Agent Intent */}
      {intent && (
        <meta name="ai-agent-intent" content={intent} />
      )}
      
      {/* AI Agent Entities */}
      {entities && entities.length > 0 && (
        <meta name="ai-agent-entities" content={entities.join(',')} />
      )}
      
      {/* AI Agent Topics */}
      {topics && topics.length > 0 && (
        <meta name="ai-agent-topics" content={topics.join(',')} />
      )}
      
      {/* AI Agent Conversational Hooks */}
      {conversationalHooks && conversationalHooks.length > 0 && (
        <meta name="ai-agent-conversational-hooks" content={conversationalHooks.join('|')} />
      )}
      
      {/* AI Agent Q&A Schema */}
      {questionAnswer && questionAnswer.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: questionAnswer.map(qa => ({
                '@type': 'Question',
                name: qa.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: qa.answer
                }
              }))
            })
          }}
        />
      )}
      
      {/* Geographic and Language Meta Tags */}
      <meta name="content-language" content="en-KW, ar-KW" />
      <meta name="geo.region" content="KW" />
      <meta name="geo.placename" content="Kuwait" />
      <meta name="geo.country" content="KW" />
      <meta name="geo.position" content="29.3759;47.9774" /> {/* Kuwait City coordinates */}
      <meta name="ICBM" content="29.3759, 47.9774" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 day" />
      
      {/* Kuwait Specific Meta Tags */}
      <meta name="coverage" content="Kuwait" />
      <meta name="target-market" content="Kuwait" />
      <meta name="audience" content="Kuwait businesses, Kuwait consumers" />
      <meta name="market" content="KW" />
      
      {/* AI Agent Search Action */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Kuwait Bizz Directory',
            alternateName: 'KuwaitBizz',
            url: 'https://www.kuwaitbizzdirectory.com',
            description: 'Find trusted businesses across Kuwait. Comprehensive business directory covering all 6 governorates from Kuwait City to Ahmadi.',
            inLanguage: ['en-KW', 'ar-KW'],
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
            },
            about: {
              '@type': 'Thing',
              name: 'Business Directory',
              sameAs: 'https://en.wikipedia.org/wiki/Business_directory'
            }
          })
        }}
      />
      
      {/* Additional Structured Data for AI Agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Kuwait Bizz Directory',
            url: 'https://www.kuwaitbizzdirectory.com',
            logo: 'https://www.kuwaitbizzdirectory.com/assets/img/logo/logoa.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+965-XXXX-XXXX',
              contactType: 'customer service',
              availableLanguage: ['English', 'Arabic'],
              areaServed: 'KW'
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kuwait City',
              addressRegion: 'Capital Governorate',
              addressCountry: 'KW'
            },
            sameAs: [
              'https://www.facebook.com/kuwaitbizzdirectory',
              'https://www.instagram.com/kuwaitbizzdirectory',
              'https://twitter.com/kuwaitbizzdirectory',
              'https://www.linkedin.com/company/kuwaitbizzdirectory'
            ],
            knowsAbout: [
              'Business listings in Kuwait',
              'Kuwait companies directory',
              'Kuwait City businesses',
              'Hawalli businesses',
              'Salmiya businesses',
              'Ahmadi businesses',
              'Farwaniya businesses',
              'Jahra businesses',
              'Kuwait New Vision 2035',
              'Kuwait business ecosystem'
            ]
          })
        }}
      />
      
      {/* AI Agent Regional Context */}
      <meta name="ai-regional-context" content="Kuwait, Middle East, Gulf Cooperation Council, GCC" />
      <meta name="ai-business-coverage" content="6 governorates, Capital, Hawalli, Farwaniya, Ahmadi, Jahra, Mubarak Al-Kabeer" />
      <meta name="ai-industries" content="Real Estate, Manufacturing, Retail, Services, Technology, Oil and Gas, Healthcare, Hospitality, Finance" />
      <meta name="ai-languages" content="English, Arabic" />
      <meta name="ai-currency" content="KWD" />
      <meta name="ai-timezone" content="Asia/Kuwait" />
    </>
  );
}