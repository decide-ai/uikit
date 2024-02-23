import React from 'react';
import { Typography } from '../../../../components';
import { TypographyProps } from '../../../../components/Typography/types';
import { 
  BaseContainer, 
  ContainerCol,
  SectionBox,
} from '../../../sbComponents';

const TypographyStory = (props: TypographyProps) => (
  <BaseContainer title="Typography">
    <Typography {...props}>{props.children}</Typography>
  </BaseContainer>
);

export default TypographyStory;