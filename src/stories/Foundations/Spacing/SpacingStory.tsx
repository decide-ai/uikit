import React from 'react';
import { 
  BaseContainer,
  ContainerCol,
  SectionBox
} from '../../../sbComponents';
import { SimpleTable } from '../../../sbComponents';
import { DATA } from './data';

const FontFaceStory = () => (
  <BaseContainer 
    title="Spacing & Size"
    description="Padding, margin, and width specifications conform to the Tailwind CSS style guide"
  >
    <ContainerCol>
      <SectionBox 
        title="Adaptive screen size"
        description="Primarily used within the Tailwind configuration as adaptive breakpoints."
      >
        <SimpleTable 
          tableList={DATA.adaptiveScreenSize} 
          maxWidth="screen-sm"
        />
      </SectionBox>
      
      <SectionBox 
        title="Padding & Margin"
        description="Applied to margin and padding, conforming to the standardized sizes delineated in the Tailwind style guide."
      >
        <SimpleTable 
          tableList={DATA.paddingMargin} 
          maxWidth="screen-sm"
        />
      </SectionBox>
      
      <SectionBox 
        title="Max width"
        description="Conforms to the standardized sizes as delineated in the Tailwind style guide."
      >
        <SimpleTable 
          tableList={DATA.maxWidth} 
          maxWidth="screen-sm"
        />
      </SectionBox>
    </ContainerCol>
  </BaseContainer>
);

export default FontFaceStory;