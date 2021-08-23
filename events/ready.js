const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
    client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "with discord.js v13",
                type: "PLAYING"
            }
        ]
    })
    console.log(`Logged in as ${client.user.tag}`);
}