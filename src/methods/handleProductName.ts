export const handleProductName = (name: string) => {
  const splitted = name.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    splitted[i] =
      splitted[i][0].toUpperCase() + splitted[i].slice(1).toLowerCase();
  }
  const joined = splitted.join(" ");
  return joined;
};
