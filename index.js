import escape from 'escape-html';

export default function html(parts, ...values) {
	return parts
		.map((part, i) => part + escape(values[i] || ''))
		.join('');
}
