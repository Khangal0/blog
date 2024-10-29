import { useRouter } from "next/navigation";
export const Parents = ({ children }) => {
  const home = useRouter();

  return (
    <div className="body123">
      <div className="header">
        <button className="headerHome" onClick={() => home.push(`/`)}>
          HOME
        </button>
        <button className="createPost" onClick={() => home.push(`/post`)}>
          CreatePost
        </button>
      </div>
      {children}
    </div>
  );
};
