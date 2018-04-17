# Typescript Project Boilerplate - yeoman generator

> Scaffolds out [TypeScript App Boilerplate] using yeoman


## Install

```
$ npm install generator-tsbp_bjt -g
```


## Usage

Create a new project folder within your workspace and run the `yo` command [`yo`](https://github.com/yeoman/yo):

```
$ yo tsbp_bjt
```

You will see a bunch of folders and files gets generated. To install the necessary dependencies, run

```
$ npm install
```

Once the dependencies are installed, run 

```
$ npm run webpack-watch
```

This will generate an `app.bundle.js` inside the `build` folder. The build will get updated automatically as you make changes to the files inside `src` folder.


## View the application

Run the below command in the root folder to start the server and view the application. You may ignore this step if a server is already running and you don't want to use this server.

```
$ npm start
```

Open your browser and navigate to - http://localhost:8080/


## Author

Balu John Thomas (BJT) [balujohnthomas@gmail.com]
