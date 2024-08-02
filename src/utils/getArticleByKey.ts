import { articles } from "../constants/home/articles";

function getArticleByKey(key: string) {
  const resultContent = articles.find((value) => value.key === key);
  return resultContent;
}

export default getArticleByKey;
