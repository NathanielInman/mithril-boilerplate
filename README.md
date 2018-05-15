# Mithril Project Boilerplate

This is a simple boilerplate with a single `app.js`.

## Technologies used (easy to swap any out.)
- [Mithril](https://mithril.js.org/) light and modern frontend framework
- [Pug](https://pugjs.org/) html templating (converts pug->jsx)
- [Stylus](http://stylus-lang.com/) stylesheet templating
- [Webpack](https://webpack.js.org/) bundler
- [Babel](https://babeljs.io/) javascript transpiler
- [Eslint](https://eslint.org/) javascript linter
- [PostCSS](https://github.com/postcss/postcss) allows smart css transforms
- [Autoprefixer](https://github.com/postcss/autoprefixer) auto css prefixes
- [Browsersync](https://browsersync.io/) auto-reload on saved changes

## Creating a repo based on this boilerplate
**Cloning the boilerplate remote repo**
```
git clone -o mithril-boilerplate https://github.com/NathanielInman/mithril-boilerplate.git [new-project repo folder name]
```

**Enter the cloned repo folder**
```
cd [new-project repo folder name]
```

**Clean the README**
```
rm README.md && touch README.md
```

**If you have LICENSE, you can clean it too.**
```
rm LICENSE
touch LICENSE
```

**Remove all git info from the boilerplate**
```
rm -rf .git
```

**Initiate the new git repo**
```
git init
git add -A
git commit -m "first commit"
git remote add origin [new-project repo folder name]
git push -u origin master
```
