// * Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates.
// The API endpoints for getting posts are:
// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts
// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.

// Example of how the function should be used
// // getFastPosts() code here...

// getFastPosts().then((posts) => {
//     console.log(posts)
// })*/

//fetch posts from the apis
// use promise .race()
getFastPosts = () => {
  const post1 = fetch("https://dummyjson.com/posts");
  //   const post2 = fetch("https://this-may-not-exist.com/posts");
  const post3 = fetch("https://jsonplaceholder.typicode.com/posts");
  Promise.race([post1, post3])
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

getFastPosts();
