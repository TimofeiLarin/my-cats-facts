import React from "react";

export const useTimeReader = (text: string) => React.useMemo(() => Math.ceil(
    text.split(' ').filter((word: string) => word.length > 2 && isNaN(parseInt(word)))
      .length * 0.3
  ), [text]);