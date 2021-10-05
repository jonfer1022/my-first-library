You can see this example take it by and see how create a library: https://github.com/kentcdodds/starwars-names
npm set init-author-name 'name'
npm set init-author-email 'email'
npm set init-author-url 'https://www.npmjs.com/~jonathanfab92'
npm set init-licence 'licence'
npm set save-exact true (Optional I think)
cat ~/.npmrc (get credentials configured)
npm adduser
npm init
<!-- You have to validate that the name your project already doen't exist or get errors -->
npm publish (When you already create the login about your library)
git tag vx.x.x <!-- Asociado a un commit -->
git push --tags
npm publish --tag beta <!-- Asociar a una versión beta -->
npm info name_project
<!-- to make push github, follow this steps -->
git add
npm run commit
<!-- Seguir los estandares de commits gz-cz -->