import React from 'react';
import { 
  BaseContainer, 
  ContainerCol,
  SectionBox,
} from '../../../sbComponents';
import { ColorBox } from './ColorBox';
import { ColorsList } from './ColorsList';
import { DATA } from './data';

const Colors = () => (
  <BaseContainer title="Colors Palette">
    <ContainerCol>
      {DATA.map(item => (
        <SectionBox 
          key={item.title} 
          title={item.title}
        >
          <ColorsList>
            {item.colorsList.map(colorItem => (
              <ColorBox
                key={colorItem.name}
                name={colorItem.name}
                hex={colorItem.hex}
              />
            ))}
          </ColorsList>
        </SectionBox>
      ))}
    </ContainerCol>
  </BaseContainer>
);

export default Colors;