import { cloudinaryUrl } from "@/data/links";
import axios from "axios"

export const uploadFile = async (file: File | null): Promise<string> => {
  if (!file) return "File not uploaded";
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "src_events");
  data.append("cloud_name", "dimqol16x");

  try {
    const res = await axios.post(cloudinaryUrl, data);
    return res.data.secure_url;
  }
  
  catch (err) {
    console.error(err);
    return "File upload failed";
  }
};
