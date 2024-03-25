import cn from 'classnames';

export const wrapperNodeStyles = cn(
  'relative flex-shrink-0'
)

export const listBoxStyles = cn(
  'absolute mt-1 max-h-60 w-full py-1',
  'overflow-auto rounded-md bg-white text-base shadow-lg',
  'ring-1 ring-black/5 focus:outline-none sm:text-sm'
);