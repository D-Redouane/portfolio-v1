function Blogs() {
  return (
    <>
      <div className="blog section" id="AITechBlogs">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Tech Blogs">My Blogs</h3>
            <p className="text">
              Exploring the latest advancements in AI and technology in my portfolio.
            </p>
          </div>

          <div className="blog-wrapper">
            {/* Blog Post 1 */}
            <div className="blog-wrap">
              <img
                src="./img/shapes/points3.png"
                alt=""
                className="points points-sq"
              />
              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blogs/blog1.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">March, 19 2023</h5>
                    <h5 className="blog-user"><i className="fas fa-user"></i>Redouane</h5>
                  </div>
                  <h3 className="title-sm">Exploring AI Trends</h3>
                  <p className="blog-text">
                    Delving into the latest trends and innovations in the field of AI.
                  </p>
                  {/* <a href="#" className="btn small">Read more</a> */}
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="blog-wrap">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blogs/blog2.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">August, 02 2023</h5>
                    <h5 className="blog-user"><i className="fas fa-user"></i>Redouane</h5>
                  </div>
                  <h3 className="title-sm">The Impact of AI on Tech Industry</h3>
                  <p className="blog-text">
                    Analyzing how AI is reshaping the landscape of the technology industry.
                  </p>
                  {/* <a href="#" className="btn small">Read more</a> */}
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="blog-wrap">
              <div className="blog-card">
                <div className="blog-image">
                  <img src="./img/blogs/blog3.jpg" alt="" />
                </div>
                <div className="blog-content">
                  <div className="blog-info">
                    <h5 className="blog-date">December, 12 2023</h5>
                    <h5 className="blog-user"><i className="fas fa-user"></i>Redouane</h5>
                  </div>
                  <h3 className="title-sm">Future Trends in AI Development</h3>
                  <p className="blog-text">
                    Exploring the potential future trends in the development of AI technologies.
                  </p>
                  {/* <a href="#" className="btn small">Read more</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
