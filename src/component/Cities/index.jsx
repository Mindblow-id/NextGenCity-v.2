import React, { useEffect, useState } from "react";
import "./style.css";
import {useNavigate} from "react-router-dom"
import axios from  "axios"
const Cities = () => {
  const navigate = useNavigate()
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const response = await axios.get("http://localhost:4000/blog?type=city")
      const data = response.data.data
      setCities(data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    getCities()
  },[])

  return (
    <section id="example" className="example">
      <div className="box-container-example">
        {cities?.map((city) => (
          <div onClick={() => navigate(`/blog/${city.slug}`)} className="card">
            <img src={`http://localhost:4000/img/${city.image}`} alt="blog" />
            <div className=""  dangerouslySetInnerHTML={{ __html: city.content }}></div>
          <div className="title-box">
            <h4>{city.title}</h4>
          </div>
          </div>
          
        ))}
        <div className="card">
          <img src="/image/CityJakarta.svg" alt="" />
          <p>
            Jakarta, merupakan salah satu kota dengan penduduk terpadat di
            Indonesia. Kota yang satu ini telah menerapkan konsep smart city
            dalam pengelolaan kotanya.
          </p>
          <p>
            Jakarta telah mengoptimalkan pemanfaatan teknologi demi
            memaksimalkan pelayanan publik yang lebih efektif dan efisien
          </p>
          <div className="title-box">
            <h4>Jakarta</h4>
          </div>
        </div>
        <div className="card">
          <img src="/image/CitySurabaya.svg" alt="" />
          <p>
            Surabaya, merupakan kota metropolitan yang terletak di provinsi Jawa
            Timur. Kota Surabaya telah menerapkan inovasi Smart City
          </p>
          <p>
            Surabaya, melalui kebijkannya telah membangun kota ini dengan
            menggunakan aspek-aspek dalam smart city
          </p>
          <div className="title-box">
            <h4>Surabaya</h4>
          </div>
        </div>
        <div className="card">
          <img src="/image/CityMedan.svg" alt="" />
          <p>
            Medan, merupakan kota metropolitan yang terletak di provinsi
            Sumatera Utara. Kota Medan telah menerapkan inovasi Smart City
          </p>
          <p>
            Medan, melalui kebijakan oleh pemerintahnya telah mewujudkan kota
            ini menjadi smart city dengan berbagai aspek
          </p>
          <div className="title-box">
            <h4>Medan</h4>
          </div>
        </div>
      </div>
      <h1>Cities</h1>
    </section>
  );
};

export default Cities;
