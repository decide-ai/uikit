import React from 'react';
import { getIconsMap } from './getIconsMap';
import { Container } from '../../../storiesComponents';
import { IconProps } from './types';
import { ListSection } from './ListSection';
import { IconBox } from './IconBox';

const IconsMap = (props: IconProps) => {
  const iconsMap = getIconsMap();
  return (
    <Container>
      <div className="flex flex-col gap-x-15">
        {Array.from(iconsMap).map(item => (
          <ListSection 
            key={item.title}
            title={item.title}
          >
            {item.iconsList.map((iconItem) => (
              <IconBox
                key={iconItem.name}
                name={iconItem.name}
                component={iconItem.component}
                {...props}
              />
            ))}  
          </ListSection>
        ))}
      </div>
    </Container>
  );
};

export default IconsMap;