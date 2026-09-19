## Running the bot

- Create a ".env" file inside the base directory and add the following contents to it:
``` env
#BOT
BOT_TOKEN=""
BOT_CLIENT_ID=""
BOT_GUILD_ID=""
#DB
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
```
- Get your BOT_TOKEN and BOT_CLIENT_ID [here](https://discord.com/developers/applications).

To start the bot just do:

```bash
sudo ./start.sh
```
