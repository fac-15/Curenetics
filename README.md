# Curenetics

An app to put prostate cancer patients in touch with clinical trials that are suitable to them.

## To get it running:
1. Clone this repo
2. `npm i`
3. `npm run dev` to start the development server

---

### Linter stuff
- ~~Need to match rules in `.eslintrc` to rules in `.prettierrc`.~~ Seems to work fine with eslintrc and format on save (below)
- `.prettierrc` previously had this:
```javascript
// {
//   "trailingComma": "es5",
//   "tabWidth": 2,
//   "semi": true,
//   "doubleQuote": true,
//   "printWidth": 100
// }
```
- With the below configuration, files are formatted on save
- [more eslint stuff here](https://eslint.org/docs/2.0.0/rules/)


**VS Code:**
- Go to settings, search for and select 'format on save'
- Also may be able to "editor.formatOnSave": true in a settings file somewhere

**Atom:**
- Don't know yet.
