import React from "react";

const Effect = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    console.log("Hello");
    const loadingPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      const post = await response.json();

      setPosts(post);
    };

    loadingPost();
  }, []);

  return (
    <div>
      {posts.map((item) => {
        return (
          <div>
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Effect;
