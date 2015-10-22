## Command and Control 

This is going to be a simple JavaScript "game" where you can issue commands to rocket ship to `launch`, `move`, and `rotate` a rocket ship using JavaScript + HTML/CSS.

### Prerequisites
- Have a text editor
	- Sublime
	- Atom
	- Vim
- Have Git Working
	- Refer to our [intro-git]() workshop if you need to get setup
	- Feel free to ask mentor if you need help
- Turn onDeveloper Tools in your Browser
	- Google Chrome:
	- Safari:
	- Firefox:

### Getting Started
1. Clone this repository: `git clone https://github.com/dvcoders/intro-js`
2. `cd` into `intro-js` then `1-beginner-js`
3. Work along with the live coding  

### How to Update Your Intro-JS Repo
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
 - It places the changes in branches called upstream/[branch-name]
6. `git merge upstream/master` to merge the changes to your master branch

- Github goes into detail about this process [here](https://help.github.com/articles/syncing-a-fork/)

