import React, { useRef } from "react";
import styles from "./Image_file_input.module.css";

const Image_file_input = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const imgTarget = event.target.files[0];
    const uploaded = await imageUploader.upload(imgTarget);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onBtnClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default Image_file_input;
