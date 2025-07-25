// config.js - Central configuration for Free Language School app

const CONFIG = {
  // App Metadata
  appName: 'Free Language School',
  appVersion: '1.0.0',
  copyrightYear: 2025,

  // Theme Colors (inspired by freeCodeCamp style)
  colors: {
    primary: '#0a0a23',    // Dark background
    secondary: '#f4f4f4',  // Light background
    accent: '#ddf',        // Hero section background
    text: '#333',          // Default text color
    white: '#ffffff',
  },

  // Supported Languages
  languages: [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
    { code: 'de', label: 'German', flag: '🇩🇪' },
    { code: 'it', label: 'Italian', flag: '🇮🇹' },
  ],

  // API Endpoints (placeholders; replace with real URLs)
  api: {
    baseUrl: 'https://api.freelanguageschool.com/v1',
    endpoints: {
      courses: '/courses',
      userProgress: '/user/progress',
      recommendations: '/recommendations',
    },
  },

  // Other Settings
  defaultLanguage: 'en',
  maxCoursesDisplayed: 3,  // Limit for dashboard displays
  enableAnalytics: true,   // Toggle for tracking
};

export default CONFIG;
