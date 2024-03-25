import cn from 'classnames';

export const listBoxStyles = cn(
  'relative w-full',
  'py-2.5 pl-5 pr-10 text-left',
  'border-solid border-[1px] rounded-lg',
  'cursor-default bg-white',
  'hover:bg-B90 hover:border-B90',
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-1 focus-visible:ring-offset-B00'
);

export const iconStyles = cn(
  'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
)