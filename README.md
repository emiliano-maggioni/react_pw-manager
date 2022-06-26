# react_pw-manager
Password Manager made with ReactJS, Typescript, Hooks, Material UI and other.
<br />

## Project details
The project has this folder structure:<br /><br />
- /public  with images and file as manifest.json<br />
- /src/components that contains all the reusable components (component that you can use in different views).<br />
- /contexts where you can see the files that use createContext of React.<br />
- /routes contains the file that manage all the routes of the application.<br />
- /utility contains the types of the application and the file callsAPI.tsx that has the necessary to do API rest with axios library.<br />
- /views folder contains the 3 views of this applications.<br />
<br />

This excercise is done with ReactJS, Typescript for the type management and to detect errors easily at the time of development (pre-compilation).
I used styled components, putting the style components in separate files for a better organization, Material UI for the icons and some elements (like the page steps component) for the form i've used react-hook-form, with Material UI (for the single inputs). The routing is done with react-router-dom.
The tests are done with jest library, i've tested component like TitleBar, Button and Loader.


<br />

## Get started 

To run project locally, once you have ReactJS working on your machine (NodeJS, Node Package Manager...) and you have installed the project dependencies (npm install) you can run npm start from your terminal.

```bash
npm start
```


## Version history

Version 1.0 (27-06-2022):
- Project released to User Acceptance Testing.

