import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import "./style.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function ListBlog() {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/blog");
      const data = response.data;
      if (data.status === "success") {
        setBlogs(data.data);
      }
    } catch (error) {
      console.log(error);
      alert(error.msg);
    } finally {
      setLoading(false);
    }
  };

  const blogOnClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <header>
        <h1 className="header-title">BLOGS</h1>
        <h5>News and Technology Updates</h5>
      </header>
      <div className="blog">
        <div className="blog-container">
          {blogs && blogs.map((blog) => (
            <section onClick={() => blogOnClick(blog.slug)} className="blog-card" key={blog.id}>
              <div className="img-container">
                <img
                  src={"http://localhost:4000/img/" + blog.image}
                  alt="blog"
                />
              </div>
              <h3>{blog.title}</h3>
              <div id="content-leak" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
