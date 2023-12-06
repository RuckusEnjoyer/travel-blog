const newPost = async (event) => {
    event.preventDefault();
    const blog_title = document.querySelector("#blog-title").value.trim();
    const blog_content = document.querySelector("#blog-content").value.trim();
    const user_id = sessionStorage.getItem('user_id')

    if (blog_title && blog_content) {
        const location_id = window.location.pathname.split("/").pop();
        // console.log(pathArray)
        // const location_id = pathArray[pathArray.length];
        console.log(location_id)
        const response = await fetch("/api/blogs", {
            method: "POST",
            body: JSON.stringify({ blog_title, blog_content, user_id, location_id }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to create blog");
        }
    }
}
document.querySelector(".new-blog-form").addEventListener("submit", newPost);