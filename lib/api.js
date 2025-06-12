// lib/api.js

const API_URL = "https://mywp.atulbramhe.site/graphql"; // 🔥 Hardcoded directly

export async function fetchGraphQL(query, variables = {}) {
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
