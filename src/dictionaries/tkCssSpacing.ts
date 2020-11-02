const variables: Dictionary.Variables = {
  '1': 'Down5',
  '2': 'Down4',
  '4': 'Down3',
  '8': 'Down2',
  '12': 'Down1',
  '16': 'Base',
  '20': 'Up1',
  '24': 'Up2',
  '28': 'Up3',
  '32': 'Up4',
  '36': 'Up5',
  '40': 'Up6',
  '44': 'Up7',
  '48': 'Up8',
  '52': 'Up9',
  '56': 'Up10',
  '60': 'Up11',
  '64': 'Up12',
};

const config: Dictionary.Config = {
  name: 'tkCssSpacing',
  astType: 'number',
  pkg: 'tk-css-spacing',
  pkgSource: '/lib/variables.css',
  nextIdentifier: 'px',
  valueLead: 'varSp',
};

const tkCssSpacing: Dictionary.Entry = {
  config,
  variables,
};

export default tkCssSpacing;
