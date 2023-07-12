let pageurl = "signin.html";

switch(pageurl){
    case "login.html":
        console.log("Display login.html file");
    break;

    case "home.html":
        console.log("Display home.html file");
    break;

    case "signup.html":
    case "register.html":
        console.log("Display register.html file");
    break;

    default:
        console.log("Display Welcome.html file");
}