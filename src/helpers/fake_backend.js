import {getMx} from '../helpers'
// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let comments = JSON.parse(localStorage.getItem('comments')) || [];
let id = 0;
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {


                if (url.endsWith('/register') && opts.method === 'POST') {
                    
                    // validation for newUser (no dublicate for username)
                    let newUser = JSON.parse(opts.body);
                    let dublicateUsers = users.filter(u=>u.account.name == newUser.name)   
                     if(dublicateUsers && dublicateUsers.length > 0)
                         {reject('username is registered before');return}
                    // validate password should be greater than 3

                    if(newUser.pw.length <3)
                        {reject('password should be at least 4 digits');return}
                    // else intialise object for user 
                    // {id , account:{...newUser},posts{id:{2,4,3}}}
                    let user;
                    user = {id:users.length+1 , account:{...newUser},posts:{id:[]}}
                    users.push(user);
                    localStorage.setItem('users',JSON.stringify(users))
                    resolve({ ok: true, json: user });
                    return;
                }
                if (url.endsWith('/login') && opts.method === 'POST') {
                    
                    
                    let user = JSON.parse(opts.body);
                    
                    // search on user
                    let fndUser = users.filter(u=> u.account.name == user.name && u.account.pw == user.pw)
                    if(fndUser && fndUser.length > 0)
                    {   
                            resolve({ ok: true, json:fndUser[0] });
                            localStorage.setItem('user',JSON.stringify(fndUser[0]))
                    }   
                    reject('invalid username or password')
                }
                if (url.endsWith('/getpost') && opts.method === 'GET') {
                    let postId = JSON.parse(opts.body);
                    // search
                    let res = posts.filter(p=>p.id == postId)[0];
                    resolve({json:this.user});
                }
                if (url.endsWith('/addpost') && opts.method === 'POST') {
                    // add this post in posts array
                    // add id post to the  user
                     let user = JSON.parse(localStorage.getItem('user'));
                     let req  = JSON.parse(opts.body);
                    let post = {
                        txt : req.txt,
                        id:posts.length+1,
                        likes:{usersId:[]},
                        shares:{usersId:[]},
                        commentsId:[],
                        userId:user.id,
                        action:{
                            shared:false,
                            postSharedId:'',
                            mentioned:req.mentionedUser != -1 && req.mentionedUser != user ? true : false,
                            mentionedUser:req.mentionedUser,
                            mentioner:user.account.name
                        }
                    }
                    
                    posts.push(post);
                    localStorage.setItem('posts',JSON.stringify(posts))
                    // get the user from localStorage and add idPost to him

                    user.posts.id.push(post.id) 
                    localStorage.setItem('user',JSON.stringify(user))
                    // edit info of the user in users array in localstorage

                     users = users.map(function (u){ 
                        if(u.id == user.id) 
                            return user; 
                        else if( u.id == post.action.mentionedUser.id)
                            return {...u,posts:{id:[...u.posts.id,post.id]}}
                        else  
                            return u
                    })
                    localStorage.setItem('users',JSON.stringify(users))

                    resolve({ok:true,json:{posts,users}})

                }
                if (url.endsWith('/handlelike') && opts.method === 'POST') {
                    // add userId to likes in post at posts array
                    let user = JSON.parse(localStorage.getItem('user'));
                    let req = JSON.parse(opts.body)
                    if(req.target == 'post')
                    {
                        posts = posts.map(
                            function(p)
                            {
                                if(p.id == req.targetId)
                                {
                                    if(!req.liked)
                                    {
                                     if(p.likes.usersId && p.likes.usersId.length > 0   )
                                     return{...p,likes:{usersId:[...p.likes.usersId,user.id]} } ;
                                     return{...p,likes:{usersId:[user.id]} } ;       
                                    }
                                    let ind = p.likes.usersId.indexOf(user.id);
                                    let arr = p.likes.usersId.splice(ind,1);
                                    return {...p,likes:{usersId:p.likes.usersId} }        
                                                                
                                } 
                             return p;
                             }
                         )
                        localStorage.setItem('posts',JSON.stringify(posts))

                        resolve({ok:200,json:posts})                        
                    }
                    else{
                        comments = comments.map(
                            function(c)
                            {
                                if(c.id == req.targetId)
                                {
                                    if(!req.liked)
                                    {
                                     if(c.likes.usersId && c.likes.usersId.length > 0   )
                                        return{...c,likes:{usersId:[...c.likes.usersId,user.id]} } ;
                                     return{...c,likes:{usersId:[user.id]} } ;       
                                    }
                                    let ind = c.likes.usersId.indexOf(user.id);
                                    let arr = c.likes.usersId.splice(ind,1);
                                    return {...c,likes:{usersId:c.likes.usersId} }        
                                                                
                                } 
                             return c;
                             }
                         )
                        localStorage.setItem('comments',JSON.stringify(comments))

                        resolve({ok:200,json:comments})                        

                    }

                }
    
                  if (url.endsWith('/addshare') && opts.method === 'POST') {
                    let user = JSON.parse(localStorage.getItem('user'));
                    let postId = JSON.parse(opts.body)
                    let newPost;
                    // add userId to post's shares array 
                    posts = posts.map(
                        function(p)
                        {
                            if(p.id == postId)
                            {
                            // add new post to posts array and make action.shared = true and postOwnerId:postOwnerId
                                newPost = {
                                    txt : p.txt,
                                    id:posts.length+1,
                                    likes:{usersId:[]},
                                    shares:{usersId:[]},
                                    commentsId:[],
                                    userId:user.id,
                                    action:{...p.action,shared:true,postSharedId:postId}
                                 }   
                                 if(p.shares.usersId && p.shares.usersId.length > 0   )
                                  return{...p,shares:{usersId:[...p.shares.usersId,user.id]} } ;
                                 else 
                                    return{...p,shares:{usersId:[user.id]} } ;       
                                                 
                            } 
                         return p;
                         }
                     )
                    posts.push(newPost)
                    user.posts.id.push(newPost.id)

                    localStorage.setItem('posts',JSON.stringify(posts))
                    localStorage.setItem('user',JSON.stringify(user))

                    users = users.map(function (u){ if(u.account.name == user.account.name) return user; else  return u})
                    localStorage.setItem('users',JSON.stringify(users))
                    resolve({ok:200,json:posts})
                }
                 if (url.endsWith('/addcomment') && opts.method === 'POST') {
                       let user = JSON.parse(localStorage.getItem('user'))
                       let req = JSON.parse(opts.body)
                        let newComment = {
                                id:comments.length+1,
                                userId:user.id,
                                likes:{usersId:[]},
                                txt:req.txt,
                                repliesId:[]
                            }
                    comments.push(newComment);
                    localStorage.setItem('comments',JSON.stringify(comments))

                    posts = posts.map(function(p){
                        if(p.id == req.postId)
                            return{
                                ...p,
                                commentsId:[...p.commentsId,newComment.id]
                            }

                        return p;
                    })
                    
                    localStorage.setItem('posts',JSON.stringify(posts))
                    resolve({ok:200,json:{posts:posts,comments:comments}})
                }

                    

                
                if (url.endsWith('/addreply') && opts.method === 'POST') {
                    let user = JSON.parse(localStorage.getItem('user'));
                    let req = JSON.parse(opts.body) 
                    let newReply = {
                                id:comments.length+1,
                                userId:user.id,
                                likes:{usersId:[]},
                                txt:req.txt,
                                repliesId:[],
                                mentionReplyId:req.mentioned ? req.replyId : -1 
                            }
                 comments = comments.map(function(c){
                        if(req.mentioned && c.id == req.replyId)
                            return{
                                ...c,
                                repliesId:[...c.repliesId,newReply.id]
                            }
                     if(c.id == req.cmntId)
                            return{
                                ...c,
                                repliesId:[...c.repliesId,newReply.id]
                            }
                        return c;
                    })      
                comments.push(newReply);              
                localStorage.setItem('comments',JSON.stringify(comments))
                 resolve({ok:200,json:comments}) 
            }

                


            }, 500);
        });
    }
}

