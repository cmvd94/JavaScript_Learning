
/***********************************************/
//higher order fun
import { posts } from "./higheroderfunction.js";

//it works like a for loop

//console.log(posts[0])

/*
posts.forEach((post) =>{

   console.log(post);

});
console.clear();
*/

const filterPosts = posts.filter((post) => { 
   return post.userId === 5
   //return post.id === 5;
});
console.log(filterPosts);


const mapPost = filterPosts.map((post) => {
   return post.id;
})
console.log(mapPost);