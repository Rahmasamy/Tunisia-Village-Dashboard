const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
};

export default env;
