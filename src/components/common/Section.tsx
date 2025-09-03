import { mergeClassNames } from "@/utils/mergeClassNames";

export interface SectionProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}

function Section({ className, title, children, right }: SectionProps) {
  const Title = () =>
    right ? (
      <div className="flex flex-row items-center w-[100%]">
        {title && (
          <h2 className="text-3xl flex items-center mb-3 mr-3 text-primary">
            {title}
          </h2>
        )}
        {right}
        <span className="w-full flex justify-center items-center after:content-[' '] after:ml-6 after:h-[2px] after:bg-gray-300 after:flex-1" />
      </div>
    ) : (
      <>
        {title && (
          <h2 className="text-3xl flex items-center mb-8 text-primary after:content-[' '] after:ml-6 after:h-[1px] after:bg-gray-300 after:flex-1">
            {title}
          </h2>
        )}
      </>
    );
  return (
    <section className={mergeClassNames("my-16", className)}>
      <Title />
      {children}
    </section>
  );
}

export default Section;
