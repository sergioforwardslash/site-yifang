import React, { useState, useEffect, useRef } from "react";
import "./instagramfeed.css";
import axios from "axios";

const InstagramFeed = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`
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
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);


    return (
        <div className="container">
            {feeds.map((feed) => (
                <InstagramFeed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstagramFeed;
