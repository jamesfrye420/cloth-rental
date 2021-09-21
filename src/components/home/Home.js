import React from "react";
import classes from "./Home.module.css";
import Banner from "./Banner";
import Card from "../UI/Card";

function Home() {
  return (
    <div className={classes.home}>
      <Banner />
      <div className={classes.home__section}>
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, in style."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique styles"
          description="Get your attire for your weekend getaway"
        />
        <Card
          src="https://ciyashop.potenzaglobalsolutions.com/suit/wp-content/uploads/sites/6/2018/03/banner-lising.jpg"
          title="Entire collection at your doorstep"
          description="Comfortable suits, at your doorstep."
        />
      </div>
      <div className={classes.home__section}>
        <Card
          src="https://static.toiimg.com/thumb/msid-67870116,imgsize-324860,width-1000,height-562,resizemode-8/67870116.jpg"
          title="The Men's Collection"
          description="Explore a variety of outfits from our exclusive men's collection"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfsS46qed2IFlZfYHJ66SB4wxzRyrPi6XAw&usqp=CAU"
          title="Women's Collection"
          description="Dress up this festive season with our new women's collection"
        />
        <Card
          src="https://planetfashion.imgix.net/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg?auto=format"
          title="#do_what_moves_you"
          description="Do what moves you."
        />
      </div>
    </div>
  );
}

export default Home;
