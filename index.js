import escape from 'escape-html';

//Marker that can be placed on strings to indicate they shouldn't be escaped
const _noescape = Symbol();

//Gets a safe version of the input value:
//- If the input is an array, it concatenates the safe version of it's elements
//- If the input is a string marked with _noescape, it won't be escaped
//- In all other cases the escaped string representation of the input is returned.
function getSafe(value) {
	if (Array.isArray(value)) {
		return value.map(getSafe).join('');
	}
	if (typeof value === 'object' && value[_noescape] === _noescape) {
		return value.toString();
	} else {
		return escape(value.toString());
	}
}

//Template tag to create a HTML safe string.
export default function html(parts, ...values) {
	const html = parts
		.map((part, i) => {
			let safeValue = '';
			if (values[i]) {
				safeValue = getSafe(values[i]);
			}
			return part + safeValue;
		})
		.join('');

	return unsafe(html); //It's already escaped, so we can mark it
}

//Marks a string to not be escaped
export function unsafe(value) {
	if (Array.isArray(value)) {
		return value.map(unsafe);
	}
	const marked = new String(value.toString());
	marked[_noescape] = _noescape;
	return marked;
}
