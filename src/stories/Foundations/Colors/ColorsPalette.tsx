import React from 'react';
import { 
  BaseContainer, 
  ContainerCol,
  SectionBox,
} from '../../../sbComponents';
import { ColorBox } from './ColorBox';
import { ColorsList } from './ColorsList';
import { getColorsGroup } from './getColorsGroup';

const Colors = () => {
  const colorsList = getColorsGroup();
  return (
    <BaseContainer title="Colors Palette">
      <ContainerCol>
        {colorsList.map(item => (
          <SectionBox 
            key={item.group} 
            title={item.group}
          >
            <ColorsList>
              {item.colorsList.map(colorItem => (
                <ColorBox
                  key={colorItem.hex}
                  {...colorItem}
                />
              ))}
            </ColorsList>
          </SectionBox>
        ))}
      </ContainerCol>
    </BaseContainer>
  );
}

export default Colors;