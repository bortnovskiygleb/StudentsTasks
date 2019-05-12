let pager = (function(){
    let userName = "";
    let pagePosts = "";
    let oldPost = {};
    //let pagePosts = new PostCollection(posts);
    return {
        setPageUser(user){
            pageView = new View(user);
            userName = user;
            pagePosts.getPage(0,pagePosts.getPostsCount() - 1).forEach(element => {
                if(element.author === user){
                    this.authorization(element);
                }
                if(userName !== ""){
                    document.getElementById("like_post" + element.id).addEventListener("click", function(){
                        pager.likePost(element);
                    });
                    if(element.likes.indexOf(userName) != -1){
                        document.getElementById("count_likes" + element.id).innerHTML = "liked "+ element.likes.length;
                        document.getElementById("heart" + element.id).src = "heart_red.jpg";
                    }
                }
            });
        },
        setPosts(posts){
            pageView = new View("");
            userName = "";
            pagePosts = new PostCollection(posts);
            this.createPage();
        },

        getUserName(){
            return userName;
        },
        getPagePosts(){
            return pagePosts;
        },
        hasName(post){
            let f;
            pagePosts.getPage(0,pagePosts.getPostsCount() - 1).forEach(element => {
                if(element.author == post.author) f = true;
            });
            if(f == true){
                return true;
            }else{
                return false;
            }
        },
        addPost(post){
            if(pagePosts.add(post)){  
                let postpos = pagePosts.getPostPosition(post);
                if(postpos < pagePosts.getPostsCount()-1){   
                    pageView.insertPost(post,postpos);
                    if(pager.hasName(post) == false){
                        pageView._addUserFilter(post);
                    }
                }
                else{
                    pageView.showPost(post);
                    if(pager.hasName(post) == false){
                        pageView._addUserFilter(post);
                    }
                }
                document.getElementById("remove_post" + post.id).addEventListener("click", function(){
                    pager.removePost(post);
                });
                document.getElementById("change_post" + post.id).addEventListener("click", function(){
                    pager.changePost(post);
                });
                document.getElementById("like_post" + post.id).addEventListener("click", function(){
                    pager.likePost(post);
                });
                
                
                return true;
            } 
            return false;
        },
        createPage(){ 
            pagePosts.getPage(0,pagePosts.getPostsCount() -1).forEach(post => {
                pageView.showPost(post);
                pageView._addUserFilter(post);
                                
            });
        },
        removePost(post){
            if(pagePosts.remove(post.id)){
                pageView.removePost(post.id);
                if(pager.hasName(post) == false){
                    pageView._removeUserFilter(post.id);
                }
                return true;
            }
            return false;
        },
        authorization(post){
            if(pagePosts.edit(post.id,post)){
                pageView.editPost(post.id, post);
                    document.getElementById("remove_post" + post.id).addEventListener("click", function(){
                        pager.removePost(post);
                    });
                    document.getElementById("change_post" + post.id).addEventListener("click", function(){
                        pager.changePost(post);
                    });                
            }
        },
        editPost(id, post){
            if(pagePosts.edit(id,post)){
                pageView.editPost(id, post);
                if(post.author === userName){
                    document.getElementById("remove_post" + post.id).addEventListener("click", function(){
                        pager.removePost(post);
                    });
                    document.getElementById("change_post" + post.id).addEventListener("click", function(){
                        pager.changePost(post);
                    });
                }
                return true;
            }
            return false;
        },
        changePost(post) {
            document.getElementsByClassName("user")[0].style.display = "none";
            document.getElementsByClassName("content")[0].style.display = "none";
            document.getElementById("add_photopost_all").style.display = "block";
            let change_photopost = document.getElementById("add_photopost_all");
            change_photopost.querySelectorAll("textarea")[0].value = post.description;
            change_photopost.querySelectorAll("textarea")[1].value = post.hashTags.join(" ");
            change_photopost.querySelector("#image__post").src = post.photoLink;
            document.getElementById("btn_add").style.display = "none";
            document.getElementById("btn_chng").style.display = "block";
            oldPost = post;
        },
        changePostClick() {
            let add_photopos = document.getElementById("add_photopost_all");
            let descr = add_photopos.querySelectorAll("textarea")[0].value;
            let newPost = {};
            newPost.id = oldPost.id;
            newPost.author = oldPost.author;
            newPost.description = descr;
            newPost.createdAt = oldPost.createdAt;
            newPost.likes = [];
            for (let index = 0; index < oldPost.likes.length; index++) {
                newPost.likes[index] = oldPost.likes[index];
            }
            let hashTags = add_photopos.querySelectorAll("textarea")[1].value.split(" ");
            newPost.hashTags = hashTags;
            newPost.photoLink = add_photopos.querySelector("#image__post").src;
            pager.editPost(newPost.id, newPost);
            document.getElementsByClassName("user")[0].style.display = "flex";
            document.getElementsByClassName("content")[0].style.display = "grid";
            document.getElementById("add_photopost_all").style.display = "none";
            add_photopos.querySelectorAll("textarea")[0].value = "";
            add_photopos.querySelectorAll("textarea")[1].value = "";
            add_photopos.querySelector("#image__post").src = "";
            document.getElementById("btn_add").style.display = "block";
            document.getElementById("btn_chng").style.display = "none";
        },
        likePost(post){
            if(post.likes.indexOf(userName) == -1){
                pagePosts.like(post.id, userName);
                document.getElementById("count_likes" + post.id).innerHTML = "liked "+ post.likes.length;
                document.getElementById("heart" + post.id).src = "heart_red.jpg";
            }else{
                pagePosts.unlike(post.id, userName);
                document.getElementById("count_likes" + post.id).innerHTML = post.likes.length;
                document.getElementById("heart" + post.id).src = "heart.jpg";
            }
        },
        userNameFilter(){
            let filter = document.getElementById("userNameFilter").value;
            posts = pagePosts.getPosts();
            for (let i = 0; i < posts.length; i++) {
                document.getElementById("postNumber" + posts[i].id).style.display = "block";
            }
            if(filter != "Select name user"){
                for (let i = 0; i < posts.length; i++) {
                    if(posts[i].author != filter){
                        document.getElementById("postNumber" + posts[i].id).style.display = "none";
                    }
                    
                }
            }
        },
        tagFilter(){
            let filter = document.getElementById("tagFilter").value;
            posts = pagePosts.getPosts();
            for (let i = 0; i < posts.length; i++) {
                document.getElementById("postNumber" + posts[i].id).style.display = "block";
            }
            if(filter != ""){
                for (let i = 0; i < posts.length; i++) {
                    if(posts[i].hashTags.indexOf(filter) == -1){
                        document.getElementById("postNumber" + posts[i].id).style.display = "none";
                    }
                    
                }
            }
        },
        restore(){
            pageView = new View("");
            posts = [];
            pagePosts = new PostCollection(posts);
            pagePosts.restore();
            this.createPage();
        }
    }
}());
document.getElementById("userNameFilter").addEventListener("change", pager.userNameFilter);
document.getElementById("tagFilter").addEventListener("change", pager.tagFilter);
document.getElementsByClassName("input__enter__sign__in")[2].addEventListener("click", pager.changePostClick);
//pager.setPageUser("");
// pager.setPosts( [
//     {id: '1',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum ad aspernatur quis aliquid provident nisi id obcaecati sint distinctio!',
//     createdAt: new Date('2005-10-20T23:00:00'),
//     author: 'Ivanov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Sidorov"],
//     hashTags : ["#sunny"]
//    },

//    {id: '2',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum ad aspernatur quis aliquid provident nisi id obcaecati sint distinctio!',
//     createdAt: new Date('2016-01-23T23:15:00'),
//     author: 'Petrov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Grealish","Sidorov"],
//     hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]
//    },

//    {id: '4',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     createdAt: new Date('2001-03-12T11:11:00'),
//     author: 'Gleb',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Grealish","Sidorov","Snow"],
//     hashTags : ["#color"]

//    }]);
   pager.restore();
//pager.addPost({id: "5",author:"Gleb",description:"ADD Great Day",createdAt:new Date('2002-02-22'),photoLink:"Minsk2.JPG",hashTags:["#COLOR","#RED"],likes:["Petrov"]});
//pager.removePost("5")
//pager.editPost("4", {id: '4',
//     description: 'Great Player',
//     createdAt: new Date('2001-03-12T11:11:00'),
//     author: 'Gleb',
//     photoLink: 'Minsk2.JPG',
//     likes : ["Petrov","Grealish","Sidorov","Snow"],
//     hashTags : ["#color", "#my city"]
//    });