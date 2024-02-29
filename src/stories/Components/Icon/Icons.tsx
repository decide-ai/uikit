import React from 'react';
import { getIconsGroup } from './getIconsGroup';
import { 
  BaseContainer, 
  ContainerCol,
  SectionBox,
} from '../../../sbComponents';
import { IconsList } from './IconsList';
import { IconBox } from './IconBox';
import { IconProps, IconMapItem } from './types';

const Icons = (props: IconProps) => {
  const resultArray: IconMapItem[] = getIconsGroup();
  return (
    <BaseContainer>
      <ContainerCol>
        {Array.from(resultArray).map(item => (
          <SectionBox
            key={item.group}
            title={item.group}
          >
            <IconsList>  
              {item.iconsList.map((iconItem) => (
                <IconBox
                  key={iconItem.name}
                  name={iconItem.name}
                  component={iconItem.component}
                  {...props}
                />
              ))}
            </IconsList>
          </SectionBox>
        ))}
      </ContainerCol>
    </BaseContainer>
  );
};

export default Icons;