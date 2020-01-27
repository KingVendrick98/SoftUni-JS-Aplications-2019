import {
    getHome
} from "./controllers/homeController.js";
import {
    getLogin,
    getRegister,
    postRegister,
    logoutUser,
    postLogin
} from "./controllers/userController.js";
import {
    getCreate,
    postCreate,
    getDetails,
    getEdit
} from "./controllers/eventController.js";

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get("#/home", getHome);

    this.get("#/login", getLogin);
    this.post("#/login", postLogin);

    this.get("#/register", getRegister);
    this.post("#/register", postRegister);

    this.get("#/logout", logoutUser);

    this.get("#/create", getCreate);
    this.post("#/create", postCreate);

    this.get("#/details/:id", getDetails);
    this.get("#/edit/:id", getEdit);
})

app.run("#/home");