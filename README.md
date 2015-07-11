# A simple demo project demonstrating the use of meteor.js and mongodb pub-sub

## Get started

1. Install meteor: `curl https://install.meteor.com/ | sh`
2. `cd ~/work`
3. `meteor create chat`
4. `cd chat`

## TODO

### Use rethinkdb instead?

5. `meteor add simple:rethink`

### Install rethinkdb

1. Run rethinkdb: `cd ~/work/chat; rethinkdb`

### Start meteor

1. `env RETHINK_URL=rethinkdb://localhost:28015/test meteor run`

## Tooling for VIM users

1. Install tern_for_vim plugin
2. Then, install meteor.js plugin for tern_for_vim via:

```
cd $HOME/.vim/bundle/tern_for_vim/node_modules/tern/plugin/
wget https://raw.githubusercontent.com/Slava/tern-meteor/master/meteor.js
```

3. The meteor project should then include this `.tern-project` file in project root directory:

```
    {
      "libs": [
        "browser",
        "jquery",
        "underscore"
      ],
      "loadEagerly": [ "*.js", "*/*.js", "*/*/*.js", "*/*/*/*.js" ],
      "dontLoad": [ ".meteor" ],
      "plugins": {
        "meteor": {}
      }
    }
```
