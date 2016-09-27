Template tag for safe html templates

## Usage

```javascript
import html from '@tiddo/html-template';

const title = 'foo & bar';

const output = html`<h1>${title}</h1>`; 

output === "<h1>foo &amp; bar</h1>"
```

