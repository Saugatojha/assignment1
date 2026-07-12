fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    document.getElementById("loading").remove();
    const list = document.getElementById("posts-list");
    posts.forEach(element => {
      const li = document.createElement("li");
      li.innerHTML = `<b>${element.title}</b> <p>${element.title}</p>`;
      list.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById("loading").textContent = "Failed to load data";
  });
  