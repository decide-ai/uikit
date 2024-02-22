import React from 'react';
import { Container } from '../../../storiesComponents';
import { ListSection } from './ListSection';
import { ColorBox } from './ColorBox';
import { getColorsMap } from './getColorsMap';

const Colors = () => (
  <Container>
    <div className="flex flex-col gap-y-12 w-full pb-14">
      {getColorsMap.map(item => (
        <ListSection title={item.title}>
          {item.colorsList.map(colorItem => (
            <ColorBox
              key={colorItem.name}
              name={colorItem.name}
              hex={colorItem.hex}
            />
          ))}
        </ListSection>
      ))}
    </div>
  </Container>
);

export default Colors;