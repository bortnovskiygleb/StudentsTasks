let pager = (function(){
    return {
        setPageUser(user){
            pageView = new View(user);
        },
        setPosts(posts){
            pagePosts = new PostCollection(posts);
            this.createPage();
        },

        addPost(post){
            if(pagePosts.add(post)){  
                let postpos = pagePosts.getPostPosition(post);
                if(postpos < pagePosts.getPostsCount()-1){   
                    pageView.insertPost(post,postpos);
                }
                else{
                    pageView.showPost(post);
                }
                return true;
            } 
            return false;
        },
        createPage(){ 
            pagePosts.getPage(0,pagePosts.getPostsCount() -1).forEach(element => {
                pageView.showPost(element);
            });
        },
        removePost(id){
            if(pagePosts.remove(id)){
                pageView.removePost(id);
                return true;
            }
            return false;
        },
        editPost(id, post){
            if(pagePosts.edit(id,post)){
                pageView.editPost(id, post);
                return true;
            }
            return false;
        },
    }
}());

//pager.setPageUser("Gleb");
//pager.setPosts( [
//     {id: '1',
//     description: 'Great Day',
//     createdAt: new Date('2005-10-20T23:00:00'),
//     author: 'Ivanov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Sidorov"],
//     hashTags : ["#sunny"]
//    },

//    {id: '2',
//     description: 'Me and my friends',
//     createdAt: new Date('2016-01-23T23:15:00'),
//     author: 'Petrov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Grealish","Sidorov"],
//     hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]
//    },

//    {id: '4',
//     description: 'Great Player',
//     createdAt: new Date('2001-03-12T11:11:00'),
//     author: 'Gleb',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Grealish","Sidorov","Snow"],
//     hashTags : ["#color"]

//    }]);
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