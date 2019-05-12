//let m = new View("Ivanov");
//m.showPost({author:"Petrov",description:"Great Day",createdAt:new Date(),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"]});
//m.showPost({author:"Ivanov",description:"Great Day",createdAt:new Date(),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"]});
//m.removePost({author:"Petrov",description:"Great Day",createdAt:new Date(),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"]});
let pager = (function(){
    return {
        setPageUser: function (user)
        {
            pageView = new View(user);
        },
        setPosts: function (posts)
        {
            pagePosts = new PostCollection(posts);
            this.createPage();
        },
        showPosts: function()
        {
            console.log(pagePosts.getPage(0, 3))
        },
        addPost: function(post)
        {
            if(pagePosts.add(post))
            {  
                let postpos = pagePosts.getPostPosition(post);
                console.log(postpos);
                if(postpos < pagePosts.getPostsCount()-1)
                {   
                    pageView.insertPost(post,postpos);
                }
                else{
                    pageView.showPost(post);
                }
                return true;
            } 
            return false;
        },
        createPage: function()
        { 
            pagePosts.getPage(0,10).forEach(element => {
                pageView.showPost(element);
            });
        },
        removePost: function(post)
        {
            if(pagePosts.getPostPosition(post) > -1)
             {
                pageView.removePost(post);
                 return true;
            }
        return false;
        },
        editPost: function (post)
        {
            if(pagePosts.edit(post.id,post))
            {
                pageView.editPost(post);
                return true;
            }
            return false;
        }
    }
}());
//pager.setPageUser("Programmer");
pager.setPosts( [
    {id: '1',
    description: 'Great Day',
    createdAt: new Date('2005-02-20T23:00:00'),
    author: 'Ivanov',
    photoLink: 'img/Picture.jpg',
    likes : ["Petrov","Sidorov"],
    hashTags : ["#sunny"]
   },

   {id: '2',
    description: 'Me and my friends',
    createdAt: new Date('2016-01-23T23:15:00'),
    author: 'Petrov',
    photoLink: "img/Picture.jpg",
    likes : ["Grealish","Sidorov"],
    hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]
   },

   {id: '4',
    description: 'Great Player',
    createdAt: new Date('2001-03-12T11:11:00'),
    author: 'Sidorov',
    photoLink: 'img/Picture.jpg',
    likes : ["Petrov","Grealish","Sidorov","Snow"],
    hashTags : ["#color"]

   }]);
pager.showPosts()
   //pager.removePost({id: "2",author:"Petrov",description:"Me and my friends",createdAt:new Date('2016-01-23T23:15:00'),photoLink:"img/Picture.jpg",hashTags:["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"],likes:["Grealish","Sidorov"]});
//pager.addPost({id: "13",author:"Programmer",description:"Great Day",createdAt:new Date('2005-02-03T23:00:00'),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"],likes:["Petrov"]});
//pager.editPost({id: "1",author:"Ivanov",description:"RONNEY GOAL",createdAt:new Date('2005-02-20T23:00:00'),photoLink:"img/Ronney.jpg",hashTags:["#sunny"],likes:["Petrov","Sidorov"]});
//pager.addPost({id: "5",author:"Ivanov",description:"ADD Great Day",createdAt:new Date('2006-02-14'),photoLink:"img/Picture.jpg",hashTags:["#COLOR","#RED"],likes:["Petrov"]});