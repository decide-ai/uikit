import React from 'react';
import { 
  BaseContainer,
  ContainerCol,
  SectionBox
} from '../../../sbComponents';
import { FontFaceSizeTable } from './FontFaceSizeTable';
import { FontFaceTypes } from './FontFaceTypes';
import { DATA } from './data';

const FontFaceStory = () => (
  <BaseContainer title="Typography">
    <ContainerCol>
      <SectionBox title="Font Size">
        <FontFaceSizeTable />
      </SectionBox>

      {DATA.fontTypes.map(item => (
        <SectionBox
          key={item.name}
          title={item.name}
        >
          <FontFaceTypes {...item} />
        </SectionBox>
      ))}
    </ContainerCol>
  </BaseContainer>
);

export default FontFaceStory;