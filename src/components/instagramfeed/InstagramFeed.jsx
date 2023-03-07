import React, { useState, useEffect, useRef } from "react";
import "./instagramfeed.css";
import Feed from './Feed'
import axios from "axios";

//need to fix and put
const testToken = 'IGQVJXYTRQTVM0SHRhaXVjYnRFMjVmenhVak55dmI4eXBsdkNfLTVFV3BvU2RkYmxKRGdtR1hfUVlUQ2UtenpaYmp0ZAFRwU2daNW9CNUxvMjR5RnFFTzlmckdQeWpZALW9RMkFEdktqS1JwdDlmQ18tNQZDZD'
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
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

    return (
        <div className="container">
            {feeds.map((feed) => (
              <div className="insta-content">
                <Feed key={feed.id} feed={feed} />
            </div>
            ))}
        </div>
    );
}

export default InstagramFeed;
