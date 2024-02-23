import React from 'react';
import { 
  BaseContainer,
  ContainerCol,
  SectionBox
} from '../../../sbComponents';
import { SimpleTable } from '../../../sbComponents';
import { FontFaceTypes } from './FontFaceTypes';
import { DATA } from './data';

const FontFaceStory = () => (
  <BaseContainer title="Typography">
    <ContainerCol>
      <SectionBox 
        title="Font Size"
        description="This font size is utilized for the Typography component within the UIkit library"
      >
        <SimpleTable 
          tableList={DATA.fontSize} 
          maxWidth="screen-sm"
        />
      </SectionBox>
      
      <SectionBox 
        title="Adaptive Font Size"
        description="This font size is utilized for the Typography component within the UIkit library"
      >
        <SimpleTable
          tableList={DATA.adaptiveFontSize}
          maxWidth="screen-sm"
        />
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