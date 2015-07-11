# A simple demo project demonstrating the use of meteor.js and rethinkdb

## Get started

1. Install meteor: `curl https://install.meteor.com/ | sh`
2. `cd ~/work`
3. `meteor create chat`
4. `cd chat`
5. `meteor add simple:rethink`

## Install rethinkdb

1. Run rethinkdb: `cd ~/work/chat; rethinkdb`

## Start meteor

1. `env RETHINK_URL=rethinkdb://localhost:28015/test meteor run`
