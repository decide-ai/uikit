import React from 'react';
import { getIconsMap } from './getIconsMap';
import { 
  BaseContainer, 
  ContainerCol,
  SectionBox,
} from '../../../sbComponents';
import { IconsList } from './IconsList';
import { IconBox } from './IconBox';
import { IconProps } from './types';

const Icons = (props: IconProps) => {
  const iconsMap = getIconsMap();
  return (
    <BaseContainer>
      <ContainerCol>
        {Array.from(iconsMap).map(item => (
          <SectionBox
            key={item.title}
            title={item.title}
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