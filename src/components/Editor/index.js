
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Essentials,
	Italic,
	Link,
	Paragraph
];

export default Editor;