// 2. Build a Basic HTTP Client: Create a simple HTTP client using the Fetch API with support for GET, POST, PUT, and DELETE requests.

const httpClient = {
    get: async (url) => {
      const response = await fetch(url);
      return response.json();
    },
    post: async (url, data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    put: async (url, data) => {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    delete: async (url) => {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      return response.json();
    },
  };
  
  // Example usage
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const newData = { title: 'foo', body: 'bar', userId: 1 };
  
  const runClient = async () => {
    const getData = await httpClient.get(url);
    console.log('GET Response:', getData);
  
    const postData = await httpClient.post(url, newData);
    console.log('POST Response:', postData);
  
    const putData = await httpClient.put(`${url}/1`, { ...newData, title: 'updated title' });
    console.log('PUT Response:', putData);
  
    const deleteData = await httpClient.delete(`${url}/1`);
    console.log('DELETE Response:', deleteData);
  };
  
  runClient();
  