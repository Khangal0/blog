import { useRouter } from "next/navigation";

const Page = (props) => {
  const post = props.post;
  const { id } = post;
  const router = useRouter();
  const redirect = () => {
    router.push(`${id}`);
  };
  return (
    <div className="post">
      <div>
        <img className="img" src={post.social_image} />
      </div>

      <div>
        <button onClick={() => redirect()} className="button">
          Technology
        </button>

        <div className="word">
          <div className="title">{post.title}</div>

          <div className="profile">
            <div>
              <img className="profileIMG" src={post.user.profile_image_90} />
            </div>
            <div className="name">{post.user.name}</div>
            <div className="date">{post.readable_publish_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
