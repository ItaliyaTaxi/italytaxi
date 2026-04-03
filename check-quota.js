
const API_KEY = 'f79e85d0d94847cdb66fca223884c8d8';
const SITE_URL = 'https://www.italytaxiservice.com/';
const BING_API_BASE = `https://ssl.bing.com/webmaster/api.svc/json`;

async function checkQuota() {
  const quotaUrl = `${BING_API_BASE}/GetUrlSubmissionQuota?siteUrl=${encodeURIComponent(SITE_URL)}&apikey=${API_KEY}`;
  const response = await fetch(quotaUrl);
  const result = await response.json();
  console.log(JSON.stringify(result, null, 2));
}

checkQuota();
