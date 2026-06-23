function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Ram" });
    }, 2000);
}

getUser(1, (user) => {
    console.log("User:", user);
    console.log("Name:", user.name);
});
