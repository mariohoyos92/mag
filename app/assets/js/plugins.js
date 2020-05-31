/*
 * FitVids 1.1
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
!(function (t) {
	"use strict";
	t.fn.fitVids = function (e) {
		var i = { customSelector: null };
		if (!document.getElementById("fit-vids-style")) {
			var r = document.head || document.getElementsByTagName("head")[0],
				d =
					".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
				a = document.createElement("div");
			(a.innerHTML = '<p>x</p><style id="fit-vids-style">' + d + "</style>"),
				r.appendChild(a.childNodes[1]);
		}
		return (
			e && t.extend(i, e),
			this.each(function () {
				var e = [
					"iframe[src*='player.vimeo.com']",
					"iframe[src*='youtube.com']",
					"iframe[src*='youtube-nocookie.com']",
					"iframe[src*='kickstarter.com'][src*='video.html']",
					"object",
					"embed",
				];
				i.customSelector && e.push(i.customSelector);
				var r = t(this).find(e.join(","));
				(r = r.not("object object")),
					r.each(function () {
						var e = t(this);
						if (
							!(
								("embed" === this.tagName.toLowerCase() &&
									e.parent("object").length) ||
								e.parent(".fluid-width-video-wrapper").length
							)
						) {
							var i =
									"object" === this.tagName.toLowerCase() ||
									(e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
										? parseInt(e.attr("height"), 10)
										: e.height(),
								r = isNaN(parseInt(e.attr("width"), 10))
									? e.width()
									: parseInt(e.attr("width"), 10),
								d = i / r;
							if (!e.attr("id")) {
								var a = "fitvid" + Math.floor(999999 * Math.random());
								e.attr("id", a);
							}
							e
								.wrap('<div class="fluid-width-video-wrapper"></div>')
								.parent(".fluid-width-video-wrapper")
								.css("padding-top", 100 * d + "%"),
								e.removeAttr("height").removeAttr("width");
						}
					});
			})
		);
	};
})(window.jQuery || window.Zepto);

/* Rainbow v1.2 rainbowco.de | included languages: java, coffeescript, generic, javascript, python, html, php, ruby, css */
window.Rainbow = (function () {
	function q(a) {
		var b,
			c = (a.getAttribute && a.getAttribute("data-language")) || 0;
		if (!c) {
			a = a.attributes;
			for (b = 0; b < a.length; ++b)
				if ("data-language" === a[b].nodeName) return a[b].nodeValue;
		}
		return c;
	}
	function B(a) {
		var b = q(a) || q(a.parentNode);
		if (!b) {
			var c = /\blang(?:uage)?-(\w+)/;
			(a = a.className.match(c) || a.parentNode.className.match(c)) &&
				(b = a[1]);
		}
		return b;
	}
	function C(a, b) {
		for (var c in f[d]) {
			c = parseInt(c, 10);
			if (a == c && b == f[d][c] ? 0 : a <= c && b >= f[d][c])
				delete f[d][c], delete j[d][c];
			if ((a >= c && a < f[d][c]) || (b > c && b < f[d][c])) return !0;
		}
		return !1;
	}
	function r(a, b) {
		return (
			'<span class="' +
			a.replace(/\./g, " ") +
			(l ? " " + l : "") +
			'">' +
			b +
			"</span>"
		);
	}
	function s(a, b, c, i) {
		if ("undefined" === typeof a || null === a) i();
		else {
			var e = a.exec(c);
			if (e) {
				++t;
				!b.name &&
					"string" == typeof b.matches[0] &&
					((b.name = b.matches[0]), delete b.matches[0]);
				var k = e[0],
					g = e.index,
					u = e[0].length + g,
					h = function () {
						function e() {
							s(a, b, c, i);
						}
						t % 100 > 0 ? e() : setTimeout(e, 0);
					};
				if (C(g, u)) h();
				else {
					var m = v(b.matches),
						l = function (a, c, i) {
							if (a >= c.length) i(k);
							else {
								var d = e[c[a]];
								if (d) {
									var g = b.matches[c[a]],
										f = g.language,
										h = g.name && g.matches ? g.matches : g,
										j = function (b, d, g) {
											var f;
											f = 0;
											var h;
											for (h = 1; h < c[a]; ++h) e[h] && (f = f + e[h].length);
											d = g ? r(g, d) : d;
											k = k.substr(0, f) + k.substr(f).replace(b, d);
											l(++a, c, i);
										};
									f
										? n(d, f, function (a) {
												j(d, a);
										  })
										: typeof g === "string"
										? j(d, d, g)
										: w(d, h.length ? h : [h], function (a) {
												j(d, a, g.matches ? g.name : 0);
										  });
								} else l(++a, c, i);
							}
						};
					l(0, m, function (a) {
						b.name && (a = r(b.name, a));
						if (!j[d]) {
							j[d] = {};
							f[d] = {};
						}
						j[d][g] = { replace: e[0], with: a };
						f[d][g] = u;
						h();
					});
				}
			} else i();
		}
	}
	function v(a) {
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b.sort(function (a, b) {
			return b - a;
		});
	}
	function w(a, b, c) {
		function i(b, k) {
			k < b.length
				? s(b[k].pattern, b[k], a, function () {
						i(b, ++k);
				  })
				: D(a, function (a) {
						delete j[d];
						delete f[d];
						--d;
						c(a);
				  });
		}
		++d;
		i(b, 0);
	}
	function D(a, b) {
		function c(a, b, i, f) {
			if (i < b.length) {
				++x;
				var h = b[i],
					l = j[d][h],
					a = a.substr(0, h) + a.substr(h).replace(l.replace, l["with"]),
					h = function () {
						c(a, b, ++i, f);
					};
				0 < x % 250 ? h() : setTimeout(h, 0);
			} else f(a);
		}
		var i = v(j[d]);
		c(a, i, 0, b);
	}
	function n(a, b, c) {
		var d = m[b] || [],
			e = m[y] || [],
			b = z[b] ? d : d.concat(e);
		w(
			a
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/&(?![\w\#]+;)/g, "&amp;"),
			b,
			c
		);
	}
	function o(a, b, c) {
		if (b < a.length) {
			var d = a[b],
				e = B(d);
			return !(-1 < (" " + d.className + " ").indexOf(" rainbow ")) && e
				? ((e = e.toLowerCase()),
				  (d.className += d.className ? " rainbow" : "rainbow"),
				  n(d.innerHTML, e, function (k) {
						d.innerHTML = k;
						j = {};
						f = {};
						p && p(d, e);
						setTimeout(function () {
							o(a, ++b, c);
						}, 0);
				  }))
				: o(a, ++b, c);
		}
		c && c();
	}
	function A(a, b) {
		var a = a && "function" == typeof a.getElementsByTagName ? a : document,
			c = a.getElementsByTagName("pre"),
			d = a.getElementsByTagName("code"),
			e,
			f = [],
			g = [];
		for (e = 0; e < c.length; ++e)
			c[e].getElementsByTagName("code").length
				? (c[e].innerHTML = c[e].innerHTML
						.replace(/^\s+/, "")
						.replace(/\s+$/, ""))
				: f.push(c[e]);
		for (e = 0; e < d.length; ++e) g.push(d[e]);
		o(g.concat(f), 0, b);
	}
	var j = {},
		f = {},
		m = {},
		z = {},
		d = 0,
		y = 0,
		t = 0,
		x = 0,
		l,
		p;
	return {
		extend: function (a, b, c) {
			1 == arguments.length && ((b = a), (a = y));
			z[a] = c;
			m[a] = b.concat(m[a] || []);
		},
		c: function (a) {
			p = a;
		},
		a: function (a) {
			l = a;
		},
		color: function (a, b, c) {
			if ("string" == typeof a) return n(a, b, c);
			if ("function" == typeof a) return A(0, a);
			A(a, b);
		},
	};
})();
document.addEventListener
	? document.addEventListener("DOMContentLoaded", Rainbow.color, !1)
	: window.attachEvent("onload", Rainbow.color);
Rainbow.onHighlight = Rainbow.c;
Rainbow.addClass = Rainbow.a;
Rainbow.extend(
	"java",
	[
		{ name: "constant", pattern: /\b(false|null|true|[A-Z_]+)\b/g },
		{
			b: { 1: "keyword", 2: "support.namespace" },
			pattern: /(import|package)\s(.+)/g,
		},
		{
			name: "keyword",
			pattern: /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g,
		},
		{ name: "string", pattern: /(".*?")/g },
		{ name: "char", pattern: /(')(.|\\.|\\u[\dA-Fa-f]{4})\1/g },
		{ name: "integer", pattern: /\b(0x[\da-f]+|\d+)L?\b/g },
		{ name: "comment", pattern: /\/\*[\s\S]*?\*\/|(\/\/).*?$/gm },
		{ name: "support.annotation", pattern: /@\w+/g },
		{ b: { 1: "entity.function" }, pattern: /([^@\.\s]+)\(/g },
		{ name: "entity.class", pattern: /\b([A-Z]\w*)\b/g },
		{
			name: "operator",
			pattern: /(\+{1,2}|-{1,2}|~|!|\*|\/|%|(?:&lt;){1,2}|(?:&gt;){1,3}|instanceof|(?:&amp;){1,2}|\^|\|{1,2}|\?|:|(?:=|!|\+|-|\*|\/|%|\^|\||(?:&lt;){1,2}|(?:&gt;){1,3})?=)/g,
		},
	],
	!0
);
Rainbow.extend("coffeescript", [
	{ name: "comment.block", pattern: /(\#{3})[\s\S]*\1/gm },
	{ name: "string.block", pattern: /('{3}|"{3})[\s\S]*\1/gm },
	{
		name: "string.regex",
		matches: { 2: { name: "comment", pattern: /\#(.*?)\n/g } },
		pattern: /(\/{3})([\s\S]*)\1/gm,
	},
	{
		matches: { 1: "keyword" },
		pattern: /\b(in|when|is|isnt|of|not|unless|until|super)(?=\b)/gi,
	},
	{ name: "keyword.operator", pattern: /\?/g },
	{ name: "constant.language", pattern: /\b(undefined|yes|on|no|off)\b/g },
	{ name: "keyword.variable.coffee", pattern: /@(\w+)/gi },
	{ name: "reset", pattern: /object|class|print/gi },
	{
		matches: {
			1: "entity.name.function",
			2: "keyword.operator",
			3: { name: "function.argument.coffee", pattern: /([\@\w]+)/g },
			4: "keyword.function",
		},
		pattern: /(\w+)\s{0,}(=|:)\s{0,}\((.*?)((-|=)&gt;)/gi,
	},
	{
		matches: {
			1: { name: "function.argument.coffee", pattern: /([\@\w]+)/g },
			2: "keyword.function",
		},
		pattern: /\s\((.*?)\)\s{0,}((-|=)&gt;)/gi,
	},
	{
		matches: {
			1: "entity.name.function",
			2: "keyword.operator",
			3: "keyword.function",
		},
		pattern: /(\w+)\s{0,}(=|:)\s{0,}((-|=)&gt;)/gi,
	},
	{
		matches: {
			1: "storage.class",
			2: "entity.name.class",
			3: "storage.modifier.extends",
			4: "entity.other.inherited-class",
		},
		pattern: /\b(class)\s(\w+)(\sextends\s)?([\w\\]*)?\b/g,
	},
	{
		matches: {
			1: "keyword.new",
			2: { name: "support.class", pattern: /\w+/g },
		},
		pattern: /\b(new)\s(.*?)(?=\s)/g,
	},
]);
Rainbow.extend([
	{
		matches: {
			1: [
				{ name: "keyword.operator", pattern: /\=|\+/g },
				{ name: "keyword.dot", pattern: /\./g },
			],
			2: {
				name: "string",
				matches: { name: "constant.character.escape", pattern: /\\('|"){1}/g },
			},
		},
		pattern: /(\(|\s|\[|\=|:|\+|\.|\{)(('|")([^\\\1]|\\.)*?(\3))/gm,
	},
	{ name: "comment", pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm },
	{
		name: "constant.numeric",
		pattern: /\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi,
	},
	{
		matches: { 1: "keyword" },
		pattern: /\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi,
	},
	{ name: "constant.language", pattern: /true|false|null/g },
	{ name: "keyword.operator", pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g },
	{ matches: { 1: "function.call" }, pattern: /(\w+?)(?=\()/g },
	{
		matches: { 1: "storage.function", 2: "entity.name.function" },
		pattern: /(function)\s(.*?)(?=\()/g,
	},
]);
Rainbow.extend("javascript", [
	{ name: "selector", pattern: /(\s|^)\$(?=\.|\()/g },
	{ name: "support", pattern: /\b(window|document)\b/g },
	{
		matches: { 1: "support.property" },
		pattern: /\.(length|node(Name|Value))\b/g,
	},
	{
		matches: { 1: "support.function" },
		pattern: /(setTimeout|setInterval)(?=\()/g,
	},
	{
		matches: { 1: "support.method" },
		pattern: /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g,
	},
	{
		name: "string.regexp",
		matches: {
			1: "string.regexp.open",
			2: { name: "constant.regexp.escape", pattern: /\\(.){1}/g },
			3: "string.regexp.close",
			4: "string.regexp.modifier",
		},
		pattern: /(\/)(?!\*)(.+)(\/)([igm]{0,3})/g,
	},
	{
		matches: { 1: "storage", 3: "entity.function" },
		pattern: /(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g,
	},
	{
		matches: { 1: "keyword", 2: "entity.function" },
		pattern: /(new)\s+(.*)(?=\()/g,
	},
	{ name: "entity.function", pattern: /(\w+)(?=:\s{0,}function)/g },
]);
Rainbow.extend("python", [
	{ name: "variable.self", pattern: /self/g },
	{
		name: "constant.language",
		pattern: /None|True|False|NotImplemented|\.\.\./g,
	},
	{ name: "support.object", pattern: /object/g },
	{
		name: "support.function.python",
		pattern: /\b(bs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|bin|file|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern)(?=\()/g,
	},
	{
		matches: { 1: "keyword" },
		pattern: /\b(pass|lambda|with|is|not|in|from|elif|raise|del)(?=\(|\b)/g,
	},
	{
		matches: {
			1: "storage.class",
			2: "entity.name.class",
			3: "entity.other.inherited-class",
		},
		pattern: /(class)\s+(\w+)\((\w+?)\)/g,
	},
	{
		matches: { 1: "storage.function", 2: "support.magic" },
		pattern: /(def)\s+(__\w+)(?=\()/g,
	},
	{ name: "support.magic", pattern: /__(name)__/g },
	{
		matches: { 1: "keyword.control", 2: "support.exception.type" },
		pattern: /(except) (\w+):/g,
	},
	{
		matches: { 1: "storage.function", 2: "entity.name.function" },
		pattern: /(def)\s+(\w+)(?=\()/g,
	},
	{ name: "entity.name.function.decorator", pattern: /@([\w\.]+)/g },
	{ name: "comment.docstring", pattern: /('{3}|"{3})[\s\S]*?\1/gm },
]);
Rainbow.extend(
	"html",
	[
		{
			name: "source.php.embedded",
			matches: { 2: { language: "php" } },
			pattern: /&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm,
		},
		{
			name: "source.css.embedded",
			matches: {
				1: {
					matches: {
						1: "support.tag.style",
						2: [
							{ name: "entity.tag.style", pattern: /^style/g },
							{ name: "string", pattern: /('|")(.*?)(\1)/g },
							{ name: "entity.tag.style.attribute", pattern: /(\w+)/g },
						],
						3: "support.tag.style",
					},
					pattern: /(&lt;\/?)(style.*?)(&gt;)/g,
				},
				2: { language: "css" },
				3: "support.tag.style",
				4: "entity.tag.style",
				5: "support.tag.style",
			},
			pattern: /(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm,
		},
		{
			name: "source.js.embedded",
			matches: {
				1: {
					matches: {
						1: "support.tag.script",
						2: [
							{ name: "entity.tag.script", pattern: /^script/g },
							{ name: "string", pattern: /('|")(.*?)(\1)/g },
							{ name: "entity.tag.script.attribute", pattern: /(\w+)/g },
						],
						3: "support.tag.script",
					},
					pattern: /(&lt;\/?)(script.*?)(&gt;)/g,
				},
				2: { language: "javascript" },
				3: "support.tag.script",
				4: "entity.tag.script",
				5: "support.tag.script",
			},
			pattern: /(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm,
		},
		{ name: "comment.html", pattern: /&lt;\!--[\S\s]*?--&gt;/g },
		{
			matches: { 1: "support.tag.open", 2: "support.tag.close" },
			pattern: /(&lt;)|(\/?\??&gt;)/g,
		},
		{
			name: "support.tag",
			matches: {
				1: "support.tag",
				2: "support.tag.special",
				3: "support.tag-name",
			},
			pattern: /(&lt;\??)(\/|\!?)(\w+)/g,
		},
		{ matches: { 1: "support.attribute" }, pattern: /([a-z-]+)(?=\=)/gi },
		{
			matches: {
				1: "support.operator",
				2: "string.quote",
				3: "string.value",
				4: "string.quote",
			},
			pattern: /(=)('|")(.*?)(\2)/g,
		},
		{
			matches: { 1: "support.operator", 2: "support.value" },
			pattern: /(=)([a-zA-Z\-0-9]*)\b/g,
		},
		{
			matches: { 1: "support.attribute" },
			pattern: /\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g,
		},
	],
	!0
);
Rainbow.extend("php", [
	{ name: "support", pattern: /\becho\b/g },
	{
		matches: { 1: "variable.dollar-sign", 2: "variable" },
		pattern: /(\$)(\w+)\b/g,
	},
	{ name: "constant.language", pattern: /true|false|null/gi },
	{ name: "constant", pattern: /\b[A-Z0-9_]{2,}\b/g },
	{ name: "keyword.dot", pattern: /\./g },
	{
		name: "keyword",
		pattern: /\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\(|\b)/g,
	},
	{
		matches: { 1: "keyword", 2: { name: "support.class", pattern: /\w+/g } },
		pattern: /(instanceof)\s([^\$].*?)(\)|;)/g,
	},
	{
		matches: { 1: "support.function" },
		pattern: /\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/g,
	},
	{ name: "variable.language.php-tag", pattern: /(&lt;\?(php)?|\?&gt;)/g },
	{
		matches: {
			1: "keyword.namespace",
			2: { name: "support.namespace", pattern: /\w+/g },
		},
		pattern: /\b(namespace|use)\s(.*?);/g,
	},
	{
		matches: {
			1: "storage.modifier",
			2: "storage.class",
			3: "entity.name.class",
			4: "storage.modifier.extends",
			5: "entity.other.inherited-class",
			6: "storage.modifier.extends",
			7: "entity.other.inherited-class",
		},
		pattern: /\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/g,
	},
	{ name: "keyword.static", pattern: /self::|static::/g },
	{
		matches: { 1: "storage.function", 2: "support.magic" },
		pattern: /(function)\s(__.*?)(?=\()/g,
	},
	{
		matches: {
			1: "keyword.new",
			2: { name: "support.class", pattern: /\w+/g },
		},
		pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;)/g,
	},
	{
		matches: {
			1: { name: "support.class", pattern: /\w+/g },
			2: "keyword.static",
		},
		pattern: /([\w\\]*?)(::)(?=\b|\$)/g,
	},
	{
		matches: { 2: { name: "support.class", pattern: /\w+/g } },
		pattern: /(\(|,\s?)([\w\\]*?)(?=\s\$)/g,
	},
]);
Rainbow.extend(
	"ruby",
	[
		{
			matches: { 1: "variable.language", 2: { language: null } },
			pattern: /^(__END__)\n((?:.*\n)*)/gm,
		},
		{
			name: "string",
			matches: {
				1: "string.open",
				2: [
					{
						name: "string.interpolation",
						matches: {
							1: "string.open",
							2: { language: "ruby" },
							3: "string.close",
						},
						pattern: /(\#\{)(.*?)(\})/g,
					},
				],
				3: "string.close",
			},
			pattern: /("|`)(.*?[^\\\1])?(\1)/g,
		},
		{ name: "string", pattern: /('|"|`)([^\\\1\n]|\\.)*?\1/g },
		{
			name: "string",
			pattern: /%[qQ](?=(\(|\[|\{|&lt;|.)(.*?)(?:'|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)/g,
		},
		{
			matches: { 1: "string", 2: "string", 3: "string" },
			pattern: /(&lt;&lt;)(\w+).*?$([\s\S]*?^\2)/gm,
		},
		{
			matches: { 1: "string", 2: "string", 3: "string" },
			pattern: /(&lt;&lt;\-)(\w+).*?$([\s\S]*?\2)/gm,
		},
		{
			name: "string.regexp",
			matches: {
				1: "string.regexp",
				2: { name: "string.regexp", pattern: /\\(.){1}/g },
				3: "string.regexp",
				4: "string.regexp",
			},
			pattern: /(\/)(.*?)(\/)([a-z]*)/g,
		},
		{
			name: "string.regexp",
			matches: {
				1: "string.regexp",
				2: { name: "string.regexp", pattern: /\\(.){1}/g },
				3: "string.regexp",
				4: "string.regexp",
			},
			pattern: /%r(?=(\(|\[|\{|&lt;|.)(.*?)('|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)([a-z]*)/g,
		},
		{ name: "comment", pattern: /#.*$/gm },
		{ name: "comment", pattern: /^\=begin[\s\S]*?\=end$/gm },
		{ matches: { 1: "constant" }, pattern: /(\w+:)[^:]/g },
		{
			matches: { 1: "constant.symbol" },
			pattern: /[^:](:(?:\w+|(?=['"](.*?)['"])(?:"\2"|'\2')))/g,
		},
		{ name: "constant.numeric", pattern: /\b(0x[\da-f]+|\d+)\b/g },
		{ name: "support.class", pattern: /\b[A-Z]\w*(?=((\.|::)[A-Za-z]|\[))/g },
		{ name: "constant", pattern: /\b[A-Z]\w*\b/g },
		{
			matches: {
				1: "storage.class",
				2: "entity.name.class",
				3: "entity.other.inherited-class",
			},
			pattern: /\s*(class)\s+((?:(?:::)?[A-Z]\w*)+)(?:\s+&lt;\s+((?:(?:::)?[A-Z]\w*)+))?/g,
		},
		{
			matches: { 1: "storage.module", 2: "entity.name.class" },
			pattern: /\s*(module)\s+((?:(?:::)?[A-Z]\w*)+)/g,
		},
		{ name: "variable.global", pattern: /\$([a-zA-Z_]\w*)\b/g },
		{ name: "variable.class", pattern: /@@([a-zA-Z_]\w*)\b/g },
		{ name: "variable.instance", pattern: /@([a-zA-Z_]\w*)\b/g },
		{
			matches: { 1: "keyword.control" },
			pattern: /[^\.]\b(BEGIN|begin|case|class|do|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\b(?![?!])/g,
		},
		{
			matches: { 1: "keyword.control.pseudo-method" },
			pattern: /[^\.]\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\b(?![?!])|\bdefined\?|\bblock_given\?/g,
		},
		{
			matches: { 1: "constant.language" },
			pattern: /\b(nil|true|false)\b(?![?!])/g,
		},
		{
			matches: { 1: "variable.language" },
			pattern: /\b(__(FILE|LINE)__|self)\b(?![?!])/g,
		},
		{
			matches: { 1: "keyword.special-method" },
			pattern: /\b(require|gem|initialize|new|loop|include|extend|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|module_function|public|protected)\b(?![?!])/g,
		},
		{
			name: "keyword.operator",
			pattern: /\s\?\s|=|&lt;&lt;|&lt;&lt;=|%=|&=|\*=|\*\*=|\+=|\-=|\^=|\|{1,2}=|&lt;&lt;|&lt;=&gt;|&lt;(?!&lt;|=)|&gt;(?!&lt;|=|&gt;)|&lt;=|&gt;=|===|==|=~|!=|!~|%|&amp;|\*\*|\*|\+|\-|\/|\||~|&gt;&gt;/g,
		},
		{
			matches: { 1: "keyword.operator.logical" },
			pattern: /[^\.]\b(and|not|or)\b/g,
		},
		{
			matches: { 1: "storage.function", 2: "entity.name.function" },
			pattern: /(def)\s(.*?)(?=(\s|\())/g,
		},
	],
	!0
);
Rainbow.extend(
	"css",
	[
		{ name: "comment", pattern: /\/\*[\s\S]*?\*\//gm },
		{
			name: "constant.hex-color",
			pattern: /#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi,
		},
		{
			matches: { 1: "constant.numeric", 2: "keyword.unit" },
			pattern: /(\d+)(px|em|cm|s|%)?/g,
		},
		{ name: "string", pattern: /('|")(.*?)\1/g },
		{
			name: "support.css-property",
			matches: { 1: "support.vendor-prefix" },
			pattern: /(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g,
		},
		{
			matches: {
				1: [
					{ name: "entity.name.sass", pattern: /&amp;/g },
					{ name: "direct-descendant", pattern: /&gt;/g },
					{ name: "entity.name.class", pattern: /\.[\w\-_]+/g },
					{ name: "entity.name.id", pattern: /\#[\w\-_]+/g },
					{ name: "entity.name.pseudo", pattern: /:[\w\-_]+/g },
					{ name: "entity.name.tag", pattern: /\w+/g },
				],
			},
			pattern: /([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g,
		},
		{
			matches: { 2: "support.vendor-prefix", 3: "support.css-value" },
			pattern: /(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g,
		},
	],
	!0
);

/*
 * Reading Time
 * Author: Michael Lynch
 * Author URL: http://michaelynch.com
 * Date Created: August 14, 2013
 * Date Updated: June 19, 2015
 * Licensed under the MIT license
 */
!(function (e) {
	e.fn.readingTime = function (n) {
		var t = {
				readingTimeTarget: ".eta",
				wordCountTarget: null,
				wordsPerMinute: 270,
				round: !0,
				lang: "en",
				lessThanAMinuteString: "",
				prependTimeString: "",
				prependWordString: "",
				remotePath: null,
				remoteTarget: null,
				success: function () {},
				error: function () {},
			},
			i = this,
			r = e(this);
		i.settings = e.extend({}, t, n);
		var a = i.settings;
		if (!this.length) return a.error.call(this), this;
		if ("it" == a.lang)
			var s = a.lessThanAMinuteString || "Meno di un minuto",
				l = "min";
		else if ("fr" == a.lang)
			var s = a.lessThanAMinuteString || "Moins d'une minute",
				l = "min";
		else if ("de" == a.lang)
			var s = a.lessThanAMinuteString || "Weniger als eine Minute",
				l = "min";
		else if ("es" == a.lang)
			var s = a.lessThanAMinuteString || "Menos de un minuto",
				l = "min";
		else if ("nl" == a.lang)
			var s = a.lessThanAMinuteString || "Minder dan een minuut",
				l = "min";
		else if ("sk" == a.lang)
			var s = a.lessThanAMinuteString || "Menej neÅ¾ minÃºtu",
				l = "min";
		else if ("cz" == a.lang)
			var s = a.lessThanAMinuteString || "MÃ©nÄ› neÅ¾ minutu",
				l = "min";
		else if ("hu" == a.lang)
			var s = a.lessThanAMinuteString || "Kevesebb mint egy perc",
				l = "perc";
		else
			var s = a.lessThanAMinuteString || "Less than a minute",
				l = "min";
		var u = function (n) {
			if ("" !== n) {
				var t = n.trim().split(/\s+/g).length,
					i = a.wordsPerMinute / 60,
					r = t / i;
				if (a.round === !0) var u = Math.round(r / 60);
				else var u = Math.floor(r / 60);
				var g = Math.round(r - 60 * u);
				if (a.round === !0)
					e(a.readingTimeTarget).text(
						u > 0 ? a.prependTimeString + u + " " + l : a.prependTimeString + s
					);
				else {
					var o = u + ":" + g;
					e(a.readingTimeTarget).text(a.prependTimeString + o);
				}
				"" !== a.wordCountTarget &&
					void 0 !== a.wordCountTarget &&
					e(a.wordCountTarget).text(a.prependWordString + t),
					a.success.call(this);
			} else a.error.call(this, "The element is empty.");
		};
		r.each(function () {
			null != a.remotePath && null != a.remoteTarget
				? e.get(a.remotePath, function (n) {
						u(e("<div>").html(n).find(a.remoteTarget).text());
				  })
				: u(r.text());
		});
	};
})(jQuery);

/* instafeed.js | v2.0.0-rc2 | https://github.com/stevenschobert/instafeed.js | License: MIT */
!(function exportInstafeed(e, t) {
	"function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports && "string" != typeof exports.nodeName
		? (module.exports = t())
		: (e.Instafeed = t());
})(this, function defineInstafeed() {
	function n(e, t) {
		if (!e) throw new Error(t);
	}
	function e(e) {
		n(
			!e || "object" == typeof e,
			"options must be an object, got " + e + " (" + typeof e + ")"
		);
		var t = {
			accessToken: null,
			accessTokenTimeout: 1e4,
			after: null,
			apiTimeout: 1e4,
			before: null,
			debug: !1,
			error: null,
			filter: null,
			limit: null,
			mock: !1,
			render: null,
			sort: null,
			success: null,
			target: "instafeed",
			template:
				'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
			templateBoundaries: ["{{", "}}"],
			transform: null,
		};
		if (e) for (var o in t) "undefined" != typeof e[o] && (t[o] = e[o]);
		n(
			"string" == typeof t.target || "object" == typeof t.target,
			"target must be a string or DOM node, got " +
				t.target +
				" (" +
				typeof t.target +
				")"
		),
			n(
				"string" == typeof t.accessToken || "function" == typeof t.accessToken,
				"accessToken must be a string or function, got " +
					t.accessToken +
					" (" +
					typeof t.accessToken +
					")"
			),
			n(
				"number" == typeof t.accessTokenTimeout,
				"accessTokenTimeout must be a number, got " +
					t.accessTokenTimeout +
					" (" +
					typeof t.accessTokenTimeout +
					")"
			),
			n(
				"number" == typeof t.apiTimeout,
				"apiTimeout must be a number, got " +
					t.apiTimeout +
					" (" +
					typeof t.apiTimeout +
					")"
			),
			n(
				"boolean" == typeof t.debug,
				"debug must be true or false, got " +
					t.debug +
					" (" +
					typeof t.debug +
					")"
			),
			n(
				"boolean" == typeof t.mock,
				"mock must be true or false, got " + t.mock + " (" + typeof t.mock + ")"
			),
			n(
				"object" == typeof t.templateBoundaries &&
					2 === t.templateBoundaries.length &&
					"string" == typeof t.templateBoundaries[0] &&
					"string" == typeof t.templateBoundaries[1],
				"templateBoundaries must be an array of 2 strings, got " +
					t.templateBoundaries +
					" (" +
					typeof t.templateBoundaries +
					")"
			),
			n(
				!t.template || "string" == typeof t.template,
				"template must null or string, got " +
					t.template +
					" (" +
					typeof t.template +
					")"
			),
			n(
				!t.error || "function" == typeof t.error,
				"error must be null or function, got " +
					t.error +
					" (" +
					typeof t.error +
					")"
			),
			n(
				!t.before || "function" == typeof t.before,
				"before must be null or function, got " +
					t.before +
					" (" +
					typeof t.before +
					")"
			),
			n(
				!t.after || "function" == typeof t.after,
				"after must be null or function, got " +
					t.after +
					" (" +
					typeof t.after +
					")"
			),
			n(
				!t.success || "function" == typeof t.success,
				"success must be null or function, got " +
					t.success +
					" (" +
					typeof t.success +
					")"
			),
			n(
				!t.filter || "function" == typeof t.filter,
				"filter must be null or function, got " +
					t.filter +
					" (" +
					typeof t.filter +
					")"
			),
			n(
				!t.transform || "function" == typeof t.transform,
				"transform must be null or function, got " +
					t.transform +
					" (" +
					typeof t.transform +
					")"
			),
			n(
				!t.sort || "function" == typeof t.sort,
				"sort must be null or function, got " +
					t.sort +
					" (" +
					typeof t.sort +
					")"
			),
			n(
				!t.render || "function" == typeof t.render,
				"render must be null or function, got " +
					t.render +
					" (" +
					typeof t.render +
					")"
			),
			n(
				!t.limit || "number" == typeof t.limit,
				"limit must be null or number, got " +
					t.limit +
					" (" +
					typeof t.limit +
					")"
			),
			(this._state = { running: !1 }),
			(this._options = t);
	}
	return (
		(e.prototype.run = function () {
			var r = this,
				s = null,
				o = null,
				i = null,
				a = null;
			return (
				this._debug("run", "options", this._options),
				this._debug("run", "state", this._state),
				this._state.running
					? (this._debug("run", "already running, skipping"), !1)
					: (this._start(),
					  this._debug("run", "getting dom node"),
					  (s =
							"string" == typeof this._options.target
								? document.getElementById(this._options.target)
								: this._options.target)
							? (this._debug("run", "got dom node", s),
							  this._debug("run", "getting access token"),
							  this._getAccessToken(function (e, t) {
									if (e)
										return (
											r._debug("onTokenReceived", "error", e),
											void r._fail(
												new Error("error getting access token: " + e.message)
											)
										);
									(o =
										"https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" +
										t),
										r._debug("onTokenReceived", "request url", o),
										r._makeApiRequest(o, function (e, t) {
											if (e)
												return (
													r._debug("onResponseReceived", "error", e),
													void r._fail(
														new Error("api request error: " + e.message)
													)
												);
											r._debug("onResponseReceived", "data", t), r._success(t);
											try {
												(i = r._processData(t)),
													r._debug("onResponseReceived", "processed data", i);
											} catch (o) {
												return void r._fail(o);
											}
											if (r._options.mock)
												r._debug(
													"onResponseReceived",
													"mock enabled, skipping render"
												);
											else {
												try {
													(a = r._renderData(i)),
														r._debug("onResponseReceived", "html content", a);
												} catch (n) {
													return void r._fail(n);
												}
												s.innerHTML = a;
											}
											r._finish();
										});
							  }),
							  !0)
							: (this._fail(
									new Error("no element found with ID " + this._options.target)
							  ),
							  !1))
			);
		}),
		(e.prototype._processData = function (e) {
			var t = "function" == typeof this._options.transform,
				o = "function" == typeof this._options.filter,
				n = "function" == typeof this._options.sort,
				r = "number" == typeof this._options.limit,
				s = [],
				i = null,
				a = null,
				u = null,
				c = null;
			if (
				(this._debug(
					"processData",
					"hasFilter",
					o,
					"hasTransform",
					t,
					"hasSort",
					n,
					"hasLimit",
					r
				),
				"object" != typeof e || "object" != typeof e.data || e.data.length <= 0)
			)
				return null;
			for (var l = 0; l < e.data.length; l++) {
				if (((a = this._getItemData(e.data[l])), t))
					try {
						(u = this._options.transform(a)),
							this._debug("processData", "transformed item", a, u);
					} catch (p) {
						throw (
							(this._debug("processData", "error calling transform", p),
							new Error("error in transform: " + p.message))
						);
					}
				else u = a;
				if (o) {
					try {
						(c = this._options.filter(u)),
							this._debug("processData", "filter item result", u, c);
					} catch (p) {
						throw (
							(this._debug("processData", "error calling filter", p),
							new Error("error in filter: " + p.message))
						);
					}
					c && s.push(u);
				} else s.push(u);
			}
			if (n)
				try {
					s.sort(this._options.sort);
				} catch (p) {
					throw (
						(this._debug("processData", "error calling sort", p),
						new Error("error in sort: " + p.message))
					);
				}
			return (
				r &&
					((i = s.length - this._options.limit),
					this._debug(
						"processData",
						"checking limit",
						s.length,
						this._options.limit,
						i
					),
					0 < i && s.splice(s.length - i, i)),
				s
			);
		}),
		(e.prototype._extractTags = function (e) {
			var t = /#([^\s]+)/gi,
				o = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i,
				n = [];
			if ("string" == typeof e)
				for (; null !== (match = t.exec(e)); )
					!1 === o.test(match[1]) && n.push(match[1]);
			return n;
		}),
		(e.prototype._getItemData = function (e) {
			var t = null,
				o = null;
			switch (e.media_type) {
				case "IMAGE":
					(t = "image"), (o = e.media_url);
					break;
				case "VIDEO":
					(t = "video"), (o = e.thumbnail_url);
					break;
				case "CAROUSEL_ALBUM":
					(t = "album"), (o = e.media_url);
			}
			return {
				caption: e.caption,
				tags: this._extractTags(e.caption),
				id: e.id,
				image: o,
				link: e.permalink,
				model: e,
				timestamp: e.timestamp,
				type: t,
				username: e.username,
			};
		}),
		(e.prototype._renderData = function (e) {
			var t = "string" == typeof this._options.template,
				o = "function" == typeof this._options.render,
				n = null,
				r = null,
				s = "";
			if (
				(this._debug("renderData", "hasTemplate", t, "hasRender", o),
				"object" != typeof e || e.length <= 0)
			)
				return null;
			for (var i = 0; i < e.length; i++) {
				if (((n = e[i]), o))
					try {
						(r = this._options.render(n, this._options)),
							this._debug("renderData", "custom render result", n, r);
					} catch (a) {
						throw (
							(this._debug("renderData", "error calling render", a),
							new Error("error in render: " + a.message))
						);
					}
				else t && (r = this._basicRender(n));
				r
					? (s += r)
					: this._debug(
							"renderData",
							"render item did not return any content",
							n
					  );
			}
			return s;
		}),
		(e.prototype._basicRender = function (e) {
			for (
				var t = new RegExp(
						this._options.templateBoundaries[0] +
							"([\\s\\w.]+)" +
							this._options.templateBoundaries[1],
						"gm"
					),
					o = this._options.template,
					n = null,
					r = "",
					s = 0,
					i = null,
					a = null;
				null !== (n = t.exec(o));

			)
				(i = n[1]),
					(r += o.slice(s, n.index)),
					(a = this._valueForKeyPath(i, e)) && (r += a.toString()),
					(s = t.lastIndex);
			return s < o.length && (r += o.slice(s, o.length)), r;
		}),
		(e.prototype._valueForKeyPath = function (e, t) {
			for (var o = /([\w]+)/gm, n = null, r = t; null !== (n = o.exec(e)); ) {
				if ("object" != typeof r) return null;
				r = r[n[1]];
			}
			return r;
		}),
		(e.prototype._fail = function (e) {
			!this._runHook("error", e) &&
				console &&
				"function" == typeof console.error &&
				console.error(e),
				(this._state.running = !1);
		}),
		(e.prototype._start = function () {
			(this._state.running = !0), this._runHook("before");
		}),
		(e.prototype._finish = function () {
			this._runHook("after"), (this._state.running = !1);
		}),
		(e.prototype._success = function (e) {
			this._runHook("success", e), (this._state.running = !1);
		}),
		(e.prototype._makeApiRequest = function (e, o) {
			var n = !1,
				r = this,
				s = null,
				i = function i(e, t) {
					n || ((n = !0), o(e, t));
				};
			((s = new XMLHttpRequest()).ontimeout = function (e) {
				i(new Error("api request timed out"));
			}),
				(s.onerror = function (e) {
					i(new Error("api connection error"));
				}),
				(s.onload = function (e) {
					var t = s.getResponseHeader("Content-Type"),
						o = null;
					if (
						(r._debug("apiRequestOnLoad", "loaded", e),
						r._debug("apiRequestOnLoad", "response status", s.status),
						r._debug("apiRequestOnLoad", "response content type", t),
						0 <= t.indexOf("application/json"))
					)
						try {
							o = JSON.parse(s.responseText);
						} catch (n) {
							return (
								r._debug(
									"apiRequestOnLoad",
									"json parsing error",
									n,
									s.responseText
								),
								void i(new Error("error parsing response json"))
							);
						}
					200 === s.status
						? i(null, o)
						: o && o.error
						? i(new Error(o.error.code + " " + o.error.message))
						: i(new Error("status code " + s.status));
				}),
				s.open("GET", e, !0),
				(s.timeout = this._options.apiTimeout),
				s.send();
		}),
		(e.prototype._getAccessToken = function (o) {
			var n = !1,
				r = this,
				s = null,
				i = function i(e, t) {
					n || ((n = !0), clearTimeout(s), o(e, t));
				};
			if ("function" == typeof this._options.accessToken) {
				this._debug("getAccessToken", "calling accessToken as function"),
					(s = setTimeout(function () {
						r._debug("getAccessToken", "timeout check", n),
							i(new Error("accessToken timed out"), null);
					}, this._options.accessTokenTimeout));
				try {
					this._options.accessToken(function (e, t) {
						r._debug(
							"getAccessToken",
							"received accessToken callback",
							n,
							e,
							t
						),
							i(e, t);
					});
				} catch (e) {
					this._debug(
						"getAccessToken",
						"error invoking the accessToken as function",
						e
					),
						i(e, null);
				}
			} else
				this._debug(
					"getAccessToken",
					"treating accessToken as static",
					typeof this._options.accessToken
				),
					i(null, this._options.accessToken);
		}),
		(e.prototype._debug = function () {
			var e = null;
			this._options.debug &&
				console &&
				"function" == typeof console.log &&
				(((e = [].slice.call(arguments))[0] = "[Instafeed] [" + e[0] + "]"),
				console.log.apply(null, e));
		}),
		(e.prototype._runHook = function (e, t) {
			var o = !1;
			if ("function" == typeof this._options[e])
				try {
					this._options[e](t), (o = !0);
				} catch (n) {
					this._debug("runHook", "error calling hook", e, n);
				}
			return o;
		}),
		e
	);
});
//# sourceMappingURL=instafeed.min.map
