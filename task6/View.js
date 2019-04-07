class View{
    constructor(user){
        this._user = user;
        this._setUser(user);
    }

    _setUser(user){
        if(!!user){
            let list = document.getElementById("username");
            list.innerHTML = user;
            this._aboutUser();
            this._deleteInputer(user);
            this._createAddButton();

        }
    }

    _aboutUser(){
        let a = document.getElementsByClassName("user")[0];
        a.style.display = "flex";
    }

    _deleteInputer(user){
        let a = document.getElementsByClassName("header__link");
        a[0].innerHTML = "none";
        a[1].style.display = "none";
        let b = document.getElementById("name__user");
        b.innerHTML = `<div class="authorized__user">${user}</div>`;
    }

    _createAddButton(){
        let buttonAdd = document.getElementById("add-but");
        buttonAdd.style.display = 'block';
    }
    _createPost (post){
        let newPost = `<h3>${post.author}</h3>
        <h3> &nbsp &nbsp  ${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.
        ${post.createdAt.getFullYear()}</h3>
        <img class="post__image" src=${post.photoLink} width="500"><br>`;
        if(post.author === this._user){
            newPost = newPost +"<button class= delch-button type= submit>setting</button>"+
            "<button class=delch-button type=submit>Delete</button>";
        }
        newPost = newPost +"<button class=like-button type=submit>Like</button>"+
        "<p>"+post.description+"<br>";
        for(let i = 0 ; i < post.hashTags.length; i++){
            newPost = newPost + post.hashTags[i];
        }
        newPost = newPost + "</p>";
      return newPost;
    }

    _addUserFilter(post){
        let list = document.getElementById("user__list");
        let a = document.createElement('option');
        a.innerHTML = post.author;
        list.appendChild(a);
    }

    showPost(post){    
        let list = document.getElementById("lenta");
        let li = document.createElement('li');
        li.id = "postNumber" + post.id;
        li.innerHTML = this._createPost(post);
        list.appendChild(li);
        this._addUserFilter(post);
    }

    removePost(id){
        let list = document.getElementById("lenta");
        let elem = document.getElementById("postNumber" + id);
        list.removeChild(elem);
    }

    editPost(id, post){
        let elem = document.getElementById("postNumber" + id);
         elem.innerHTML = this._createPost(post);
    }

    insertPost(newPost,nextId){   
    let list = document.getElementById("lenta");
        let li = document.createElement('li');
        li.id = "postNumber"+newPost.id;
        li.innerHTML = this._createPost(newPost); 
        list.insertBefore(li,list.children[nextId]);
        this._addUserFilter(newPost);
    }
}