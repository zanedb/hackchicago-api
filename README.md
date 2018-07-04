## [Hack Chicago Attendee API & Discord Bot](https://github.com/zanedb/hackchicago-api/blob/master/app.js): sets up Orpheus bot & handles requests to API (get/edit/create/delete attendees)
  - Prerequisites:
    - There must be a configured Discord bot in the proper server.
    - You must have a MongoDB database configured.
    - You must choose an AUTH_KEY to be used for API calls.
    - Then, a file called `.env` must exist in the root directory, with the following structure (and filled out values):
      ```
      DISCORD_TOKEN=
      DISCORD_CONFIG_FILE=discord
      MONGODB_URI=
      AUTH_KEY=
      MAILCHIMP_APPROVAL_URL=
      MAILCHIMP_APPROVAL_USERNAME=
      MAILCHIMP_APPROVAL_PASSWORD=
      NODE_ENV=production
      ```
  - To run:
    ```
    yarn && yarn start
    ```
  - Testing:
    - Please use the following `.env` values for testing the Discord bot & server:
      ```
      DISCORD_TOKEN=NDU4NDQwODg0MzMwMTY4MzM0.Dgnr3g.2kzaSfq7E4848w51xIsV3FuZmeY
      DISCORD_CONFIG_FILE=discord-dev
      MONGODB_URI=[set up locally and enter URI here]
      AUTH_KEY=test
      NODE_ENV=development
      ```
    - Use [this link](https://discord.gg/UE8ZMgr) to join the *TESTING* Discord server
    - To run in testing mode:
      ```
      nodemon
      ```