// export default InstagramFeed;
import React, { useState, useEffect, useRef } from "react";
import "./instagramfeed.css";
import Feed from "./Feed";
import axios from "axios";
import Slider from "react-slick";
import "../slick/slick/slick.css";
import "../slick/slick/slick-theme.css";

const testToken =
  "IGQVJXNzl1dS1laUowZA2hkWU92ZAl9KNkJuZAFFYZAFNleWxSMDdJVFVwbXRKQWI5bGtTRWEyNjBlOHBJcldqRVp3ZAlJwclN4MW43WUdMc3RvTmVJNmNSQ3pxYkhuanZAoWVFnQlFUODh3dnBKWngwSzJvNQZDZD";

const InstagramFeed = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${testToken}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    fetchInstagramPost();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {feeds.map((feed) => (
        <div className="slick-slide" key={feed.id}>
          <Feed feed={feed} />
        </div>
      ))}
    </Slider>
  );
};

export default InstagramFeed;
