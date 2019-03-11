(function(){
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
        author: 'Bortnovskiy Gleb',
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
function compareDates(a, b){
    return a.createdAt - b.createdAt;
}

function getPhotoPosts(skip, top, filterConfig = ''){
    let res = photoPosts.slice(skip, skip + top);
    res.sort(compareDates);
    if(filterConfig !== ''){
        res = res.filter(function(element){
            for(key in filterConfig){
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

function getPhotoPost(i){
    for (let index = 0; index < photoPosts.length; index++) {
        const element = photoPosts[index];
        if(element.id === i) return element;
    }
}

function validatePhotoPost(post){
    if(typeof(post.id) === undefined) return false;
    if(typeof(post.description) === undefined) return false;
    if(typeof(post.createdAt) === undefined) return false;
    if(typeof(post.author) === undefined) return false;
    if(typeof(post.photoLink) === undefined) return false;
    return true;
}

function addPhotoPost(post){
    if(validatePhotoPost(post) === true){
        photoPosts.push(post);
        return true;
    }
    return false;
}

function editPhotoPost(id, photoPost){
    let post = getPhotoPost(id);
    if(validatePhotoPost(post) == true){
        for(key in photoPost){
            post[key] = photoPost[key];
        }
        return true;
    }
    return false;
}

function removePhotoPost(id){
    post = getPhotoPost(id);
    if(post !== undefined){
        index = photoPosts.indexOf(post);
        photoPosts.splice(index, 1);
    }
}
}());