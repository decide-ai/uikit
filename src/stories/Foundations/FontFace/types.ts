export type FontFaceTypesProps = {
  /** Font name */
  name: string;
  /** Font tailwind styles */
  usage: String[];
}

export type FontDataTableType = {
  adaptive: {
    props: string;
    remSize: string[];
  }[];
  regular: {
    name: string;
    props: string;
    remSize: string;
    pxSize: string;
  }[];
  [key: string]: any; // Добавление индексной подписи
};