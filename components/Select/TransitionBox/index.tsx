import React from 'react';
import { Transition } from '@headlessui/react';

// Types
import { ChildrenNodeTypes } from '../types';

export const TransitionBox: React.FC<ChildrenNodeTypes> = ({ children }) => (
  <Transition
    as={React.Fragment}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition>
);