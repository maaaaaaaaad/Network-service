import React, { memo, useRef, useState } from "react";
import styles from "./Image_file_input.module.css";

const Image_file_input = memo(({ imageUploader, name, onFileChange }) => {
  const [loding, setLoding] = useState(false);

  const inputRef = useRef();

  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoding(true);
    const imgTarget = event.target.files[0];
    const uploaded = await imageUploader.upload(imgTarget);
    setLoding(false);
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
      {!loding && (
        <button
          className={`${styles.button} ${name ? styles.colorFul : styles.grey}`}
          onClick={onBtnClick}
        >
          {name || "Image select"}
        </button>
      )}
      {loding && <div className={styles.loding}></div>}
    </div>
  );
});

export default Image_file_input;
