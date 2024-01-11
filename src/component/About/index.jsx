import React from "react";
import "./style.css"

const About = () => {
  return (
    <section id="about" className=" about-sect">
      <h2 className="">About</h2>
      <div className="paragraph">
        <p className="hidden-right">
          Smart City atau Kota Cerdas adalah suatu konsep kota yang menggunakan
          teknologi digital untuk meningkatkan kinerja dalam semua aspek
          kehidupan untuk mendukung masyarakat yang cerdas, berpendidikan,
          memiliki moral serta dapat meningkatkan kualitas hidup masyrakat
          sekitar.
        </p>
        <p className="hidden-right">
          Salah satu contoh dari smart city adalah smart living. Smart living
          adalah konsep yang berlandaskan kepraktisan, efisiensi, dan menjunjung
          tinggi faktor kenyamanan. Selaras dengan padatnya aktivitas masyarakat
          saat.
        </p>
      </div>
    </section>
  );
};

export default About;
