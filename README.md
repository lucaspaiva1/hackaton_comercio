## API SETUP

```bash
cd api
```

#### Create database [sqlite]

```bash
node_modules/.bin/sequelize db:migrate
# or
npx sequelize db:migrate
```

#### Create Seeds

```bash
node_modules/.bin/sequelize db:seed:all
# or
npx sequelize db:seed:all
```
