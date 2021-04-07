import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import Image_file_input from "./components/image_file_input/Image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <Image_file_input {...props} imageUploader={imageUploader}></Image_file_input>
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
