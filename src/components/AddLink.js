import React from "react";
import { useInput } from "../hooks/UseInput";

const AddLink = ({ links }) => {
  const { value: url, bind: bindUrl, reset: resetUrl } = useInput("");
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");

  return (
    <>
      <form>
        <input type="text" name="url" placeholder="Link..." {...bindUrl} />
        <input type="text" name="title" placeholder="Title..." {...bindTitle} />
        <button type="submit">Add Link</button>
      </form>

      <h4>Link: {url}</h4>
      <h4>Title: {title}</h4>
    </>
  );
};
// antes de default va export => export default AddLink
export default AddLink;
