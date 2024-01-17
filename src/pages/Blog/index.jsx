import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../component/Footer";
import "./style.css";
import Navbar from "../../component/Navbar";
import axios from "axios";

function Blog() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const getBlog = async () => {
    setLoading(true);
    try {
      const response = await (
        await axios.get("http://localhost:4000/blog/" + slug)
      ).data;

      if (response.status === "success") {
        console.log(response);
        setBlog(response.data);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="blog">
        {blog ? (
          <>
            <div className="background-img">
              <img
                className=""
                src={"http://localhost:4000/img/" + blog.image}
                alt="blog"
              />
            </div>
            <h1 id="title" className="title">
              {blog.title}
            </h1>
            <div className="img">
              <img src={"http://localhost:4000/img/" + blog.image} alt="blog" />
            </div>
            <div
              id="content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </>
        ) : loading ? (
          <div className="loading"></div>
        ) : (
          <h1 className="not-found">404 Not found</h1>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Blog;
