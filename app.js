let posts = [];

//get many posts
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    document.getElementById("posts").innerHTML  = data.map(
        (post) => `<div style="border-bottom: 1px solid grey; padding-bottom: 20px;>
        <p>${post.title}</p>
    </div>`
    ).join(""); //Join tar bort kommatecken
}

//post a post button
const postPost = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ //'stringifierar' objektet
            title:"Hejsan",
            body:"Hoppsan"
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    alert(JSON.stringify(data.title + " " + data.body + "!"));
}

window.addEventListener("load", () => {
    getPosts();
    document.querySelector("#post-button").addEventListener("click", postPost)
})