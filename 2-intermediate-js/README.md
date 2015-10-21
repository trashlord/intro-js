## Imgur Voice

We're making a voice search for imgur.com. It will take use of the Web Speech API available in Chrome.

- [Workshop's finished project](https://carpetfizz.github.io/imgur-voice/)
- [Google's example for the web speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API?hl=en)
- [Web Speech API Documentation (dense)](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)


### Prerequisites

- Have git working -- ask for help if you are having trouble with git

- Have a text editor

- Know how to user the developer tools in Chrome [refresher](https://github.com/dvcoders/intro-html-css/blob/master/reference/README.md#what-are-your-browsers-developer-tools-and-how-can-they-be-used)

- [Register your app with imgur to use their API](https://api.imgur.com/oauth2/addclient)
	- Create an imgur account if you don't have one
	- Name your app what you want
	- Authorization Type: `Anonymous usage without user authorization`
	- Callback URL: `https://localhost:8000`
- Your client ID for interacting with the imgur API can be found [here](https://imgur.com/account/settings/apps)
- Take note of that ID, you'll be using it during the workshop


### Getting the workshop

If you were at last week's workshop and already forked/cloned the dvcoders/intro-js repository:

1. `cd` into your intro-js directory
2. Run `git status`.
3. If it doesn't say `nothing to commit, working directory clean`:
 - `git add -A` to add the files you've changed
 - and `git commit -m "finished rocketship workshop"`
 - and `git push origin master` to push those changes (assuming you are on branch master)
 - Now all your work from the last workshop is on github!
4. Make sure you're on `master`, you can check with `git status`
 - If needed, `git checkout master`
4. Now you should set "upstream" to track the dvcoder's intro-js repostiory:
 - `git remote add upstream https://github.com/dvcoders/intro-js.git`
5. `git fetch upstream`
 - This fetches the new changes added to the intermediate-js folder in the dvcoder's intro-js repository

- Github goes into detail about this process [here](https://help.github.com/articles/syncing-a-fork/)

