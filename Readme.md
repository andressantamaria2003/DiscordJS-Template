# Currently not finished

# Discord.js Template

A simple discord.js template

# Installation

**Node.js 14.6.0 or newer is required.**

```js
npm install discord.js
```


# More Examples

```js
const { Client } = require("discord.js")
const client = new Client();
const prefix = "djs!";

client.on("ready", async () => {
  client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "with discord.js v13",
                type: "PLAYING"
            }
        ]
    });
    
  console.log(`[ API ] Logged in as ${client.user.tag}`);
});


client.login("your bot token here");
```
