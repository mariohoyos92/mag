!function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',r.appendChild(a.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r=r.not("object object"),r.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),a=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(999999*Math.random());t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),t.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),window.Rainbow=function(){function e(e){var t,n=e.getAttribute&&e.getAttribute("data-language")||0;if(!n)for(e=e.attributes,t=0;t<e.length;++t)if("data-language"===e[t].nodeName)return e[t].nodeValue;return n}function t(t){var n=e(t)||e(t.parentNode);if(!n){var r=/\blang(?:uage)?-(\w+)/;(t=t.className.match(r)||t.parentNode.className.match(r))&&(n=t[1])}return n}function n(e,t){for(var n in d[b])if(n=parseInt(n,10),(e==n&&t==d[b][n]?0:e<=n&&t>=d[b][n])&&(delete d[b][n],delete m[b][n]),e>=n&&e<d[b][n]||t>n&&t<d[b][n])return!0;return!1}function r(e,t){return'<span class="'+e.replace(/\./g," ")+(u?" "+u:"")+'">'+t+"</span>"}function a(e,t,i,p){if(void 0===e||null===e)p();else{var l=e.exec(i);if(l){++w,!t.name&&"string"==typeof t.matches[0]&&(t.name=t.matches[0],delete t.matches[0]);var u=l[0],g=l.index,f=l[0].length+g,h=function(){function n(){a(e,t,i,p)}w%100>0?n():setTimeout(n,0)};if(n(g,f))h();else{var y=s(t.matches),_=function(e,n,a){if(e>=n.length)a(u);else{var s=l[n[e]];if(s){var i=t.matches[n[e]],p=i.language,g=i.name&&i.matches?i.matches:i,m=function(t,s,o){var i;i=0;var c;for(c=1;c<n[e];++c)l[c]&&(i+=l[c].length);s=o?r(o,s):s,u=u.substr(0,i)+u.substr(i).replace(t,s),_(++e,n,a)};p?c(s,p,function(e){m(s,e)}):"string"==typeof i?m(s,s,i):o(s,g.length?g:[g],function(e){m(s,e,i.matches?i.name:0)})}else _(++e,n,a)}};_(0,y,function(e){t.name&&(e=r(t.name,e)),m[b]||(m[b]={},d[b]={}),m[b][g]={replace:l[0],with:e},d[b][g]=f,h()})}}else p()}}function s(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n.sort(function(e,t){return t-e})}function o(e,t,n){function r(t,s){s<t.length?a(t[s].pattern,t[s],e,function(){r(t,++s)}):i(e,function(e){delete m[b],delete d[b],--b,n(e)})}++b,r(t,0)}function i(e,t){function n(e,t,r,a){if(r<t.length){++_;var s=t[r],o=m[b][s],e=e.substr(0,s)+e.substr(s).replace(o.replace,o.with),s=function(){n(e,t,++r,a)};0<_%250?s():setTimeout(s,0)}else a(e)}n(e,s(m[b]),0,t)}function c(e,t,n){var r=f[t]||[],a=f[y]||[],t=h[t]?r:r.concat(a);o(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),t,n)}function p(e,n,r){if(n<e.length){var a=e[n],s=t(a);return-1<(" "+a.className+" ").indexOf(" rainbow ")||!s?p(e,++n,r):(s=s.toLowerCase(),a.className+=a.className?" rainbow":"rainbow",c(a.innerHTML,s,function(t){a.innerHTML=t,m={},d={},g&&g(a,s),setTimeout(function(){p(e,++n,r)},0)}))}r&&r()}function l(e,t){var n,e=e&&"function"==typeof e.getElementsByTagName?e:document,r=e.getElementsByTagName("pre"),a=e.getElementsByTagName("code"),s=[],o=[];for(n=0;n<r.length;++n)r[n].getElementsByTagName("code").length?r[n].innerHTML=r[n].innerHTML.replace(/^\s+/,"").replace(/\s+$/,""):s.push(r[n]);for(n=0;n<a.length;++n)o.push(a[n]);p(o.concat(s),0,t)}var u,g,m={},d={},f={},h={},b=0,y=0,w=0,_=0;return{extend:function(e,t,n){1==arguments.length&&(t=e,e=y),h[e]=n,f[e]=t.concat(f[e]||[])},c:function(e){g=e},a:function(e){u=e},color:function(e,t,n){return"string"==typeof e?c(e,t,n):"function"==typeof e?l(0,e):void l(e,t)}}}(),document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.c,Rainbow.addClass=Rainbow.a,Rainbow.extend("java",[{name:"constant",pattern:/\b(false|null|true|[A-Z_]+)\b/g},{b:{1:"keyword",2:"support.namespace"},pattern:/(import|package)\s(.+)/g},{name:"keyword",pattern:/\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g},{name:"string",pattern:/(".*?")/g},{name:"char",pattern:/(')(.|\\.|\\u[\dA-Fa-f]{4})\1/g},{name:"integer",pattern:/\b(0x[\da-f]+|\d+)L?\b/g},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/).*?$/gm},{name:"support.annotation",pattern:/@\w+/g},{b:{1:"entity.function"},pattern:/([^@\.\s]+)\(/g},{name:"entity.class",pattern:/\b([A-Z]\w*)\b/g},{name:"operator",pattern:/(\+{1,2}|-{1,2}|~|!|\*|\/|%|(?:&lt;){1,2}|(?:&gt;){1,3}|instanceof|(?:&amp;){1,2}|\^|\|{1,2}|\?|:|(?:=|!|\+|-|\*|\/|%|\^|\||(?:&lt;){1,2}|(?:&gt;){1,3})?=)/g}],!0),Rainbow.extend("coffeescript",[{name:"comment.block",pattern:/(\#{3})[\s\S]*\1/gm},{name:"string.block",pattern:/('{3}|"{3})[\s\S]*\1/gm},{name:"string.regex",matches:{2:{name:"comment",pattern:/\#(.*?)\n/g}},pattern:/(\/{3})([\s\S]*)\1/gm},{matches:{1:"keyword"},pattern:/\b(in|when|is|isnt|of|not|unless|until|super)(?=\b)/gi},{name:"keyword.operator",pattern:/\?/g},{name:"constant.language",pattern:/\b(undefined|yes|on|no|off)\b/g},{name:"keyword.variable.coffee",pattern:/@(\w+)/gi},{name:"reset",pattern:/object|class|print/gi},{matches:{1:"entity.name.function",2:"keyword.operator",3:{name:"function.argument.coffee",pattern:/([\@\w]+)/g},4:"keyword.function"},pattern:/(\w+)\s{0,}(=|:)\s{0,}\((.*?)((-|=)&gt;)/gi},{matches:{1:{name:"function.argument.coffee",pattern:/([\@\w]+)/g},2:"keyword.function"},pattern:/\s\((.*?)\)\s{0,}((-|=)&gt;)/gi},{matches:{1:"entity.name.function",2:"keyword.operator",3:"keyword.function"},pattern:/(\w+)\s{0,}(=|:)\s{0,}((-|=)&gt;)/gi},{matches:{1:"storage.class",2:"entity.name.class",3:"storage.modifier.extends",4:"entity.other.inherited-class"},pattern:/\b(class)\s(\w+)(\sextends\s)?([\w\\]*)?\b/g},{matches:{1:"keyword.new",2:{name:"support.class",pattern:/\w+/g}},pattern:/\b(new)\s(.*?)(?=\s)/g}]),Rainbow.extend([{matches:{1:[{name:"keyword.operator",pattern:/\=|\+/g},{name:"keyword.dot",pattern:/\./g}],2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:|\+|\.|\{)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]),Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]),Rainbow.extend("python",[{name:"variable.self",pattern:/self/g},{name:"constant.language",pattern:/None|True|False|NotImplemented|\.\.\./g},{name:"support.object",pattern:/object/g},{name:"support.function.python",pattern:/\b(bs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|bin|file|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|set|apply|delattr|help|next|setattr|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern)(?=\()/g},{matches:{1:"keyword"},pattern:/\b(pass|lambda|with|is|not|in|from|elif|raise|del)(?=\(|\b)/g},{matches:{1:"storage.class",2:"entity.name.class",3:"entity.other.inherited-class"},pattern:/(class)\s+(\w+)\((\w+?)\)/g},{matches:{1:"storage.function",2:"support.magic"},pattern:/(def)\s+(__\w+)(?=\()/g},{name:"support.magic",pattern:/__(name)__/g},{matches:{1:"keyword.control",2:"support.exception.type"},pattern:/(except) (\w+):/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(def)\s+(\w+)(?=\()/g},{name:"entity.name.function.decorator",pattern:/@([\w\.]+)/g},{name:"comment.docstring",pattern:/('{3}|"{3})[\s\S]*?\1/gm}]),Rainbow.extend("html",[{name:"source.php.embedded",matches:{2:{language:"php"}},pattern:/&lt;\?=?(?!xml)(php)?([\s\S]*?)(\?&gt;)/gm},{name:"source.css.embedded",matches:{1:{matches:{1:"support.tag.style",2:[{name:"entity.tag.style",pattern:/^style/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.style.attribute",pattern:/(\w+)/g}],3:"support.tag.style"},pattern:/(&lt;\/?)(style.*?)(&gt;)/g},2:{language:"css"},3:"support.tag.style",4:"entity.tag.style",5:"support.tag.style"},pattern:/(&lt;style.*?&gt;)([\s\S]*?)(&lt;\/)(style)(&gt;)/gm},{name:"source.js.embedded",matches:{1:{matches:{1:"support.tag.script",2:[{name:"entity.tag.script",pattern:/^script/g},{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script.attribute",pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},2:{language:"javascript"},3:"support.tag.script",4:"entity.tag.script",5:"support.tag.script"},pattern:/(&lt;script(?! src).*?&gt;)([\s\S]*?)(&lt;\/)(script)(&gt;)/gm},{name:"comment.html",pattern:/&lt;\!--[\S\s]*?--&gt;/g},{matches:{1:"support.tag.open",2:"support.tag.close"},pattern:/(&lt;)|(\/?\??&gt;)/g},{name:"support.tag",matches:{1:"support.tag",2:"support.tag.special",3:"support.tag-name"},pattern:/(&lt;\??)(\/|\!?)(\w+)/g},{matches:{1:"support.attribute"},pattern:/([a-z-]+)(?=\=)/gi},{matches:{1:"support.operator",2:"string.quote",3:"string.value",4:"string.quote"},pattern:/(=)('|")(.*?)(\2)/g},{matches:{1:"support.operator",2:"support.value"},pattern:/(=)([a-zA-Z\-0-9]*)\b/g},{matches:{1:"support.attribute"},pattern:/\s(\w+)(?=\s|&gt;)(?![\s\S]*&lt;)/g}],!0),Rainbow.extend("php",[{name:"support",pattern:/\becho\b/g},{matches:{1:"variable.dollar-sign",2:"variable"},pattern:/(\$)(\w+)\b/g},{name:"constant.language",pattern:/true|false|null/gi},{name:"constant",pattern:/\b[A-Z0-9_]{2,}\b/g},{name:"keyword.dot",pattern:/\./g},{name:"keyword",pattern:/\b(die|end(for(each)?|switch|if)|case|require(_once)?|include(_once)?)(?=\(|\b)/g},{matches:{1:"keyword",2:{name:"support.class",pattern:/\w+/g}},pattern:/(instanceof)\s([^\$].*?)(\)|;)/g},{matches:{1:"support.function"},pattern:/\b(array(_key_exists|_merge|_keys|_shift)?|isset|count|empty|unset|printf|is_(array|string|numeric|object)|sprintf|each|date|time|substr|pos|str(len|pos|tolower|_replace|totime)?|ord|trim|in_array|implode|end|preg_match|explode|fmod|define|link|list|get_class|serialize|file|sort|mail|dir|idate|log|intval|header|chr|function_exists|dirname|preg_replace|file_exists)(?=\()/g},{name:"variable.language.php-tag",pattern:/(&lt;\?(php)?|\?&gt;)/g},{matches:{1:"keyword.namespace",2:{name:"support.namespace",pattern:/\w+/g}},pattern:/\b(namespace|use)\s(.*?);/g},{matches:{1:"storage.modifier",2:"storage.class",3:"entity.name.class",4:"storage.modifier.extends",5:"entity.other.inherited-class",6:"storage.modifier.extends",7:"entity.other.inherited-class"},pattern:/\b(abstract|final)?\s?(class|interface|trait)\s(\w+)(\sextends\s)?([\w\\]*)?(\simplements\s)?([\w\\]*)?\s?\{?(\n|\})/g},{name:"keyword.static",pattern:/self::|static::/g},{matches:{1:"storage.function",2:"support.magic"},pattern:/(function)\s(__.*?)(?=\()/g},{matches:{1:"keyword.new",2:{name:"support.class",pattern:/\w+/g}},pattern:/\b(new)\s([^\$].*?)(?=\)|\(|;)/g},{matches:{1:{name:"support.class",pattern:/\w+/g},2:"keyword.static"},pattern:/([\w\\]*?)(::)(?=\b|\$)/g},{matches:{2:{name:"support.class",pattern:/\w+/g}},pattern:/(\(|,\s?)([\w\\]*?)(?=\s\$)/g}]),Rainbow.extend("ruby",[{matches:{1:"variable.language",2:{language:null}},pattern:/^(__END__)\n((?:.*\n)*)/gm},{name:"string",matches:{1:"string.open",2:[{name:"string.interpolation",matches:{1:"string.open",2:{language:"ruby"},3:"string.close"},pattern:/(\#\{)(.*?)(\})/g}],3:"string.close"},pattern:/("|`)(.*?[^\\\1])?(\1)/g},{name:"string",pattern:/('|"|`)([^\\\1\n]|\\.)*?\1/g},{name:"string",pattern:/%[qQ](?=(\(|\[|\{|&lt;|.)(.*?)(?:'|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)/g},{matches:{1:"string",2:"string",3:"string"},pattern:/(&lt;&lt;)(\w+).*?$([\s\S]*?^\2)/gm},{matches:{1:"string",2:"string",3:"string"},pattern:/(&lt;&lt;\-)(\w+).*?$([\s\S]*?\2)/gm},{name:"string.regexp",matches:{1:"string.regexp",2:{name:"string.regexp",pattern:/\\(.){1}/g},3:"string.regexp",4:"string.regexp"},pattern:/(\/)(.*?)(\/)([a-z]*)/g},{name:"string.regexp",matches:{1:"string.regexp",2:{name:"string.regexp",pattern:/\\(.){1}/g},3:"string.regexp",4:"string.regexp"},pattern:/%r(?=(\(|\[|\{|&lt;|.)(.*?)('|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)([a-z]*)/g},{name:"comment",pattern:/#.*$/gm},{name:"comment",pattern:/^\=begin[\s\S]*?\=end$/gm},{matches:{1:"constant"},pattern:/(\w+:)[^:]/g},{matches:{1:"constant.symbol"},pattern:/[^:](:(?:\w+|(?=['"](.*?)['"])(?:"\2"|'\2')))/g},{name:"constant.numeric",pattern:/\b(0x[\da-f]+|\d+)\b/g},{name:"support.class",pattern:/\b[A-Z]\w*(?=((\.|::)[A-Za-z]|\[))/g},{name:"constant",pattern:/\b[A-Z]\w*\b/g},{matches:{1:"storage.class",2:"entity.name.class",3:"entity.other.inherited-class"},pattern:/\s*(class)\s+((?:(?:::)?[A-Z]\w*)+)(?:\s+&lt;\s+((?:(?:::)?[A-Z]\w*)+))?/g},{matches:{1:"storage.module",2:"entity.name.class"},pattern:/\s*(module)\s+((?:(?:::)?[A-Z]\w*)+)/g},{name:"variable.global",pattern:/\$([a-zA-Z_]\w*)\b/g},{name:"variable.class",pattern:/@@([a-zA-Z_]\w*)\b/g},{name:"variable.instance",pattern:/@([a-zA-Z_]\w*)\b/g},{matches:{1:"keyword.control"},pattern:/[^\.]\b(BEGIN|begin|case|class|do|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\b(?![?!])/g},{matches:{1:"keyword.control.pseudo-method"},pattern:/[^\.]\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\b(?![?!])|\bdefined\?|\bblock_given\?/g},{matches:{1:"constant.language"},pattern:/\b(nil|true|false)\b(?![?!])/g},{matches:{1:"variable.language"},pattern:/\b(__(FILE|LINE)__|self)\b(?![?!])/g},{matches:{1:"keyword.special-method"},pattern:/\b(require|gem|initialize|new|loop|include|extend|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|module_function|public|protected)\b(?![?!])/g},{name:"keyword.operator",pattern:/\s\?\s|=|&lt;&lt;|&lt;&lt;=|%=|&=|\*=|\*\*=|\+=|\-=|\^=|\|{1,2}=|&lt;&lt;|&lt;=&gt;|&lt;(?!&lt;|=)|&gt;(?!&lt;|=|&gt;)|&lt;=|&gt;=|===|==|=~|!=|!~|%|&amp;|\*\*|\*|\+|\-|\/|\||~|&gt;&gt;/g},{matches:{1:"keyword.operator.logical"},pattern:/[^\.]\b(and|not|or)\b/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(def)\s(.*?)(?=(\s|\())/g}],!0),Rainbow.extend("css",[{name:"comment",pattern:/\/\*[\s\S]*?\*\//gm},{name:"constant.hex-color",pattern:/#([a-f0-9]{3}|[a-f0-9]{6})(?=;|\s|,|\))/gi},{matches:{1:"constant.numeric",2:"keyword.unit"},pattern:/(\d+)(px|em|cm|s|%)?/g},{name:"string",pattern:/('|")(.*?)\1/g},{name:"support.css-property",matches:{1:"support.vendor-prefix"},pattern:/(-o-|-moz-|-webkit-|-ms-)?[\w-]+(?=\s?:)(?!.*\{)/g},{matches:{1:[{name:"entity.name.sass",pattern:/&amp;/g},{name:"direct-descendant",pattern:/&gt;/g},{name:"entity.name.class",pattern:/\.[\w\-_]+/g},{name:"entity.name.id",pattern:/\#[\w\-_]+/g},{name:"entity.name.pseudo",pattern:/:[\w\-_]+/g},{name:"entity.name.tag",pattern:/\w+/g}]},pattern:/([\w\ ,\n:\.\#\&\;\-_]+)(?=.*\{)/g},{matches:{2:"support.vendor-prefix",3:"support.css-value"},pattern:/(:|,)\s*(-o-|-moz-|-webkit-|-ms-)?([a-zA-Z-]*)(?=\b)(?!.*\{)/g}],!0),function(e){e.fn.readingTime=function(t){var n={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null,success:function(){},error:function(){}},r=this,a=e(this);r.settings=e.extend({},n,t);var s=r.settings;if(!this.length)return s.error.call(this),this;if("it"==s.lang)var o=s.lessThanAMinuteString||"Meno di un minuto",i="min";else if("fr"==s.lang)var o=s.lessThanAMinuteString||"Moins d'une minute",i="min";else if("de"==s.lang)var o=s.lessThanAMinuteString||"Weniger als eine Minute",i="min";else if("es"==s.lang)var o=s.lessThanAMinuteString||"Menos de un minuto",i="min";else if("nl"==s.lang)var o=s.lessThanAMinuteString||"Minder dan een minuut",i="min";else if("sk"==s.lang)var o=s.lessThanAMinuteString||"Menej neÅ¾ minÃºtu",i="min";else if("cz"==s.lang)var o=s.lessThanAMinuteString||"MÃ©nÄ› neÅ¾ minutu",i="min";else if("hu"==s.lang)var o=s.lessThanAMinuteString||"Kevesebb mint egy perc",i="perc";else var o=s.lessThanAMinuteString||"Less than a minute",i="min";var c=function(t){if(""!==t){var n=t.trim().split(/\s+/g).length,r=s.wordsPerMinute/60,a=n/r;if(!0===s.round)var c=Math.round(a/60);else var c=Math.floor(a/60);var p=Math.round(a-60*c);if(!0===s.round)e(s.readingTimeTarget).text(c>0?s.prependTimeString+c+" "+i:s.prependTimeString+o);else{var l=c+":"+p;e(s.readingTimeTarget).text(s.prependTimeString+l)}""!==s.wordCountTarget&&void 0!==s.wordCountTarget&&e(s.wordCountTarget).text(s.prependWordString+n),s.success.call(this)}else s.error.call(this,"The element is empty.")};a.each(function(){null!=s.remotePath&&null!=s.remoteTarget?e.get(s.remotePath,function(t){c(e("<div>").html(t).find(s.remoteTarget).text())}):c(a.text())})}}(jQuery),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports=t():e.Instafeed=t()}(this,function(){function e(e,t){if(!e)throw new Error(t)}function t(t){e(!t||"object"==typeof t,"options must be an object, got "+t+" ("+typeof t+")");var n={accessToken:null,accessTokenTimeout:1e4,after:null,apiTimeout:1e4,before:null,debug:!1,error:null,filter:null,limit:null,mock:!1,render:null,sort:null,success:null,target:"instafeed",template:'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',templateBoundaries:["{{","}}"],transform:null};if(t)for(var r in n)void 0!==t[r]&&(n[r]=t[r]);e("string"==typeof n.target||"object"==typeof n.target,"target must be a string or DOM node, got "+n.target+" ("+typeof n.target+")"),e("string"==typeof n.accessToken||"function"==typeof n.accessToken,"accessToken must be a string or function, got "+n.accessToken+" ("+typeof n.accessToken+")"),e("number"==typeof n.accessTokenTimeout,"accessTokenTimeout must be a number, got "+n.accessTokenTimeout+" ("+typeof n.accessTokenTimeout+")"),e("number"==typeof n.apiTimeout,"apiTimeout must be a number, got "+n.apiTimeout+" ("+typeof n.apiTimeout+")"),e("boolean"==typeof n.debug,"debug must be true or false, got "+n.debug+" ("+typeof n.debug+")"),e("boolean"==typeof n.mock,"mock must be true or false, got "+n.mock+" ("+typeof n.mock+")"),e("object"==typeof n.templateBoundaries&&2===n.templateBoundaries.length&&"string"==typeof n.templateBoundaries[0]&&"string"==typeof n.templateBoundaries[1],"templateBoundaries must be an array of 2 strings, got "+n.templateBoundaries+" ("+typeof n.templateBoundaries+")"),e(!n.template||"string"==typeof n.template,"template must null or string, got "+n.template+" ("+typeof n.template+")"),e(!n.error||"function"==typeof n.error,"error must be null or function, got "+n.error+" ("+typeof n.error+")"),e(!n.before||"function"==typeof n.before,"before must be null or function, got "+n.before+" ("+typeof n.before+")"),e(!n.after||"function"==typeof n.after,"after must be null or function, got "+n.after+" ("+typeof n.after+")"),e(!n.success||"function"==typeof n.success,"success must be null or function, got "+n.success+" ("+typeof n.success+")"),e(!n.filter||"function"==typeof n.filter,"filter must be null or function, got "+n.filter+" ("+typeof n.filter+")"),e(!n.transform||"function"==typeof n.transform,"transform must be null or function, got "+n.transform+" ("+typeof n.transform+")"),e(!n.sort||"function"==typeof n.sort,"sort must be null or function, got "+n.sort+" ("+typeof n.sort+")"),e(!n.render||"function"==typeof n.render,"render must be null or function, got "+n.render+" ("+typeof n.render+")"),e(!n.limit||"number"==typeof n.limit,"limit must be null or number, got "+n.limit+" ("+typeof n.limit+")"),this._state={running:!1},this._options=n}return t.prototype.run=function(){var e=this,t=null,n=null,r=null,a=null;return this._debug("run","options",this._options),this._debug("run","state",this._state),this._state.running?(this._debug("run","already running, skipping"),!1):(this._start(),this._debug("run","getting dom node"),(t="string"==typeof this._options.target?document.getElementById(this._options.target):this._options.target)?(this._debug("run","got dom node",t),this._debug("run","getting access token"),this._getAccessToken(function(s,o){if(s)return e._debug("onTokenReceived","error",s),void e._fail(new Error("error getting access token: "+s.message));n="https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token="+o,e._debug("onTokenReceived","request url",n),e._makeApiRequest(n,function(n,s){if(n)return e._debug("onResponseReceived","error",n),void e._fail(new Error("api request error: "+n.message));e._debug("onResponseReceived","data",s),e._success(s);try{r=e._processData(s),e._debug("onResponseReceived","processed data",r)}catch(t){return void e._fail(t)}if(e._options.mock)e._debug("onResponseReceived","mock enabled, skipping render");else{try{a=e._renderData(r),e._debug("onResponseReceived","html content",a)}catch(t){return void e._fail(t)}t.innerHTML=a}e._finish()})}),!0):(this._fail(new Error("no element found with ID "+this._options.target)),!1))},t.prototype._processData=function(e){var t="function"==typeof this._options.transform,n="function"==typeof this._options.filter,r="function"==typeof this._options.sort,a="number"==typeof this._options.limit,s=[],o=null,i=null,c=null,p=null;if(this._debug("processData","hasFilter",n,"hasTransform",t,"hasSort",r,"hasLimit",a),"object"!=typeof e||"object"!=typeof e.data||e.data.length<=0)return null;for(var l=0;l<e.data.length;l++){if(i=this._getItemData(e.data[l]),t)try{c=this._options.transform(i),this._debug("processData","transformed item",i,c)}catch(e){throw this._debug("processData","error calling transform",e),new Error("error in transform: "+e.message)}else c=i;if(n){try{p=this._options.filter(c),this._debug("processData","filter item result",c,p)}catch(e){throw this._debug("processData","error calling filter",e),new Error("error in filter: "+e.message)}p&&s.push(c)}else s.push(c)}if(r)try{s.sort(this._options.sort)}catch(e){throw this._debug("processData","error calling sort",e),new Error("error in sort: "+e.message)}return a&&(o=s.length-this._options.limit,this._debug("processData","checking limit",s.length,this._options.limit,o),0<o&&s.splice(s.length-o,o)),s},t.prototype._extractTags=function(e){var t=/#([^\s]+)/gi,n=/[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\.\/|\\\s]+/i,r=[];if("string"==typeof e)for(;null!==(match=t.exec(e));)!1===n.test(match[1])&&r.push(match[1]);return r},t.prototype._getItemData=function(e){var t=null,n=null;switch(e.media_type){case"IMAGE":t="image",n=e.media_url;break;case"VIDEO":t="video",n=e.thumbnail_url;break;case"CAROUSEL_ALBUM":t="album",n=e.media_url}return{caption:e.caption,tags:this._extractTags(e.caption),id:e.id,image:n,link:e.permalink,model:e,timestamp:e.timestamp,type:t,username:e.username}},t.prototype._renderData=function(e){var t="string"==typeof this._options.template,n="function"==typeof this._options.render,r=null,a=null,s="";if(this._debug("renderData","hasTemplate",t,"hasRender",n),"object"!=typeof e||e.length<=0)return null;for(var o=0;o<e.length;o++){if(r=e[o],n)try{a=this._options.render(r,this._options),this._debug("renderData","custom render result",r,a)}catch(e){throw this._debug("renderData","error calling render",e),new Error("error in render: "+e.message)}else t&&(a=this._basicRender(r));a?s+=a:this._debug("renderData","render item did not return any content",r)}return s},t.prototype._basicRender=function(e){for(var t=new RegExp(this._options.templateBoundaries[0]+"([\\s\\w.]+)"+this._options.templateBoundaries[1],"gm"),n=this._options.template,r=null,a="",s=0,o=null,i=null;null!==(r=t.exec(n));)o=r[1],a+=n.slice(s,r.index),(i=this._valueForKeyPath(o,e))&&(a+=i.toString()),s=t.lastIndex;return s<n.length&&(a+=n.slice(s,n.length)),a},t.prototype._valueForKeyPath=function(e,t){for(var n=/([\w]+)/gm,r=null,a=t;null!==(r=n.exec(e));){if("object"!=typeof a)return null;a=a[r[1]]}return a},t.prototype._fail=function(e){!this._runHook("error",e)&&console&&"function"==typeof console.error&&console.error(e),this._state.running=!1},t.prototype._start=function(){this._state.running=!0,this._runHook("before")},t.prototype._finish=function(){this._runHook("after"),this._state.running=!1},t.prototype._success=function(e){this._runHook("success",e),this._state.running=!1},t.prototype._makeApiRequest=function(e,t){var n=!1,r=this,a=null,s=function(e,r){n||(n=!0,t(e,r))};(a=new XMLHttpRequest).ontimeout=function(e){s(new Error("api request timed out"))},a.onerror=function(e){s(new Error("api connection error"))},a.onload=function(e){var t=a.getResponseHeader("Content-Type"),n=null;if(r._debug("apiRequestOnLoad","loaded",e),r._debug("apiRequestOnLoad","response status",a.status),r._debug("apiRequestOnLoad","response content type",t),0<=t.indexOf("application/json"))try{n=JSON.parse(a.responseText)}catch(e){return r._debug("apiRequestOnLoad","json parsing error",e,a.responseText),void s(new Error("error parsing response json"))}200===a.status?s(null,n):s(n&&n.error?new Error(n.error.code+" "+n.error.message):new Error("status code "+a.status))},a.open("GET",e,!0),a.timeout=this._options.apiTimeout,a.send()},t.prototype._getAccessToken=function(e){var t=!1,n=this,r=null,a=function(n,a){t||(t=!0,clearTimeout(r),e(n,a))};if("function"==typeof this._options.accessToken){this._debug("getAccessToken","calling accessToken as function"),r=setTimeout(function(){n._debug("getAccessToken","timeout check",t),a(new Error("accessToken timed out"),null)},this._options.accessTokenTimeout);try{this._options.accessToken(function(e,r){n._debug("getAccessToken","received accessToken callback",t,e,r),a(e,r)})}catch(e){this._debug("getAccessToken","error invoking the accessToken as function",e),a(e,null)}}else this._debug("getAccessToken","treating accessToken as static",typeof this._options.accessToken),a(null,this._options.accessToken)},t.prototype._debug=function(){var e=null;this._options.debug&&console&&"function"==typeof console.log&&((e=[].slice.call(arguments))[0]="[Instafeed] ["+e[0]+"]",console.log.apply(null,e))},t.prototype._runHook=function(e,t){var n=!1;if("function"==typeof this._options[e])try{this._options[e](t),n=!0}catch(t){this._debug("runHook","error calling hook",e,t)}return n},t});