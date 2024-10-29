"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Parents } from "@/component/Parents";

const Page = () => {
  const [blog, setBlog] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    const api = async () => {
      const fetchData = await fetch(`https://dev.to/api/articles/${pathName}`);
      const jsonData = await fetchData.json();
      console.log(jsonData);
      setBlog(jsonData);
    };
    api();
  }, []);

  if (blog.length == 0) return "Loading...";

  return (
    <Parents>
      <div className="infoPage">
        <div>
          <div className="infoTitle">{blog.title}</div>
          <div className="infoProfile">
            <div>
              <img className="profileIMG" src={blog.user.profile_image_90} />
            </div>
            <div className="infoName">{blog.user.name}</div>
            <div className="infoDate">{blog.readable_publish_date}</div>
          </div>
          <div>
            <img className="infoImg" src={blog.social_image} />
          </div>
          <div className="infoDescription">{blog.description}</div>
          <div className="infoUser">
            <div>Twitter_name: {blog.user.twitter_username}</div>
            <div>Github_name: {blog.user.github_username}</div>
          </div>
        </div>
      </div>
    </Parents>
  );
};

export default Page;
