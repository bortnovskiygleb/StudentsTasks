class PostCollection{
    constructor(posts){
        var _posts = posts;
        this.setPosts = function(posts){_posts = posts}
        this.getPosts = function(){return _posts}
    }

    getPage(skip, top, filterConfig=''){
    let res = this.getPosts().slice(skip, skip + top);
    res.sort(function compareDates(a, b){return b.createdAt - a.createdAt})
    if(filterConfig !== ''){
        res = res.filter(function(element){
            for(let key in filterConfig){
                switch (key) {
                    case 'author':
                    if(element.author === filterConfig.author) return true;
                    break;
                    case 'createdAt':
                    if(element.createdAt === filterConfig.createdAt) return true;
                    break;
                    case 'hashTags':
                    let f = true;
                    if(element.hashTags.length === filterConfig.hashTags.length){
                        for (let i = 0; i < element.hashTags.length; i++) {
                            const e = element.hashTags[i];
                            if(e !== filterConfig.hashTags[i]){
                                f = false;
                                break;
                            }
                            if(f === true) return true;            
                        }
                    }
                    break;
                    default:
                        return false;
                }
            }
        });
    }
    return res;
    }

    get(id){
        let arr = this.getPosts();
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if(element.id === id) return element;
        }
    }

    static _validate(post){
        if(typeof(post.id) === "undefined") return false;
        if(typeof(post.description) === "undefined") return false;
        if(typeof(post.createdAt) === "undefined") return false;
        if(typeof(post.author) === "undefined") return false;
        if(typeof(post.photoLink) === "undefined") return false;
        return true;
    }

    edit(id, photoPost){
        let post = this.get(id);
        if(PostCollection._validate(photoPost) == true){
        for(let key in photoPost){
            post[key] = photoPost[key];
        }
        this.getPosts().sort(function compareDates(a, b){return a.createdAt - b.createdAt});
        this.save();
        return true;
    }
    return false;
    }

    remove(id){
        let post = this.get(id);
        if(post !== undefined){
            let index = this.getPosts().indexOf(post);
            this.getPosts().splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }

    add(post){
        let oldPost = this.getPosts();
        let maxx = parseInt(oldPost[0].id);
        for (let index = 1; index < oldPost.length; index++) {
            if(maxx < parseInt(oldPost[index].id)) maxx = parseInt(oldPost[index].id);
        }
        post.id = String(maxx + 1);
        post.createdAt = new Date();
        post.likes = [];
        post.author = pager.getUserName();
        if(post.hashTags[0] === "")
            post.hashTags = [];
        console.log(post);
        if(PostCollection._validate(post) === true){
            oldPost.unshift(post);
            oldPost.sort(function compareDates(a, b){return a.createdAt - b.createdAt})
            this.save();
            return true;
        }
        else return false;
    }

    getPostsCount(){
        return this.getPosts().length + 1;
    }

    getPostPosition(post){
        for (let index = 0; index < this.getPosts().length; index++) {
            const element = this.getPosts()[index];
            if(post.createdAt < element.createdAt)
                return index - 1;
        };
        return 0;
    }

    addAll(posts){
        let res = [];
        let oldPost = this.getPosts();
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            if(PostCollection._validate(post) === true){
                oldPost.push(post);
                this.save();
            }
            else{
                res.push(post);
            }
        }
        return res;
    }

    like(id, name){
        let post = this.get(id);
        post.likes[post.likes.length] = name;
        this.save();
    }

    unlike(id, name){
        let post = this.get(id);
        post.likes.splice(post.likes.indexOf(name), 1);
        this.save();
    }

    clear(){
        let array = this.getPosts();
        while (array.length > 0) {
            this.remove(array.pop())
        }
        this.save();
    }

    save(){
        let posts = this.getPosts();
        let strPosts = JSON.stringify(posts);
        localStorage.setItem("postList", strPosts);
    }

    restore(){
        let strPosts = localStorage.getItem("postList");
        let posts = JSON.parse(strPosts);
        for (let i = 0; i < posts.length; i++) {
            const p = posts[i];
            p.createdAt = new Date(p.createdAt);
        }
        //posts.sort(function compareDates(a, b){return a.createdAt - b.createdAt});
        this.setPosts(posts);
    }
}