import { mergeClassNames } from "@/utils/mergeClassNames";

interface ListItem {
  bold: boolean;
  value: React.ReactNode;
}

type NestedListItem = Array<ListItem["value"] | ListItem | NestedListItem>;

export interface UnorderedListProps extends React.HTMLProps<HTMLUListElement> {
  items: NestedListItem;
}
//
function UnorderedList({ items, className, ...props }: UnorderedListProps) {
  return (
    <ul
      className={mergeClassNames(
        "list-outside list-disc pl-7",
        "[&>li:nth-child(n+2)]:mt-1",
        "[&_ul]:list-[revert] [&_ul]:pl-6 mb-2",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        if (!item) return <br key={index} />;

        if (Array.isArray(item)) {
          return (
            <UnorderedList
              key={item.toString()}
              items={item}
              className={className}
              {...props}
            />
          );
        }

        return (
          <li key={`${item?.toString()}-${index}`}>
            {typeof item === "object" && "bold" in item ? (
              <b>{item.value}</b>
            ) : (
              item
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default UnorderedList;
