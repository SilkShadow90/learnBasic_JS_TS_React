export const capitalize = (str: string): string => (str.length ? `${str[0].toUpperCase()}${str.slice(1)}` : '');

export const throttle = (func: (arg) => void, ms: number): () => void => {
  let isCooldown = false;

  return (...arg): void => {
    if (isCooldown) {
      return;
    }

    func(arg);

    isCooldown = true;

    setTimeout((): void => {
      isCooldown = false;
    }, ms);
  };
};
