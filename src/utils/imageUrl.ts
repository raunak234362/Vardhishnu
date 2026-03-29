export const getImageUrl = (path: string): string => {
  if (!path) return "";

  if (path.startsWith("http") || path.startsWith("/")) {
    return path;
  }

  return `${import.meta.env.VITE_CLOUDINARY_URL}${path}`;
};
