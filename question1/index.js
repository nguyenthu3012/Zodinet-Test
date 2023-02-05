// Giving an API endpoint: https://jsonplaceholder.typicode.com/posts.
// Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
// Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.
// (Optional) Create a UI that has 2 buttons: “Fetch” and “Create” that execute the two functions above.

const postApi = 'https://jsonplaceholder.typicode.com/posts'

document.querySelector('#fetch').addEventListener('click', () => {
    getPost(renderPost)

})

// GET POST API
const getPost = async (callback) => {
    await fetch(postApi)
        .then(response => response.json()) // JSON.parse: JSON => Javascript type
        .then(callback)
        // error 
        .catch(err => console.error(err))
}

// render Post
const renderPost = (posts) => {
    const arr = posts.slice(-6).map((post) => {
        return (
            `<tr>
                <th scope="row">${post.id}</th>
                <td>${post.userId}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
             </tr>`
        )
    })
    document.querySelector('tbody').innerHTML = arr.join('')
}

// Create Post 
const createCourse = async (data, callback) => {
    await fetch(postApi, {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(callback)
        .catch(err => console.error(err))

}

// Click submit post
document.querySelector('#create').addEventListener('click', () => {
    const userId = document.querySelector('input[name="uid"]').value
    const title = document.querySelector('input[name="title"]').value
    const content = document.querySelector('input[name="content"]').value

    const formData = {
        userId,
        title,
        content
    }

    createCourse(formData, () => {
        getPost(renderPost)
    })
})

// const start = () => {
//     getPost(renderPost)
// }

// start()


