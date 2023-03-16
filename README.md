# --- Cafe Libro ---

## How to run this app

When you have forked/cloned/downloaded the repository, open up two terminals and open the client directory in one and the server directory in the other. In the client directory,  run the script `npm run start` and in the server directory run the script `npm run server`.

## Dependencies

There are some dependencies that are needed to run this application. Make sure to install the following:

* Express
* Cors
* dotenv
* bodyparser

## Change to be made

In the .env file located in the server directory, you will have to change part of the URI included in the file. In the URI, you'll see `<dbname>` change it to `items` and do not include the arrows `<>`.
