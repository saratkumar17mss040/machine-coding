import { useState } from "react";

export default function ProfilePage() {
  const [profileFormData, setProfileFormData] = useState({
    userName: "",
    bio: "",
    // figure out for pic
    userPicture: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    alert("Profile updated successfully");
  }

  function handleOnChange(e) {
    const fieldName = e.target.name;
    if (fieldName === "userPicture") {
      console.log(e.target.files);
      const file = e.target.files[0];
      setProfileFormData((prevProfileFormData) => {
        return {
          ...prevProfileFormData,
          userPicture: file ? URL.createObjectURL(file) : "",
        };
      });
    } else {
      const fieldValue = e.target.value;
      setProfileFormData((prevProfileFormData) => {
        return { ...prevProfileFormData, [fieldName]: fieldValue };
      });
    }
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <h1>This is a profile page</h1>
      {/* Profile form */}
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={handleFormSubmit}
      >
        <input
          name="userName"
          type="text"
          placeholder="enter username"
          required
          onChange={handleOnChange}
        />

        <input
          name="bio"
          type="text"
          placeholder="enter bio"
          required
          onChange={handleOnChange}
        />
        <input
          name="userPicture"
          type="file"
          placeholder="upload profile pic"
          onChange={handleOnChange}
        />
        <button type="submit">update</button>
      </form>
      {/* Profile View */}
      <div id="profile-view">
        <h1>Profile view:</h1>
        <img
          src={profileFormData.userPicture || "https://picsum.photos/200"}
          alt="pic"
        />
        <p>name: {profileFormData.userName}</p>
        <p>bio: {profileFormData.bio}</p>
      </div>
    </div>
  );
}
