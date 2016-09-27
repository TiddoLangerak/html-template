Template tag for safe html templates

## Usage

```javascript
import html from '@tiddo/html-template';

const title = 'foo & bar';

const output = html`<h1>${title}</h1>`;

output === "<h1>foo &amp; bar</h1>"
```

Note: You can also use array values. These will be flattened and concatenated.

## Insert raw HTML
```javascript
import html, { unsafe } from '@tiddo/html-template';

const embedded = '<b>Bold text</b>';
const output = html`<p>${unsafe(embedded}}</p>`;
output === '<p><b>Bold text</b></p>';
```

## Nesting HTML

When nesting `html` templates you don't need to pass them through `unsafe`, that is already done for you:

```javascript
import html from '@tiddo/html-template';

const items = [1,2,3];
const list = html`
	<ul>
		${items.map(item => html`<li>{item}</li>`)}
	</ul>
`

list === `
	<ul>
		<li>1</li><li>2</li><li>3</li>
	</ul>
`;
```

