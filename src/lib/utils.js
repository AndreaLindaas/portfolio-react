import { IMAGE_BASE_URL } from "./constants";

export const createImageUrl = (imageUrl) => {
  const fixUrl = imageUrl.replace("image-", "").replace("-jpg", ".jpg");
  return IMAGE_BASE_URL + fixUrl;
};
