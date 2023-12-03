const newPost = async (event) => {
    event.preventDefault();
    const blog_title = document.querySelector("#blog-title").value.trim();
    const blog_content = document.querySelector("#blog-content").value.trim();
    if (blog_title && blog_content) {
        const response = await fetch("/api/blogs", {
            method: "POST",
            body: JSON.stringify({ blog_title, blog_content }),
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