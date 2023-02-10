const cron = require('node-cron');
const axios = require('axios');

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`Fetching website "https://dinosaurweb.up.railway.app/"...`);
  try {
    const response = await axios.get("https://dinosaurweb.up.railway.app/");
    console.log(`Website fetched successfully with status code: ${response.status}`);
  } catch (error) {
    console.error(`Error fetching website: ${error}`);
  }
});

