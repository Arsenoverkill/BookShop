import React, { useEffect, useState } from "react";
import "./BookShop.css";
import { NavLink } from "react-router-dom";
import { UseMainContext } from "../../Context/Context";

const BookShop = () => {
  const {date,readProduct} = UseMainContext()

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div>
      <section id="hero">
        <div className="hero-fon">
          <h1>Welcome to our Bookshop</h1>
          <p>A place where you can get all the books you want!</p>
        </div>
      </section>
      <section id="Genres">
        <div className="Genres-1">
          <div className="glav">
            <h1>Genres</h1>
            <NavLink to="/books">View all</NavLink>
          </div>
          <div className="genre">
            <div className="genre-block">
              <img
                src="https://s3-alpha-sig.figma.com/img/e19f/df0f/d8e5c0ec1ac052ee2b8b58e6ba7aefd7?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0NPGdc5jOZSlLh6~e1rdipPePWfBPy4goYjVKhD~f33w8DoGzQzyYTrVG7L2gd80gsY4aJhiHyQ~l30W4hytk6htlgLxc2r~UK9ZL91aJ4h9MQsXWKyrlbokytU5hE1G7wMN0Qfim0xvWESu8XCuK9iLMunAoMTjXAnavw~BdfZHGu2eCsp7j88d~SnkMepM8n65IHHYaZy~2bQk8wy~G4mHSj-jzStmWPsA-GLquiaC7uwCz~viz~zqI2MFSdu4~BzUjeejMP0hw9EA85TK2XRnrwKrBpear1GjFQAkVxMgYN~Vi0QzkGWHuJX92z~QsiXSGPKNI3rOv5vtoGerA__"
                alt=""
              />
              <p>Sci-Fi</p>
            </div>
            <div className="genre-block">
              <img
                src="https://s3-alpha-sig.figma.com/img/0adf/7440/23b4209483872cc90da4d135e4787b3e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnjTYY5sXu8mzQDKWxISHsSkBPrldinLg2-atWo35sZsBPH6j7kTauiJm0ObFwJTusE-advHjITTqR59mKqYlK96~SbCe5Tav1~0satp~nXcJ5aCqLRsKR7srQe3ZRX0BbBFPy-xAFKwBUNUc4eb-J9qM~x3psI9AfzYhMz8Tt3jKk-CCbYMvHv8yX4BblWSn91aZG4Wthxln0JHJKuJbGjxgN6kahn3Av6sJst3NKelVB3MoESt35mdULXYo7WL4zCk-mX9TfXYQODY~IuNMzoZKpDk0BK7Qd5ULl1rFGd3CA1BKeHbtYk8kONWOJEpMiSowP5whHUTUvGmSzBL2A__"
                alt=""
              />
              <p>For kids</p>
            </div>
            <div className="genre-block">
              <img
                src="https://s3-alpha-sig.figma.com/img/f7a9/5fbf/b3c49764f5b2d67fe49ce7591d60e98a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgZShK6muXutmT4rr5dRynh1925bCbQHS4gejpkq4f~SPIE~45k4UvJNkBdnK7c~ijS1YkmPEv-0buj7COB0VIPShG3joNEniGDn2v8ocRlGHazy0tCxvnslpsNpLrf~YuqM-wct38hOUnPF3xzkvzGRke4f18bQFlhQYfk1I6MDs3thMn6ICOTSchjSzxNqB-LOFfweA8Z3AhTTnYajXyywjh6~ip1MuGxpMstGx7P-kUdNhmXLOGMKeUK8vfKH3~vv5QmvPbNmKsQcNIHUuaPxXEjTjzJj5XIP6KrD4oIzCmQWr266YnB2QSuM82GN9G~HJ~I1n87BD~tw~EcERg__"
                alt=""
              />
              <p>Psychology</p>
            </div>
            <div className="genre-block">
              <img src="https://s3-alpha-sig.figma.com/img/c31c/b4b4/285663b76774cf29e0b7cd1208beb634?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k580nHyfaGjXFzUVr00nhI3Ge6dIghZcaQU3TcyquaFyPw6rmjJh2rwkwV6we2c6HDXY-hNaT2oId4QuLQnqFw8gs7Z-JdStTSiBf-zWMvbp5OjC9i9c5z9BBkn9qe~D50-eulFHlnJN5-n7FFrh5XJdx~8EWMQOXA2iMHkT90FenuqbX2nIAaOYGJ~SwkEOZ1d3R0OYIFUu2cqMGMQ84YFSC0lksoFGeLVJbG0If2DYbz9J1bLSNvHUCIABSR4Ng8-~ICFSUcq6UaLKLjafbndlEu3PxhqUbjqKDwQFUQnOA-GhCs5V-8nOmcLBKWl98Bl2Wqk-Ma3IQyIlRAJ21w__" />
              <p>Romantic</p>
            </div>
            <div className="genre-block">
              <img
                src="https://s3-alpha-sig.figma.com/img/f45e/aeb9/b49a8e97b62acd4fedc42b4a4d68def0?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WhEBmcA7pE01dysFUBtEytgd5-jJPcSdKjdBSk2ohxkPvjGDvZea2fa7S2RlPIB7C~X~C1eW19vCXTuP7oUaOpH9X-hr53DOKVdycbVDEBZuJ7qFPaDxcXPQX4na51VP9rdgEm~Tgil-NDHv5pjNipEU2sFWgxZw0eiR5SrDOMaPKm5sRj4YVeQelni6u9G2laSFtN1b5peDBMy7jg5k0QFxyO0nfh~ZgRLW~rHnThf3dqpjVOEhLm~Zc09udMTOxLEuFk0~YMRnUJAs40qOSaRGH3OdcL2rf5m-Cdn8teO~TQgu~yUNEsoY5LWT0hR8R4BmkmX2GH3pgbLCeITwnA__"
                alt=""
              />
              <p>Detective</p>
            </div>
            <div className="genre-block">
              <img
                src="https://s3-alpha-sig.figma.com/img/c810/12b7/4262a564b0dae247b4af56c06983c9de?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iovd374-NAazPJ3VwagpXxfSciXEYy2p5X2IMmPiYrykWqUBOuCVhBK4YsJKOvuq1X7UbIdbe5vBSdJXKmWhaws5vansZgmD8YmSU8Q9mGjro6paR5IjfA8-JPPM6I7erP1pEnhanOoWPNpIOds-5NQD4o39a7S3iUP-ewG8BvTc7goRnf3CzFSif5cqfFZoZswOTNg8q7v16xFMwOeA~9-9JUcNwsCJEiAiFwLba0z8lkkm1tFi8tZa81NfC1MAb6yB-rsxPt9jqbSlfr-EIvcMhRWMXE7Mlir-Yrhhk4-tpDbKUeUreF~GaxZBJN-bM~l1-MU2BPzvqmSFPOpeVg__"
                alt=""
              />
              <p>Finance</p>
            </div>
          </div>
        </div>
      </section>
      <section id="New-Books">
        <div className="New-Books">
          <h1>New Books</h1>
          <div className="books-swiper">
            <div className="popular popular-2">
              <img
                src="https://m.media-amazon.com/images/I/71hgr6+CfOL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
              <h4>A NEW NAME: SEPTOLOGY </h4>
            </div>
            <div className="popular ">
              <img
                src="https://images2.penguinrandomhouse.com/cover/9780593492307"
                alt=""
              />
              <h4>
                The CLIMAT BOOK: <br /> THE FACTS AND THE <br /> SOLOTIONS
              </h4>
            </div>
            <div className="popular popular-2">
              <img
                src="https://m.media-amazon.com/images/I/81-rWvLyz2L._AC_UF894,1000_QL80_.jpg"
                alt=""
              />
              <h4>REST IS RESISTANCE : A MANIFESTO</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="books-2">
        <div className="container">
          <div className="glav-2">
            <h1>BOOKS</h1>
            <NavLink to="books">View All</NavLink>
          </div>
          <div className="scroll-books">
            {date.map((el) => {
              return (
                <div>
                  <img src={el.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="About-Us">
        <h1>ABOUT US</h1>
        <div className="about-block">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quibusdam a explicabo eveniet? Voluptatum odio esse nisi <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            rerum. Vero, laboriosam cum! labolar troopt tooth <br /> Lorem ipsum
            dolor sit, amet
            <br />
            consectetur adipisicing elit. Dolorem iure reprehenderit <br />
            rerum. Vero, laboriosam cum! Lorem ipsum dolor sit, amet <br />
            consectetur adipisicing elit. Dolorem iure reprehenderit <br />
            similique ipsum aut? Error molestias in debitis recusandae fugiat!
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookShop;
