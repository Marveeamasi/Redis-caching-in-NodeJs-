const redis = require('redis');
const client = redis.createClient();

app.get('/data', async (req, res) => {
  const cachedData = await client.get('key');
  if (cachedData) {
    return res.send(JSON.parse(cachedData));
  }

  const data = await fetchDataFromDB();
  client.setex('key', 3600, JSON.stringify(data)); // Cache for 1 hour
  res.send(data);
});
