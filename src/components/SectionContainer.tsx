import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6  xl:px-0 w-full">
      {children}
    </div>
  );
};

export default SectionContainer;
