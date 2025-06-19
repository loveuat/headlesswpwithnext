const API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function fetchGraphQL(query, variables = {}) {
  if (!API_URL) {
    console.error("❌ API URL is missing.");
    return null;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("❌ JSON parse error:", text);
    throw err;
  }
}
