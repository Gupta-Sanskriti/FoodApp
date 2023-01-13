# FoodApp

<div>
    <h1> Commands </h1>
    <ul>
        <li>To run the dev build -- npm startDev </li>
        <li>To run the production build -- npm startBuild</li>
    </ul>
</div>

<div>
    <h1>To construct this app </h1>
    <h3>For the basic understanding of the website, you can take the reference from the <strong><a href="./website_layout.jpg">website_layout.jpg</a></strong></h3>
    <img src="./website_layout.jpg"/>
    <p>To construct this app you need some dependencies like parcel, react, react-dom, browserlists, etc. so run the commands given below to create this react app.</p>
    <h2>To create app and install the dependencies and run these commands.</h2>
    <ul>
        <li>To start the react app: <p>npm init -y</p></li>
        <li>To install react: <p>npm i react </p></li>
        <li>To install react-dom: <p>npm i react-dom </p></li>
        <li>To install parcel: <p>npm i parcel </p></li>
        <li>To install browserlist: <p>npm i browserlist</p></li>
        <li>Create app.js file: <p>touch app.js</p></li>
        <li>Create index.html file: <p>touch index.html </p></li>
        <li>Create git ignore file: <p>touch .gitignore </p></li>
    </ul>
    <h2>After installing all these dependencies and creating these files, do these following changes in the package.json </h2>
    <ul>
        <li>In the package.json file go to the script section add the dev start and production start
            <p>
                "script":{
                    "startDev":"parcel index.html",
                    "startBuild":"parcel build index.html"
                }
            </p>
        </li>
        <li>Remove the "main" in the package.json</li>
        <li>To add browserlist to your code add the below statement in your code. 
            <p>
                "browserslist": [
                    "last 2 versions"
                 ]
            </p>
        </li>
        <li>
            <p></p>
        </li>
    </ul>

</div>

