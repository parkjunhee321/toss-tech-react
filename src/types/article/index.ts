interface AnnotationTypes {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
}

type ArticleTypes =
  | "paragraph"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "heading_4"
  | "heading_5"
  | "callout"
  | "code"
  | "image"
  | "numbered_list_item";

interface ContentTypes {
  color?: string;
  caption?: string[];
  icon?: {
    type: string;
    emoji: string;
  };
  language?: string;
  rich_text: {
    href: string | null;
    text: {
      link: string | null | { url: string };
      content: string;
    };
    type: string;
    plain_text: string;
    annotations: {
      bold: boolean;
      code: boolean;
      color: string;
      italic: boolean;
      underline: boolean;
      strikethrough: boolean;
    };
  }[];
}

interface ImageTypes {
  file: {
    url: string;
  };
  type: string;
  caption: string[];
}

interface ArticleContentTypes {
  id: string;
  type: ArticleTypes;
  object: string;
  parent: {
    type: string;
    page_id?: string;
    block_id?: string;
  };
  archived: boolean;
  children?: ArticleContentTypes[];
  in_trash: boolean;
  paragraph?: ContentTypes;
  numbered_list_item?: ContentTypes;
  heading_1?: ContentTypes;
  heading_2?: ContentTypes;
  heading_3?: ContentTypes;
  heading_4?: ContentTypes;
  heading_5?: ContentTypes;
  callout?: ContentTypes;
  code?: ContentTypes;
  image?: ImageTypes;
  created_by: {
    id: string;
    object: string;
  };
  created_time: string;
  has_children: boolean;
  last_edited_by: {
    id: string;
    object: string;
  };
  last_edited_time: string;
}

interface CategoriesTypes {
  name: string;
  id: number;
  slug: string | null;
  parentId: number | null;
  iconUrl: string | null;
}

interface SuccessTypes {
  id: number;
  postId: number;
  title: string;
  subtitle: string;
  category: string;
  series: null | [];
  categories: CategoriesTypes[];
  data: ArticleContentTypes[];
  isPublished: boolean;
}

export type {
  AnnotationTypes,
  ArticleContentTypes,
  ContentTypes,
  SuccessTypes,
};
