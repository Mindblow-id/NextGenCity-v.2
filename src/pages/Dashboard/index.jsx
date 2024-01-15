import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

export default function Dashboard() {
  const [quill, setQuill] = useState("");
  const [img, setImg] = useState();
  const [form, setForm] = useState({
    title: "",
    type: "",
    img: "",
  });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files);
      setForm({ ...form, img: URL.createObjectURL(event.target.files[0]) });
      setImg(event.target.files[0]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("title", form.title);
    payload.append("type", form.type);
    payload.append("image", img);
    payload.append("content", quill);

    try {
      const response = await (
        await fetch("http://localhost:4000/blog", {
          body: payload,
          method: "POST",
        })
      ).json();

      alert(response.msg);
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <div>
      <form method="POST" onSubmit={onSubmit}>
        <div className="input-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            name="title"
            id="title"
          />
        </div>
        <div className="input-form">
          <h5>Upload Image</h5>
          <label htmlFor="img" className="file-upload">
            Upload Image
          </label>
          <input
            onChange={onImageChange}
            type="file"
            name="img"
            id="img"
            className="file-input"
          />
        </div>
        <img src={form.img} alt="" />
        <div className="input-form">
          <label htmlFor="type">Type Blog</label>
          <select
            name="type"
            id="type"
            className="select-type"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          >
            <option value="">----type blog----</option>
            <option value="city">city blog</option>
            <option value="blog">blog biasa</option>
          </select>
        </div>
        <h5>Content</h5>
        <ReactQuill theme="snow" value={quill} onChange={setQuill} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
