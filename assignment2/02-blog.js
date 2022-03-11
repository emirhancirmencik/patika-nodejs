let posts = [
  { id: 1, text: "post1" },
  { id: 2, text: "post2" },
  { id: 3, text: "post3" },
];

function addPost(newPost) {
  const promise = new Promise((resolve, rejected) => {
    posts.push(newPost);
    resolve(posts);
    rejected("an error occurred");
  });

  return promise;
}

function listPosts() {
  posts.map((post) => console.log(post.text));
}

async function processData() {
  try {
    await addPost({ id: 4, text: "post4" });
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

processData();
