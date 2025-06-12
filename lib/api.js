// lib/api.js

const API_URL = "https://www.atulbramhe.site/graphql";

export async function fetchGraphQL(query, variables = {}) {
  if (!API_URL) {
    console.error("🚨 WP GraphQL API URL is not defined. Check .env.local.");
    return null;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("❌ Failed to parse GraphQL response");
    console.error("Raw response:", text);
    throw err;
  }
}
