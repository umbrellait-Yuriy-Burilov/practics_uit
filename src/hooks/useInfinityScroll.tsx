import { useEffect } from "react";

export const useInfinityScroll = (
  container: any,
  callback: Function,
  offset = 0
) => {
  useEffect(() => {
    const onScroll = () => {
      const scrollContainer =
        container === document ? document.scrollingElement : container;
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - offset
      ) {
        callback();
      }
    };

    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, [callback, container, offset]);
};
