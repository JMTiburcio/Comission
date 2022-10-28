export const generateId = () => new Date().getTime();
export const sortByDate = (a, b) => new Date(b.createdAt).getTime() - new Date(a).getTime();
