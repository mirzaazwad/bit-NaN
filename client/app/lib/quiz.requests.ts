export async function getQuizes(page:number, limit:number) {
    try {
      const result = await fetch(`http://localhost:3000/api/quiz?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result.json();
    } catch (err) {
      return { err };
    }
  }