export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Invalid GraphQL response:", text);
    throw err;
  }
}
