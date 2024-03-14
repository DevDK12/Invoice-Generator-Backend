# NODEJS + Express + Mongodb + TypeScript 




# Running project 



- Cloning 
```
git clone https://github.com/DevDK12/Invoice-Generator-Backend.git


```

- Go inside repo directory
- Open terminal inside there


- To run as dev

```
npm i
npm run dev
```
- To run build 

```
npm i
npm run build
npm start
```





# Set up env file 
- Create .env file in root directory of project

```env
PORT=<your port here>
BASE_URL=http://localhost
NODE_ENV=development
MONGO_URI=<your mongo db connection string here>
ACCESS_TOKEN_SECRET=<any random value of your choice that act as secret>
```










- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
