const cron = require("node-cron");

cron.schedule("0 0 18 5 * *", () => {
  console.log("running a task");
});
