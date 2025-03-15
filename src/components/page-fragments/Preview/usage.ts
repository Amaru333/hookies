export const USEPREVIEW_USAGE = `import React, { useState } from "react";
import { usePreview } from "@hookies/preview";

const ImageUploader = () => {
  const [data, setData] = useState<{ image?: File }>({});
  const previewImageUrl = usePreview(data.image);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setData({ image: event.target.files[0] });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewImageUrl && <img src={previewImageUrl} alt="Preview" width="200" />}
    </div>
  );
};

export default ImageUploader;`;
