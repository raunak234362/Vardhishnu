export const getImageUrl = (path: string, transformations?: string): string => {
  if (!path) return "";

  if (path.startsWith("http") || path.startsWith("/")) {
    return path;
  }

  const transformationPart = transformations ? `${transformations}/` : "";
  return `${import.meta.env.VITE_CLOUDINARY_URL}${transformationPart}${path}`;
};
