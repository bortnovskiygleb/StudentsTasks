function addPostClick() {
    let add_photopos = document.getElementById("add_photopost_all");
    let descr = add_photopos.querySelectorAll("textarea")[0].value;
    let newPost = {};
    newPost.description = descr;
    let hashTags = add_photopos.querySelectorAll("textarea")[1].value.split(" ");
    newPost.hashTags = hashTags;
    newPost.photoLink = add_photopos.querySelector("#image__post").src;
    pager.addPost(newPost);
    document.getElementsByClassName("user")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.display = "grid";
    document.getElementById("add_photopost_all").style.display = "none";
    add_photopos.querySelectorAll("textarea")[0].value = "";
    add_photopos.querySelectorAll("textarea")[1].value = "";
    add_photopos.querySelector("#image__post").src = "";
}

function addPost(){
    document.getElementsByClassName("user")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementById("add_photopost_all").style.display = "block";    
}

function signIn(){
    document.getElementsByClassName("user")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementById("name__user").style.display = "none";
    document.getElementsByClassName("sign_in_main")[0].style.display = "block";
}

function signInEnter(){
    let signInArea = document.getElementsByClassName("sign_in_main")[0];
    let newUser = {};
    newUser.name = signInArea.querySelector("input").value;
    pager.setPageUser(newUser.name);
    document.getElementsByClassName("user")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.display = "grid";
    document.getElementById("name__user").style.display = "block";
    document.getElementsByClassName("sign_in_main")[0].style.display = "none";
}

function logIn(){
    document.getElementsByClassName("user")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementById("name__user").style.display = "none";
    document.getElementsByClassName("login_main")[0].style.display = "block";
}

function logInEnter(){
    let signInArea = document.getElementsByClassName("login_main")[0];
    let newUser = {};
    newUser.name = signInArea.querySelector("input").value;
    pager.setPageUser(newUser.name);
    document.getElementsByClassName("user")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.display = "grid";
    document.getElementById("name__user").style.display = "block";
    document.getElementsByClassName("login_main")[0].style.display = "none";
}

function signInFromLogIn(){
    document.getElementsByClassName("login_main")[0].style.display = "none";
    signIn();   
}

function logInFromSignIn(){
    document.getElementsByClassName("sign_in_main")[0].style.display = "none";
    logIn();
}

function back(){
    document.getElementsByClassName("user")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.display = "grid";
    document.getElementById("name__user").style.display = "block";
    document.getElementsByClassName("sign_in_main")[0].style.display = "none";
    document.getElementsByClassName("login_main")[0].style.display = "none";
    document.getElementById("add_photopost_all").style.display = "none";
    let add_photopos = document.getElementById("add_photopost_all");
    add_photopos.querySelectorAll("textarea")[0].value = "";
    add_photopos.querySelectorAll("textarea")[1].value = "";
    add_photopos.querySelector("#image__post").src = "";
    document.getElementById("btn_add").style.display = "block";
    document.getElementById("btn_chng").style.display = "none";
}

document.getElementById("f__post").addEventListener("change",function(events){
    var reader = new FileReader();
        let files = events.target.files;
        reader.onloadend = function(){
            let img = document.getElementById('image__post');
            img.src = reader.result;
        };
    
    reader.readAsDataURL(files[0]);
});

document.getElementById("add-but").addEventListener("click", addPost);
document.getElementsByClassName("input__enter__sign__in")[1].addEventListener("click", addPostClick);

document.getElementById("sign_in").addEventListener("click", signIn);
document.getElementById("input__enter__sign__in").addEventListener("click", signInEnter);

document.getElementById("log_in").addEventListener("click", logIn);
document.getElementById("input__enter__log__in").addEventListener("click", logInEnter);

document.getElementsByClassName("login__link__log__in")[0].addEventListener("click", signInFromLogIn);
document.getElementsByClassName("login__link__sign__in")[0].addEventListener("click", logInFromSignIn);

document.getElementById("back_to_start_sign_in").addEventListener("click", back);
document.getElementById("back_to_start_log_in").addEventListener("click", back);
document.getElementById("back_to_start_add_in").addEventListener("click", back);
