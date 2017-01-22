Project Overview
================

Upcoming shortly!

Start Running
=============

- Clone project: `git clone https://github.com/VikramTiwari/po.git && cd po`
- Install dependencies: `yarn`
- Update `frontend/scripts/config.template.js` with your configurations and rename file to `config.js`
- Run locally: `yarn start`
- Deploy: `yarn run deploy`

Backend
=======
Built using top of cloud functions

Create staging Bucket
```
gsutil mb gs://ivikramtiwari-fn
```

Components:
Firebase Messaging Service
---
- used to send messages to end device
- register a firebase app
- update config in `frontend/public/main.js`
- start the app using `yarn start`
- get token from console
- get cloud messaging token from firebase panel
- make a post request to the server to send notification to the client
