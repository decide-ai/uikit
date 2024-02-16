import React from 'react';
import cn from "classnames";

export const TestTW = () => (
  <div className={cn("flex text-red-400 border-2 w-24 justify-center", {
    "test": false
  })}>TestTW</div>
);