class PostCollection{
    constructor(posts){
        var _posts = posts;
        this.setPosts = function(posts){_posts = posts}
        this.getPosts = function(){return _posts}
        // this.posts = posts;
    }

    getPage(skip, top, filterConfig=''){
    let res = this.getPosts().slice(skip, skip + top);
    res.sort(function compareDates(a, b){return a.createdAt - b.createdAt})
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
        if(PostCollection._validate(post) == true){
        for(let key in photoPost){
            post[key] = photoPost[key];
        }
        this.getPosts().sort(function compareDates(a, b){return a.createdAt - b.createdAt});
        return true;
    }
    return false;
    }

    remove(id){
        let post = this.get(id);
        if(post !== undefined){
            let index = this.getPosts().indexOf(post);
            this.getPosts().splice(index, 1);
            return true;
        }
        return false;
    }

    add(post){
        let oldPost = this.getPosts();
        if(PostCollection._validate(post) === true){
            oldPost.push(post);
            oldPost.sort(function compareDates(a, b){return a.createdAt - b.createdAt})
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
        return -1;
    }

    addAll(posts){
        let res = [];
        let oldPost = this.getPosts();
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            if(PostCollection._validate(post) === true){
                oldPost.push(post);
            }
            else{
                res.push(post);
            }
        }
        return res;
    }

    clear(){
        let array = this.getPosts();
        while (array.length > 0) {
            this.remove(array.pop())
        }
    }
}