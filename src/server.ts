import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    email: {
      transportOptions: {
        host: "smtp.ethereal.email",
        auth: {
          user: "marietta39@ethereal.email",
          pass: "txXyM8YQnCStuhTkRd",
        },
        port: 587,
      },
      fromName: "Palak",
      fromAddress: "palak@convivity.com",
      // logMockCredentials: true, // Optional
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
