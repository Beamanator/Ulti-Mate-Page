## See create-react-app page for basic `README.md` file.

## Basic setup that many website have consistently discussed
1. Set a `"homepage"` property in your `package.json` file, and set it to `"https://[your-user-name].github.io/[your-repo-name]"`.
1. Add a few extra `"scripts"`:
    - `"predeploy": "npm run build"` - specifies the command to build *before* deployment. This just runs the `"build"` script.
    - `"deploy": "gh-pages -d build"` - specifies which branch and directory to deploy.
1. To get your app onto github pages, just run `npm run deploy`, and then your app should be running on the link you just set in `homepage` above.

## Things learned while messing around:
1. Not easy to use `BrowserRouter` with `gh-pages` - until this point, haven't found a need for it, so just use `HashRouter`.
1. If page doesn't update quickly, you can almost instantly update it by going to `...page/index`, hard refreshing the page (Ctrl + Shift + R), then going back to the root route `'/'` and hard refreshing that url.
    - Example: if your root route is `https://<github username>.github.io/my-repo`, first go to `https://<github username>.github.io/my-repo/index`, do a hard refresh (at this point your app should be working), then go back to `https://<github username>.github.io/my-repo` and do another hard refresh - your app *should* be working - at least, this works for me.
1. Jss (Css in javascript) doesn't easily do `content: ' '` when adding the `:before` / `:after` pseudoclasses - remember you have to do `content: '" "'` to actually keep the double-quotes in the string.

## Some useful websites for getting a react app on Github Pages
1. [Blog on codeburst.io](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d) - very useful intro steps and explanations, but didn't explain the `BrowserRouter` / hard refresh issues I ran into.
1. [Blog on itnext.io](https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48) - has some interesting commentary about getting `BrowserRouter` to work, but I haven't tried it yet.
1. [react-github-pages](https://github.com/rafrex/react-github-pages) - some boiler plate code for getting a react app set up in Github Pages
1. [sample-react-github-pages](https://github.com/benawad/sample-react-github-pages) - sample react app set up with github pages (including video link with some extra explanation)