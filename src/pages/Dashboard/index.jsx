import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

export default function Dashboard() {
  const [quill, setQuill] = useState("");
  return (
    <div>
      <form action="">
        <div className="input-form">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="input-form">
          <label htmlFor="img" className="file-upload">
            Upload Image
          </label>
          <input type="file" name="img" id="img" className="file-input" />
        </div>
        <div className="input-form">
            <select name="" id="" className="select-type">
              <option value="">----type blog----</option>
              <option value="">city blog</option>
              <option value="">blog biasa</option>
            </select>
        </div>

        <ReactQuill theme="snow"  value={quill} onChange={setQuill} />
      </form>
    </div>
  );
}
