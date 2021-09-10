export type filepath = string & { _?: 'path' };
export type weburl = string & { _?: 'url' };
export type htmlstring = string & { _?: 'html' };

export interface EpubChapter {
	/** optional, Chapter title */
	title?: string;
	/** optional, if each book author is different, you can fill it. */
	author?: string | string[];
	/** required, HTML String of the chapter content. image paths should be absolute path (should start with "http" or "https"), so that they could be downloaded. With the upgrade is possible to use local images (for this the path 	must start with file: //) */
	data: string;
	/** optional, if is not shown on Table of content, default: false; */
	excludeFromToc?: boolean;
	/** optional, if is shown before Table of content, such like copyright pages. default: false; */
	beforeToc?: boolean;
	/** optional, specify filename for each chapter, default: undefined; */
	filename?: string;
}

export type CompleteEpubChapter = EpubChapter & {
	href?: string;
	filePath: string;
	id?: string;
	dir: string;
	url?: string;
	author: string[];
}

export interface EpubImage {
	url: string;
	id: string;
	extension: string;
	dir: string;
	mediaType: string;
}

export interface EpubOptions {
	/** Title of the book */
	title: string;
	/** Name of the author for the book, string or array, eg. `"Alice"` or `["Alice", "Bob"]` */
	author: string | string[];
	/** Publisher name (optional) */
	publisher?: string;
	/** Book cover image (optional), File path (absolute path) or web url, eg. `"http://abc.com/book-cover.jpg"` or `"/User/Alice/images/book-cover.jpg"` */
	cover?: filepath | weburl;
	/**string; Out put path (absolute path), you can also path output as the second argument when use `new` , eg: `new Epub(options, output)` */
	output?: filepath;
	/** You can specify the version of the generated EPUB, `3` the latest version (http://idpf.org/epub/30) or `2` the previous version (http://idpf.org/epub/201, for better compatibility with older readers). If not specified, will fallback to `3`. */
	version?: 2 | 3;
	/** If you really hate our css, you can pass css string to replace our default style. eg: `"body{background: #000}"` */
	css?: string;
	/**
	 * Array of (absolute) paths to custom fonts to include on the book so they can be used on custom css. Ex: if you configure the array to `fonts: ['/path/to/Merriweather.ttf']` you can use the following on the custom CSS:
	 * 
	 * ```css
	 * ＠font-face {
	 *     font-family: "Merriweather";
	 *     font-style: normal;
	 *     font-weight: normal;
	 *     src : url("./fonts/Merriweather.ttf");
	 * }
	 * ```
	 */
	fonts?: filepath[];
	/** Language of the book in 2 letters code (optional). If not specified, will fallback to `en`. */
	lang?: string;
	/** Title of the table of contents. If not specified, will fallback to `Table Of Contents`. */
	tocTitle?: string;
	/** Automatically append the chapter title at the beginning of each contents. You can disable that by specifying `false`. */
	appendChapterTitles?: boolean;
	/** Optional. For advanced customizations: absolute path to an OPF template. */
	customOpfTemplatePath?: filepath;
	/** Optional. For advanced customizations: absolute path to a NCX toc template. */
	customNcxTocTemplatePath?: filepath;
	/** Optional. For advanced customizations: absolute path to a HTML toc template. */
	customHtmlTocTemplatePath?: filepath;
	/** Book Chapters content.It's should be an array of objects. eg. `[{title: "Chapter 1",data: "<div>..."}, {data: ""},...]` */
	content: EpubChapter[];
	/** specify whether or not to console.log progress messages, default: false. */
	verbose?: boolean;
}




export interface CompleteEpubOptions {
	/** Title of the book */
	title: string;
	/** Name of the author for the book, string or array, eg. `"Alice"` or `["Alice", "Bob"]` */
	author: string | string[];
	/** Publisher name (optional) */
	publisher?: string;
	/** Book cover image (optional), File path (absolute path) or web url, eg. `"http://abc.com/book-cover.jpg"` or `"/User/Alice/images/book-cover.jpg"` */
	cover?: filepath | weburl;
	/**string; Out put path (absolute path), you can also path output as the second argument when use `new` , eg: `new Epub(options, output)` */
	output: filepath;
	/** You can specify the version of the generated EPUB, `3` the latest version (http://idpf.org/epub/30) or `2` the previous version (http://idpf.org/epub/201, for better compatibility with older readers). If not specified, will fallback to `3`. */
	version?: 2 | 3;
	/** If you really hate our css, you can pass css string to replace our default style. eg: `"body{background: #000}"` */
	css: string;
	/**
	 * Array of (absolute) paths to custom fonts to include on the book so they can be used on custom css. Ex: if you configure the array to `fonts: ['/path/to/Merriweather.ttf']` you can use the following on the custom CSS:
	 * 
	 * ```css
	 * ＠font-face {
	 *     font-family: "Merriweather";
	 *     font-style: normal;
	 *     font-weight: normal;
	 *     src : url("./fonts/Merriweather.ttf");
	 * }
	 * ```
	 */
	fonts: filepath[];
	/** Language of the book in 2 letters code (optional). If not specified, will fallback to `en`. */
	lang?: string;
	/** Title of the table of contents. If not specified, will fallback to `Table Of Contents`. */
	tocTitle?: string;
	/** Automatically append the chapter title at the beginning of each contents. You can disable that by specifying `false`. */
	appendChapterTitles?: boolean;
	/** Optional. For advanced customizations: absolute path to an OPF template. */
	customOpfTemplatePath: filepath;
	/** Optional. For advanced customizations: absolute path to a NCX toc template. */
	customNcxTocTemplatePath: filepath;
	/** Optional. For advanced customizations: absolute path to a HTML toc template. */
	customHtmlTocTemplatePath: filepath;
	/** Book Chapters content.It's should be an array of objects. eg. `[{title: "Chapter 1",data: "<div>..."}, {data: ""},...]` */
	content: CompleteEpubChapter[];
	/** specify whether or not to console.log progress messages, default: false. */
	verbose?: boolean;

	///////////////////////////////////////////

	docHeader?: string;
	tempDir: string;
	uuid?: string;
	id?: string;
	images: EpubImage[];
	description?: string,
	// publisher: "anonymous",
	// author: string[],
	// tocTitle: "Table Of Contents",
	// appendChapterTitles: true,
	// date: new Date().toISOString(),
	// lang: "en",
	// fonts: [],
	// customOpfTemplatePath: null,
	// customNcxTocTemplatePath: null,
	// customHtmlTocTemplatePath: null,
	// version: 3,
	userAgent?: string;
	_coverMediaType?: string | null;
	_coverExtension?: string | null;
}

