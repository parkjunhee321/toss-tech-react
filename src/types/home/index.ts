interface ArticleTabs {
  tabs: {
    name: TabName;
    value: TabValue;
  }[];
}

type TabValue = "" | "tech" | "design";
type TabName = "전체" | "개발" | "디자인";

export type { ArticleTabs, TabName, TabValue };
