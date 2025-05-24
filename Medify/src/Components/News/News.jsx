import React from "react";
import styles from "./News.module.css";


const articles = [
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    image: "/images/detox.jpg", // replace with your actual image path
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    image: "/images/detox.jpg",
  },
  {
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    image: "/images/detox.jpg",
  },
];

const BlogNews = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.subheading}>Blog & News</p>
      <h2 className={styles.heading}>Read Our Latest News</h2>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <img src={article.image} alt="blog visual" className={styles.image} />
            <div className={styles.content}>
              <p className={styles.meta}>
                <span className={styles.category}>{article.category}</span> ·{" "}
                <span>{article.date}</span>
              </p>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.author}>
                {/* <PersonIcon fontSize="small" /> {article.author} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
