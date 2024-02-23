export type ChildrenProps = {
  /** Children */
  children: React.ReactNode;
}

type TitleTypes = {
  /** Page title */
  title?: string;
}

type DescriptionTypes = {
  /** Page description */
  description?: string;
}

export type BaseContainerProps = ChildrenProps & TitleTypes & DescriptionTypes;

export type SectionBoxProps = ChildrenProps & TitleTypes;

export type SimpleTableProps = ChildrenProps & {
  /** Max table width, default value equal none
      max-w-0: 0rem (0px)
      max-w-none: none
      max-w-xs: 20rem (320px)
      max-w-sm: 24rem (384px)
      max-w-md: 28rem (448px)
      max-w-lg: 32rem (512px)
      max-w-xl: 36rem (576px)
      max-w-2xl: 42rem (672px)
      max-w-3xl: 48rem (768px)
      max-w-4xl: 56rem (896px)
      max-w-5xl: 64rem (1024px)
      max-w-6xl: 72rem (1152px)
      max-w-7xl: 80rem (1280px)
      max-w-full: 100%
      max-w-screen-sm: 640px (ширина экрана "sm")
      max-w-screen-md: 768px (ширина экрана "md")
      max-w-screen-lg: 1024px (ширина экрана "lg")
      max-w-screen-xl: 1280px (ширина экрана "xl")
      max-w-screen-2xl: 1536px (ширина экрана "2xl")
  */
  maxWidth?: '0' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl';
}