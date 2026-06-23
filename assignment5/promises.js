function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

let userData;
let postsData;

getUser(1)
    .then((user) => {
        userData = user;
        return getPosts(user.id);
    })
    .then((posts) => {
        postsData = posts;
        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("User:", userData);
        console.log("Posts:", postsData);
        console.log("Comments:", comments);
    })
    .catch((err) => {
        console.log("Error:", err);
    });
