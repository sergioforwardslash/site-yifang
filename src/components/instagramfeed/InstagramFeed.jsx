// import React, { useState, useEffect, useRef } from "react";
// import "./instagramfeed.css";
// import Feed from './Feed'
// import axios from "axios";

// //need to fix and put
// const testToken = 'IGQVJXYTRQTVM0SHRhaXVjYnRFMjVmenhVak55dmI4eXBsdkNfLTVFV3BvU2RkYmxKRGdtR1hfUVlUQ2UtenpaYmp0ZAFRwU2daNW9CNUxvMjR5RnFFTzlmckdQeWpZALW9RMkFEdktqS1JwdDlmQ18tNQZDZD'

// const InstagramFeed = ({ token, ...props }) => {
//   const [feeds, setFeedsData] = useState([]);
//   //use useRef to store the latest value of the prop without firing the effect
//   const tokenProp = useRef(token);
//   tokenProp.current = token;

//   useEffect(() => {
//     // this is to avoid memory leaks
//     const abortController = new AbortController();

//     async function fetchInstagramPost() {
//       try {
//         axios
        
//           .get(
//             `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${testToken}`
//           )
//           .then((resp) => {
//             setFeedsData(resp.data.data);
//           });
//       } catch (err) {
//         console.log("error", err);
//       }
//     }

//     fetchInstagramPost();

//     return () => {
//       // cancel pending fetch request on component unmount
//       abortController.abort();
//     };
//   }, [props.limit]);

//     return (
//         <div className="container">
//             {feeds.map((feed) => (
//               <div className="insta-content">
//                 <Feed key={feed.id} feed={feed} />
//             </div>
//             ))}
//         </div>
//     );
// }

// export default InstagramFeed;
import React, { useState, useEffect, useRef } from "react";
import "./instagramfeed.css";
import Feed from './Feed'
import axios from "axios";
import Slider from "react-slick";
// import "../slick/slick/slick.css";
// import "../slick/slick/slick-theme.css";

const testToken = 'IGQVJXYTRQTVM0SHRhaXVjYnRFMjVmenhVak55dmI4eXBsdkNfLTVFV3BvU2RkYmxKRGdtR1hfUVlUQ2UtenpaYmp0ZAFRwU2daNW9CNUxvMjR5RnFFTzlmckdQeWpZALW9RMkFEdktqS1JwdDlmQ18tNQZDZD'

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
        <div classname = "slick-slide" key={feed.id}>
          <Feed feed={feed} />
        </div>
      ))}
    </Slider>
  );
}

export default InstagramFeed;

