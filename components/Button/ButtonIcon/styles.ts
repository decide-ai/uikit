enum BgColorSet {
  C60 = 'bg-C60',
  B80 = 'bg-B80',
  B90 = 'bg-B90'
}

enum TextColor {
  A00 = 'text-A00',
  C100 = 'text-C100',
  A50 = 'text-A50'
}

enum iconStrokeColorSet {
  A00 = 'svgGroup-text-A00',
  C100 = 'svgGroup-text-C100',
}

enum hoverAndActiveColorSet {
  A00 = `svgGroup-active:${TextColor.A00} svgGroup-hover:${TextColor.A00}`,
  C100 = `svgGroup-active:${TextColor.C100} svgGroup-hover:${TextColor.C100}`,
}

enum disabledColorSet {
  A50 = `svgGroup-disabled:${TextColor.A50}`,
}

export const svgIconSkinColors = {
  standard: `${iconStrokeColorSet.C100} ${hoverAndActiveColorSet.C100} ${disabledColorSet.A50}`,
  inline: `${iconStrokeColorSet.A00} ${hoverAndActiveColorSet.C100} ${disabledColorSet.A50}`,
  grey: `${iconStrokeColorSet.A00} ${hoverAndActiveColorSet.C100} ${disabledColorSet.A50}`,
  inlineGrey: `${iconStrokeColorSet.A00} ${hoverAndActiveColorSet.A00} ${disabledColorSet.A50}`,
  light: `${iconStrokeColorSet.A00} ${hoverAndActiveColorSet.A00} ${disabledColorSet.A50}`,

  pink: `${iconStrokeColorSet.C100} ${hoverAndActiveColorSet.C100} ${disabledColorSet.A50}`,
}
