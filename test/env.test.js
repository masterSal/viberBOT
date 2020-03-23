require("custom-env").env("secrets");


console.log(process.env.HEROKU_URL);