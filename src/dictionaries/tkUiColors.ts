/* eslint-disable @typescript-eslint/naming-convention */

const variables: Dictionary.Variables = {
  'CC251C': 'Tkred600',
  'D83D2E': 'Tkred500',
  'E64C38': 'Tkred400',
  'E96150': 'Tkred300',
  'F4CBC6': 'Tkred200',
  'FFF2F0': 'Tkred100',
  '0D2941': 'Indigo900',
  '1C355E': 'Indigo800',
  '014B93': 'Indigo700',
  '2B72BF': 'Indigo600',
  '518AD7': 'Indigo500',
  '8DBEFF': 'Indigo400',
  '061929': 'Midnight',
  '6D7179': 'Coolgray500',
  '9699A0': 'Coolgray400',
  'CACCD0': 'Coolgray300',
  'E9E9ED': 'Coolgray200',
  'F5F6F8': 'Coolgray100',
  'FFFFFF': 'White',
  'A94902': 'Gold900',
  'F89D25': 'Gold500',
  'FBB559': 'Gold400',
  'FFCB86': 'Gold300',
  'FFE5C2': 'Gold200',
  'FDF4E8': 'Gold100',
  '9E005F': 'Raspberry500',
  'DC5899': 'Raspberry400',
  'F180A9': 'Raspberry300',
  'FAD8E5': 'Raspberry200',
  'FFB09C': 'Peach500',
  'FFC8B2': 'Peach400',
  'FFDBCE': 'Peach300',
  '00746E': 'Teal600',
  '00988B': 'Teal500',
  '75CDC0': 'Teal400',
  'ACE9E0': 'Teal300',
  'CDF2EC': 'Teal300',
};

const config: Dictionary.Config = {
  pkg: 'tk-ui-colors',
  pkgSource: '/lib/variables.css',
  keyLead: '#',
  valueLead: 'var',
  isCaseInsensitive: true,
};

const tkCssSpacing: Dictionary.Entry = {
  config,
  variables
};

export default tkCssSpacing;
