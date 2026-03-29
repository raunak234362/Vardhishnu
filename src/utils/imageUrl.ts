export const getImageUrl = (path: string): string => {
  if (!path) return "";

  if (path.startsWith("http") || path.startsWith("/")) {
    return path;
  }

  return `https://res.cloudinary.com/di7aduhjv/image/upload/${path}`;
};
