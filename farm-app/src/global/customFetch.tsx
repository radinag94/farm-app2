async function customFetch({ queryKey }) {
  const [key, { url, options }] = queryKey;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data: ", error.message);
    throw error;
  }
}

export default customFetch;
