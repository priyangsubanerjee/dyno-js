import axios from "axios";
import publishFile from "./publishFile";
import { GraphQLClient, gql } from "graphql-request";
const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("fileUpload", file);
  const response = await axios.post(
    process.env.NEXT_PUBLIC_ASSET_URL,
    formData,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDgwNjcwMDYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDE0MDdlNzNlYnB1MDF5dzZ0MTAzdmp2L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjdiMGUyZWIzLWY3NWMtNGI3OS05OWJlLWE4MzNkZmJkMGZkZSIsImp0aSI6ImNsMTQwamtsY2VlaDUwMXphMmNzdjdvamcifQ.aNz1QES3cgSGKZCDBUKadSR2LSkf9dj74tf7Tv1u0VovL8C2gQxYZYBAt9stEGNpEZFWAUye0D4Nxy9Wvbfg7OgdBpqlDGsYFt8hJur69FpY2vvyMgWanAOYayxghFtMKiKVEujZF69H0AB8J5KKQKPlr2E9-TNPwb8bO6XKNTrCHPjKQy03TabZPTdKx1XdfJrcSSpyy26ylhJicc9Ouq4S_TQdqEx_mkwNRKkOeUUAgJtRKRCMb1hFFbm5Scc4duxQWQ8tCO2YKPQ7ekY749OR1Oy-atZI50j72TsNtyuV6O6GtcMK86f3XqkI6hc4RL-jYTp1DYeyhuECgjzSU4_XMJwjTNo8A05Z0i_xA_QRvbmEsA6uGku3-1uBIBCFYnwWF0qKcaf5ewBXVNBNrhFWaORqNM_ttrKEgNOH3_0Fltw9l9hM3IwG9-OgF7gWZBmF7PbEMdTcVEnPDC5Evda0B9iEh13v1GWiOC6sdpzfE4ieCruio2MnLb4ANVdU9eCa1aZcB65HrNZEb_APE6LH2Lc7TTCdDxDnW9Be2PxWRWmfWT7I27uR9XpN0EV-OqqBIoslhEj1L0UJPOmY0a-FYFOyYH7oSpbz2fRFereyiwIIe8_b8tNYtldOrRLD8HJVGfYrAuyNXZu_RQhSlBJfIalp24XBEGLMo44dBj8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": true,
      },
    }
  );

  if (response.status === 200) {
    const publishedState = await publishFile(response.data.id);
    return publishedState;
  }
};

export default uploadFile;
