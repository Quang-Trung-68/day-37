import React, { useEffect, useState } from "react";
import defaultAvatar from "@assets/images/placeholder-avatar.png";

function EditAvatar() {
  const [url, setUrl] = useState("");
  const [dataFile, setDataFile] = useState(undefined);
  const handleChange = (e) => {
    const file = e.target.files;
    if (file.length !== 0) {
      setDataFile(...e.target.files);
      setUrl(URL.createObjectURL(file[0]));
    } else {
      setDataFile(undefined);
      setUrl("");
    }
  };

  const handleDelete = () => {
    setDataFile(undefined);
    setUrl("");
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [url]);

  return (
    <div>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <span style={{ cursor: "pointer" }}>Click để chọn ảnh</span>
        <img
          style={{ borderRadius: "50%", cursor: "pointer" }}
          src={url || defaultAvatar}
          width={200}
          height={200}
        />
        <input accept="image/*" onChange={handleChange} type="file" hidden />
      </label>
      {dataFile ? (
        <div>
          <div>Selected 1 file:</div>
          <div>{dataFile.name}</div>
          <div>{dataFile.size / 1024} kB</div>
          <div>{dataFile.type}</div>
        </div>
      ) : (
        <div>No file selected yet.</div>
      )}
      {dataFile && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default EditAvatar;
