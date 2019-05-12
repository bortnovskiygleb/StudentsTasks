class View{
    constructor(user){
        this._user = user;
        this._setUser(user);
        this.getUser = function(){
            return this._user;
        };
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
        //post.createdAt = new Date(post.createdAt);
        let newPost1 =`
        <section class="post">
            <header class="post__header flex">
                <div class="post__name flex">
                    <img class="user__card__icon font-icon" src="profiles_photo.jpg" width="40rem" height="40rem">
                    <div class="post-name-wrapper flex">
                        <h3>${post.author}</h3>
                        <h4 class="post__pubdate">${post.createdAt.getDate()}.${post.createdAt.getMonth()+1}.${post.createdAt.getFullYear()}</h4>
                    </div>
                </div>`
                
                if(post.author === this._user){
                    newPost1 = newPost1 + `
                <div class="post__controls">
                    <button id="change_post${post.id}" class="btn"  style="margin-right: 0.6em">
                        <img src="6.jpg" width="25rem" height="25rem">
                    </button>
                    <button id="remove_post${post.id}" class="btn">
                        <img src="crest.png" width="25rem" height="25rem">
                    </button>
                </div>`;
                }
                newPost1 = newPost1 + `
                </header>
                    <div class="post__image-wrapper">
                        <img class="post__image" src=${post.photoLink} width="500" alt="placeholder">
                    </div>
                  
                <footer class="post__footer flex">
                    <div class="post__tags">`
                    for(let i = 0 ; i < post.hashTags.length; i++){
                        newPost1 = newPost1 + `<span class="post__tag">${post.hashTags[i]}</span>`
                    }    
                    newPost1= newPost1 + `
                    </div>
                    <div class="post__like flex">
                        <div id="count_likes${post.id}" class="post__like__names">
                               
                            ${post.likes.length}                            
                        </div>
                        <button id="like_post${post.id}" class="like btn">
                            <img id="heart${post.id}" src="heart.jpg" height="25rem" width="25rem">
                        </button>    
                        </div>
                    </footer>
                    <p class="post__info">
                        ${post.description}
                    </p>
                </section>
        `
      return newPost1;
    }

    _addUserFilter(post){
        let list = document.getElementById("userNameFilter");
        let a = document.createElement('option');
        a.id = "op"+post.id;
        a.innerHTML = post.author;
        list.appendChild(a);
    }

    _removeUserFilter(id){
        let list = document.getElementById("user__list");
        let elem = document.getElementById("op" + id);
        list.removeChild(elem);
    }

    showPost(post){    
        let list = document.getElementById("lenta");
        let li = document.createElement('li');
        li.id = "postNumber" + post.id;
        li.innerHTML = this._createPost(post);
        list.appendChild(li);
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
    }
}