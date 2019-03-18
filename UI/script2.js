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
        return true;
    }
    return false;
    }

    remove(id){
        let post = this.get(id);
        if(post !== undefined){
            let index = this.getPosts().indexOf(post);
            this.getPosts().splice(index, 1);
    }
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
let photoPosts = [
    {
        id: '1',
        description: 'a',
        createdAt: new Date('2019-03-09T22:00:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task4',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '2',
        description: 'b',
        createdAt: new Date('2019-03-09T22:00:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task3',
        hashTags: ['#BSU','#Belarus'],
        likes: ['Anna'],
    },
    {
        id: '3',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '4',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '5',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '6',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '7',
        description: 'c',
        createdAt: new Date('2019-02-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '8',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '9',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '10',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '11',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '12',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '13',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '14',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '15',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '16',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '17',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '18',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '19',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '20',
        description: 'c',
        createdAt: new Date('2019-03-09T22:01:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task2',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
];
let postList = new PostCollection(photoPosts);
console.log(postList.getPosts());
console.log(postList.getPage(0, 10));
console.log(postList.getPage(10, 10, {author: "Bortnovskiy Gleb"}));
console.log(postList.get('13'));
postList.edit("2", { photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg' });
console.log(postList.getPosts());
postList.remove("3");
console.log(postList.getPosts());
let newPosts = [
    {
        id: '21',
        description: 'new a',
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task4',
        hashTags: ['#BSU'],
        likes: ['Anna', 'Igor'],
    },
    {
        id: '22',
        description: 'new b',
        createdAt: new Date('2019-03-09T22:00:00'),
        author: 'Bortnovskiy Gleb',
        photoLink: 'https://sites.google.com/site/famcsbsu/labs/up/tasks/task3',
        hashTags: ['#BSU','#Belarus'],
        likes: ['Anna'],
    },
]
console.log(postList.addAll(newPosts));
console.log(postList.getPosts());
postList.clear();
console.log(postList.getPosts());

