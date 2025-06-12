export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch(process.env.WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL fetch error");
  }
  return json.data;
}
