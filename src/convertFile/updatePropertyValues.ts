import * as utils from '../utils';

const updatePropertyValues = (parsedLines: Content.ParsedLine[], dictionaryEntry: Dictionary.Entry) => {
  const { config: { isCaseInsensitive, keyLead, keyTail, valueLead, valueTail }, variables } = dictionaryEntry;

	// Leads and Tails are optional values
	const keyL = keyLead || '';
	const keyT = keyTail || '';
	const valueL = valueLead || '';
	const valueT = valueTail || '';

	const libraryVariables: string[] = [];

	// Iterate through each element in the Dictionary.Variables.
	for (const property in variables) {
		// Add Lead and Tail to the property.
		const key = `: ${keyL}${property}${keyT}`;
		// Iterate through the file
		parsedLines.forEach(({ text }, i) => {
			// Check if text within the line matches the variable key.
			const matches = utils.match(key, text, isCaseInsensitive);

			if (matches) {
				// Add Lead and Tail to the value.
				const value = `${valueL}${variables[property]}${valueT}`;
				// Check if `value` is in `libraryVariables`.
				if (libraryVariables.findIndex((libraryVariable) => libraryVariable === value) < 0) {
					// Add `value` to `libraryVariables`.
					libraryVariables.push(value);
				}

				// Iterate through each match in the current line.
				matches.forEach((match) => {
					// Update the value.
					const newText = text.replace(match, `: ${value}`);
					// Set the text in the current line.
					parsedLines[i].text = newText;
				});
			}
		});
  }

  return libraryVariables;
};

export default updatePropertyValues;
