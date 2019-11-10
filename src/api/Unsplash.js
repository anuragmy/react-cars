import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/"
  //   headers: {
  //     Authorization:
  //       "Client-ID 89a8a1b4343cdfcbc02083cb71d9ef3ff152b5c7ef19a9d0fee4168cc75ca368"
  //   }
});
