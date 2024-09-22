import useFetch from "../../hooks/useFetch";

const CommentList = () => {
  const { data, loading } = useFetch("https://dummyjson.com/comments");

  if (loading) return <h1>Fetching Comments! Please wait</h1>;

  return (
    <div>
      <h1 style={{ color: "red" }}>Comment list page</h1>

      <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((commentItem) => (
              <div
                style={{
                  borderStyle: "solid",
                  margin: "10px",
                  borderColor: "lightgreen",
                }}
                key={commentItem.id}
              >
                <label>{commentItem?.body}</label>
                <p>Likes: {commentItem?.likes}</p>
                <p>Username: {commentItem?.user?.username}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CommentList;
