export interface TreadSpec {
  length: number | string;
  weight: number | string;
}

export interface TyreSpecification {
  id: number;
  tyreSize: string;
  baseWidth: string;
  treadDepth: number | string;
  baseThickness: number | string;
  totalThickness: number | string;
  lowLengthTread: TreadSpec;
  highLengthTread: TreadSpec;
  type?: 'Standard' | 'HW' | 'LW';
}

export const tyreSpecifications: TyreSpecification[] = [
  {
    id: 1,
    tyreSize: 'LCV',
    baseWidth: '148',
    treadDepth: '11.0',
    baseThickness: '3.5',
    totalThickness: '14.5',
    lowLengthTread: { length: '93', weight: '5.0' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'Standard'
  },
  {
    id: 2,
    tyreSize: '1000 X 20',
    baseWidth: '205',
    treadDepth: '14.0',
    baseThickness: '3.5',
    totalThickness: '17.5',
    lowLengthTread: { length: '128', weight: '11.3' },
    highLengthTread: { length: '148', weight: '13.0' },
    type: 'Standard'
  },
  {
    id: 3,
    tyreSize: '1000 X 20',
    baseWidth: '205 HW',
    treadDepth: '16.0',
    baseThickness: '4.0',
    totalThickness: '20.0',
    lowLengthTread: { length: '128', weight: '12.5' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'HW'
  },
  {
    id: 4,
    tyreSize: '1000 X 20',
    baseWidth: '205 LW',
    treadDepth: '13.0',
    baseThickness: '3.3',
    totalThickness: '16.3',
    lowLengthTread: { length: '127', weight: '10.0' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'LW'
  },
  {
    id: 5,
    tyreSize: '1000 X 20',
    baseWidth: '210',
    treadDepth: '14.0',
    baseThickness: '3.5',
    totalThickness: '17.5',
    lowLengthTread: { length: '128', weight: '11.4' },
    highLengthTread: { length: '148', weight: '13.2' },
    type: 'Standard'
  },
  {
    id: 6,
    tyreSize: '1000 X 20',
    baseWidth: '210 HW',
    treadDepth: '16.0',
    baseThickness: '4.0',
    totalThickness: '20.0',
    lowLengthTread: { length: '128', weight: '12.7' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'HW'
  },
  {
    id: 7,
    tyreSize: '1000 X 20',
    baseWidth: '215',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '128', weight: '11.7' },
    highLengthTread: { length: '148', weight: '13.5' },
    type: 'Standard'
  },
  {
    id: 8,
    tyreSize: '1100 X 20',
    baseWidth: '215',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '133', weight: '12.2' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'Standard'
  },
  {
    id: 9,
    tyreSize: '1100 X 20',
    baseWidth: '215 HW',
    treadDepth: '16.6',
    baseThickness: '4.0',
    totalThickness: '20.6',
    lowLengthTread: { length: '133', weight: '13.5' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'HW'
  },
  {
    id: 10,
    tyreSize: '1000 X 20',
    baseWidth: '220',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '128', weight: '11.8' },
    highLengthTread: { length: '148', weight: '13.7' },
    type: 'Standard'
  },
  {
    id: 11,
    tyreSize: '1000 X 20',
    baseWidth: '220 HW',
    treadDepth: '16.6',
    baseThickness: '4.0',
    totalThickness: '20.6',
    lowLengthTread: { length: '128', weight: '13.3' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'HW'
  },
  {
    id: 12,
    tyreSize: '1000 X 20',
    baseWidth: '225',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '128', weight: '12.3' },
    highLengthTread: { length: '148', weight: '14.2' },
    type: 'Standard'
  },
  {
    id: 13,
    tyreSize: '1100 X 20',
    baseWidth: '225',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '133', weight: '12.8' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'Standard'
  },
  {
    id: 14,
    tyreSize: '1000 X 20',
    baseWidth: '230',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '128', weight: '12.5' },
    highLengthTread: { length: '148', weight: '14.4' },
    type: 'Standard'
  },
  {
    id: 15,
    tyreSize: '1000 X 20',
    baseWidth: '230 HW',
    treadDepth: '15.0',
    baseThickness: '5.0',
    totalThickness: '20.0',
    lowLengthTread: { length: '128', weight: '13.7' },
    highLengthTread: { length: '148', weight: '15.8' },
    type: 'HW'
  },
  {
    id: 16,
    tyreSize: '1100 X 20',
    baseWidth: '235',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '133', weight: '13.2' },
    highLengthTread: { length: '148', weight: '14.7' },
    type: 'Standard'
  },
  {
    id: 17,
    tyreSize: '1000 X 20',
    baseWidth: '240',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '128', weight: '12.9' },
    highLengthTread: { length: '-', weight: '-' },
    type: 'Standard'
  },
  {
    id: 18,
    tyreSize: '1200 X 20',
    baseWidth: '240',
    treadDepth: '14.6',
    baseThickness: '4.0',
    totalThickness: '18.6',
    lowLengthTread: { length: '-', weight: '-' },
    highLengthTread: { length: '148', weight: '14.9' },
    type: 'Standard'
  },
  {
    id: 19,
    tyreSize: '1200 X 20',
    baseWidth: '240 HW',
    treadDepth: '16.6',
    baseThickness: '4.0',
    totalThickness: '20.6',
    lowLengthTread: { length: '128', weight: '14.5' },
    highLengthTread: { length: '148', weight: '16.8' },
    type: 'HW'
  }
];
