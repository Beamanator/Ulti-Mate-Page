## See create-react-app page for basic `README.md` file.

## Things learned while messing around:
1. Not easy to use `BrowserRouter` with `gh-pages` - until this point, haven't found a need for it, so just use `HashRouter`.
1. If page doesn't update quickly, you can almost instantly update it by going to `...page/index`, hard refreshing the page (Ctrl + Shift + R), then going back to the root route `'/'` and hard refreshing that url.
    - Example: if your root route is `https://<github username>.github.io/my-repo`, first go to `https://<github username>.github.io/my-repo/index`, do a hard refresh (at this point your app should be working), then go back to `https://<github username>.github.io/my-repo` and do another hard refresh - your app *should* be working - at least, this works for me.