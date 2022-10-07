import React from "react";

export type ResponsiveType<T> = T | null | undefined;

export type SetStateProps<T> = React.Dispatch<React.SetStateAction<ResponsiveType<T>>>;