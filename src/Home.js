import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://img.wallpapersafari.com/desktop/1920/1080/25/82/1x7cEQ.jpg"
          alt=""
        ></img>
        <div className="home_row_parent">
          <div className="home_row">
            <Product
              id={1}
              title="High-end speakers"
              img="http://pngimg.com/uploads/audio_speakers/audio_speakers_PNG11113.png"
              price="$249.99"
              rating={5}
            />
            <Product
              id={2}
              title="Marshall "
              img="https://www.marshallheadphones.com/dw/image/v2/BCQL_PRD/on/demandware.static/-/Sites-zs-master-catalog/default/dw194793cd/images/marshall/speakers/emberton/large/POS_Desktop_Emberton_large-1.png?sw=1120&sh=1120&sm=fit"
              price="$349.99"
              rating={5}
            />
            <Product
              id={3}
              title="Bose Ultra X"
              img="http://pngimg.com/uploads/headphones/headphones_PNG101982.png"
              price="$349.99"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id={3}
              title="Brain"
              img="https://api.time.com/wp-content/uploads/2014/05/brain.jpg?w=800&quality=85"
              price="$99.99"
              rating={5}
            />
            <Product
              id={4}
              title="Cart"
              img="https://icon-library.com/images/consumer-goods-icon/consumer-goods-icon-9.jpg"
              price="$19.99"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={5}
              title="Kindess"
              img="https://thumbs.dreamstime.com/z/vector-hand-holds-heart-care-kindness-charity-donation-flat-color-line-icon-vector-hand-holds-heart-care-kindness-charity-donation-159309130.jpg"
              price="$0.00"
              rating={4}
            />
            <Product
              id={6}
              title="Honesty"
              img="https://www.wardfamilylawgroup.com/wp-content/uploads/2018/08/Post_83118_Featured-900x400.jpg"
              price="$0.00"
              rating={5}
            />
            <Product
              id={7}
              title="Dumbells"
              img="https://www.amazon.ca/images/I/61eRzgL1PlL._AC_SL1200_.jpg"
              price="$29.99"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={8}
              title="Airbus Z1720"
              img="https://wallpapercave.com/wp/wp4128843.jpg"
              price="$199999.99"
              rating={5}
            />
            <Product
              id={9}
              title="Helicopter X820"
              img="https://www.helicopter-industry.com/wp-content/uploads/2021/01/H160-ANH-1280x640.jpg"
              price="$540000"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;