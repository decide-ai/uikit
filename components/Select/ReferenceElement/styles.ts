import cn from 'classnames';

export const listBoxStyles = cn(
  'relative w-full',
  'py-2 pl-3 pr-10 text-left',
  'border-[1px] border-A100 rounded-lg',
  'cursor-default bg-white',
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-1 focus-visible:ring-offset-B00'
);

export const iconStyles = cn(
  'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
);