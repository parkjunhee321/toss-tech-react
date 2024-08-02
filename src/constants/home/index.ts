import { ArticleTabs } from "../../types/home";
import { articles } from "./articles";

const articleTabs: ArticleTabs["tabs"] = [
  {
    name: "전체",
    value: "",
  },
  {
    name: "개발",
    value: "tech",
  },
  {
    name: "디자인",
    value: "design",
  },
];

const currentValue: Record<string, string> = {
  tech: "개발",
  design: "디자인",
};

export const HOME = {
  articleTabs,
  articles,
  currentValue,
};
