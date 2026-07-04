import { images } from "../assets/images";

export function resolveImageSrc(imageValue?: string) {
  if (!imageValue) {
    return "";
  }

  if (imageValue.startsWith("data:")) {
    return imageValue;
  }

  return images[imageValue] ?? imageValue;
}
