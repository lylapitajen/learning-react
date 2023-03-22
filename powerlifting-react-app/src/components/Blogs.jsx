import React from "react";
import Title from "./Title";
import { blogPosts } from "../data";

const Blogs = () => {
  return (
    <section className="section margin" id="blogs">
      <Title title="Blog" />
      <div className="section-center services-center">
        {blogPosts.map((blog) => {
          const { id, blogImg, title } = blog;
          return (
            <article key={id} className="blog-post">
              <img className="blog-img" src={blogImg} alt="" />
              <div className="blog-info">
                <h4 className="blog-title">{title}</h4>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
