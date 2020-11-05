import * as scssAST from 'scss-parser';
import * as query from 'query-ast'
import { Node } from 'scss-parser'
import dictionaries from '../dictionaries';


interface QueryNode {
    node: Node
}


// Create `convertFile` subscription.
const convertFile = (text: string) => {
  const node = scssAST.parse(text);
  const data: Content.DataNode = {
    newVariables: {},
    node,
  };

  const astQuery = query(node)
  const values = astQuery()
    .find('rule')
    .find('block')
    .find('declaration')
    .find('value')

  values
    .has('number')
    .has((n: QueryNode) => n.node.type === 'identifier' && n.node.value === 'px')
    .replace((n: QueryNode) => {
      const spacing = (n.node.value as Node[]).filter(x => x.type === 'number')[0].value as string
      const spacingId = dictionaries.tkCssSpacing.variables[parseInt(spacing)]
      return spacingId ?
        { type:'value', value: [{type: 'space', value: ' '}, {type: 'identifier', value: spacingId}]}
        : n
    })

  values
    .find('color_hex')
    .replace((n: QueryNode) => {
      const colorHex = n.node.value as string
      const colorId = dictionaries.tkUiColors.variables[colorHex.toUpperCase()]
      return colorId ? {type: 'identifier', value: colorId} : n
    })
  
  return scssAST.stringify(astQuery().get(0));
};

export default convertFile;
