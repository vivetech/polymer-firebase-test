try{webpackJsonpFirebase([2],{60:function(aa,t,e){"use strict";function n(a){return"storage/"+a}function r(){return new Ya(Za.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function ba(a){return new Ya(Za.OBJECT_NOT_FOUND,"Object '"+a+"' does not exist.")}function i(a){return new Ya(Za.QUOTA_EXCEEDED,"Quota for bucket '"+a+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function a(){return new Ya(Za.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function o(a){return new Ya(Za.UNAUTHORIZED,"User does not have permission to access '"+a+"'.")}function u(){return new Ya(Za.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function c(){return new Ya(Za.CANCELED,"User canceled the upload/download.")}function ca(a){return new Ya(Za.INVALID_URL,"Invalid URL '"+a+"'.")}function l(a){return new Ya(Za.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+a+"'.")}function da(){return new Ya(Za.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function f(){return new Ya(Za.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function d(){return new Ya(Za.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function h(a,b,c){return new Ya(Za.INVALID_ARGUMENT,"Invalid argument in `"+b+"` at index "+a+": "+c)}function p(a,b,c,d){var e,f;return a===b?(e=a,f=1===a?"argument":"arguments"):(e="between "+a+" and "+b,f="arguments"),new Ya(Za.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+c+"`: Expected "+e+" "+f+", received "+d+".")}function b(){return new Ya(Za.APP_DELETED,"The Firebase app was deleted.")}function m(a){return new Ya(Za.INVALID_ROOT_OPERATION,"The operation '"+a+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function s(a,b){return new Ya(Za.INVALID_FORMAT,"String does not match format '"+a+"': "+b)}function g(a){throw new Ya(Za.INTERNAL_ERROR,"Internal error: "+a)}function v(a){switch(a){case $a.RAW:case $a.BASE64:case $a.BASE64URL:case $a.DATA_URL:return;default:throw"Expected one of the event types: ["+$a.RAW+", "+$a.BASE64+", "+$a.BASE64URL+", "+$a.DATA_URL+"].";}}function y(a,b){switch(a){case $a.RAW:return new _a(w(b));case $a.BASE64:case $a.BASE64URL:return new _a(R(a,b));case $a.DATA_URL:return new _a(A(b),N(b));}throw r()}function w(b){for(var c,d=[],e=0;e<b.length;e++)if(c=b.charCodeAt(e),127>=c)d.push(c);else if(2047>=c)d.push(192|c>>6,128|63&c);else if(55296==(64512&c)){var f=e<b.length-1&&56320==(64512&b.charCodeAt(e+1));if(f){var g=c,h=b.charCodeAt(++e);c=65536|(1023&g)<<10|1023&h,d.push(240|c>>18,128|63&c>>12,128|63&c>>6,128|63&c)}else d.push(239,191,189)}else 56320==(64512&c)?d.push(239,191,189):d.push(224|c>>12,128|63&c>>6,128|63&c);return new Uint8Array(d)}function E(a){var b;try{b=decodeURIComponent(a)}catch(a){throw s($a.DATA_URL,"Malformed data URL.")}return w(b)}function R(b,d){switch(b){case $a.BASE64:var e=-1!==d.indexOf("-"),f=-1!==d.indexOf("_");if(e||f){var g=e?"-":"_";throw s(b,"Invalid character '"+g+"' found: is it base64url encoded?")}break;case $a.BASE64URL:var h=-1!==d.indexOf("+"),i=-1!==d.indexOf("/");if(h||i){var g=h?"+":"/";throw s(b,"Invalid character '"+g+"' found: is it base64 encoded?")}d=d.replace(/-/g,"+").replace(/_/g,"/");}var a;try{a=atob(d)}catch(a){throw s(b,"Invalid character found")}for(var j=new Uint8Array(a.length),k=0;k<a.length;k++)j[k]=a.charCodeAt(k);return j}function A(a){var b=new ab(a);return b.base64?R($a.BASE64,b.rest):E(b.rest)}function N(a){return new ab(a).contentType}function O(a,b){return!!(a.length>=b.length)&&a.substring(a.length-b.length)===b}function C(a){switch(a){case cb.RUNNING:case cb.PAUSING:case cb.CANCELING:return db.RUNNING;case cb.PAUSED:return db.PAUSED;case cb.SUCCESS:return db.SUCCESS;case cb.CANCELED:return db.CANCELED;case cb.ERROR:default:return db.ERROR;}}function S(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in a)S(a,c)&&b(c,a[c])}function I(a){if(null==a)return{};var b={};return k(a,function(a,c){b[a]=c}),b}function L(a){return new eb.b(a)}function x(a){return eb.b.resolve(a)}function P(a){return eb.b.reject(a)}function D(a){return null!=a}function M(a){return void 0!==a}function T(a){return"function"==typeof a}function B(a){return"object"===(void 0===a?"undefined":fb(a))}function G(a){return B(a)&&null!==a}function j(a){return B(a)&&!Array.isArray(a)}function q(a){return"string"==typeof a||a instanceof String}function F(a){return"number"==typeof a||a instanceof Number}function H(a){return z()&&a instanceof Blob}function z(){return"undefined"!=typeof Blob}function U(a){var b;try{b=JSON.parse(a)}catch(a){return null}return j(b)?b:null}function V(a){if(0==a.length)return null;var b=a.lastIndexOf("/");return-1===b?"":a.slice(0,b)}function K(a,b){var c=b.split("/").filter(function(a){return 0<a.length}).join("/");return 0===a.length?c:a+"/"+c}function W(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)}function J(a){return Ua+Wa+a}function Q(a){return Va+Wa+a}function X(a){return Ua+Xa+a}function Y(a){var b=encodeURIComponent,c="?";return k(a,function(a,d){var e=b(a)+"="+b(d);c=c+e+"&"}),c=c.slice(0,-1)}function Z(a,b){return b}function $(a){return!q(a)||2>a.length?a:(a=a,W(a))}function _(){function a(a,b){return $(b)}function b(a,b){return D(b)?+b:b}function c(a,b){if(!(q(b)&&0<b.length))return[];var c=encodeURIComponent;return b.split(",").map(function(b){var d=a.bucket,f=a.fullPath;return Q("/b/"+c(d)+"/o/"+c(f))+Y({alt:"media",token:b})})}if(kb)return kb;var d=[new jb("bucket"),new jb("generation"),new jb("metageneration"),new jb("name","fullPath",!0)],e=new jb("name");e.xform=a,d.push(e);var f=new jb("size");return f.xform=b,d.push(f),d.push(new jb("timeCreated")),d.push(new jb("updated")),d.push(new jb("md5Hash",null,!0)),d.push(new jb("cacheControl",null,!0)),d.push(new jb("contentDisposition",null,!0)),d.push(new jb("contentEncoding",null,!0)),d.push(new jb("contentLanguage",null,!0)),d.push(new jb("contentType",null,!0)),d.push(new jb("metadata","customMetadata",!0)),d.push(new jb("downloadTokens","downloadURLs",!1,c)),kb=d}function ea(a,b){function c(){var c=a.bucket,d=a.fullPath,e=new ib(c,d);return b.makeStorageReference(e)}Object.defineProperty(a,"ref",{get:c})}function fa(b,c,d){for(var e,a={type:"file"},f=d.length,g=0;g<f;g++)e=d[g],a[e.local]=e.xform(a,c[e.server]);return ea(a,b),a}function ga(a,b,c){var d=U(b);return null===d?null:fa(a,d,c)}function ha(a,b){for(var c,d={},e=b.length,f=0;f<e;f++)c=b[f],c.writable&&(d[c.server]=a[c.local]);return JSON.stringify(d)}function ia(a){if(!a||!B(a))throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b){if(!B(c))throw"Expected object for 'customMetadata' mapping.";}else if(G(c))throw"Mapping for '"+b+"' cannot be an object."}}function ja(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].optional){d=f;break}if(!(d<=c.length&&c.length<=e))throw p(d,e,a,c.length);for(var f=0;f<c.length;f++)try{b[f].validator(c[f])}catch(b){throw b instanceof Error?h(f,a,b.message):h(f,a,b)}}function ka(a,b){return function(c){a(c),b(c)}}function la(a,b){function c(a){if(!q(a))throw"Expected string."}var d;return d=a?ka(c,a):c,new lb(d,b)}function ma(){function a(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||z()&&a instanceof Blob))throw"Expected Blob or File."}return new lb(a)}function na(a){return new lb(ia,a)}function oa(){function a(a){if(!(F(a)&&0<=a))throw"Expected a number 0 or greater."}return new lb(a)}function pa(a,b){return new lb(function(b){if(!(null===b||D(b)&&b instanceof Object))throw"Expected an Object.";void 0!==a&&null!==a&&a(b)},b)}function qa(a){return new lb(function(a){if(null!==a&&!T(a))throw"Expected a Function."},a)}function ra(){return"undefined"==typeof BlobBuilder?"undefined"==typeof WebKitBlobBuilder?void 0:WebKitBlobBuilder:BlobBuilder}function sa(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];var c=ra();if(void 0!==c){for(var d=new c,e=0;e<a.length;e++)d.append(a[e]);return d.getBlob()}if(z())return new Blob(a);throw Error("This browser doesn't seem to support creating Blobs")}function ta(a,b,c){return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,c):a.slice?a.slice(b,c):null}function ua(a,b){return-1!==a.indexOf(b)}function va(a){return Array.prototype.slice.call(a)}function wa(a,b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)}function xa(a){if(!a)throw r()}function ya(a,b){function c(c,d){var e=ga(a,d,b);return xa(null!==e),e}return c}function za(b){function c(c,d){var f;return f=401===c.getStatus()?a():402===c.getStatus()?i(b.bucket):403===c.getStatus()?o(b.path):d,f.setServerResponseProp(d.serverResponseProp()),f}return c}function Aa(a){function b(b,d){var f=c(b,d);return 404===b.getStatus()&&(f=ba(a.path)),f.setServerResponseProp(d.serverResponseProp()),f}var c=za(a);return b}function Ba(b,c,d){var e=c.fullServerUrl(),f=J(e),g=b.maxOperationRetryTime(),h=new nb(f,"GET",ya(b,d),g);return h.errorHandler=Aa(c),h}function Ca(b,d,e,f){var g=d.fullServerUrl(),h=J(g),i=ha(e,f),a=b.maxOperationRetryTime(),j=new nb(h,"PATCH",ya(b,f),a);return j.headers={"Content-Type":"application/json; charset=utf-8"},j.body=i,j.errorHandler=Aa(d),j}function Da(b,c){var d=c.fullServerUrl(),e=J(d),f=b.maxOperationRetryTime(),g=new nb(e,"DELETE",function(){},f);return g.successCodes=[200,204],g.errorHandler=Aa(c),g}function Ea(a,b){return a&&a.contentType||b&&b.type()||"application/octet-stream"}function Fa(a,b,c){var d=I(c);return d.fullPath=a.path,d.size=b.size(),d.contentType||(d.contentType=Ea(null,b)),d}function Ga(f,g,e,j,k){var m=g.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"},a=function(){for(var a="",b=0;2>b;b++)a+=(""+Math.random()).slice(2);return a}();i["Content-Type"]="multipart/related; boundary="+a;var n=Fa(g,j,k),o=ha(n,e),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+o+"\r\n--"+a+"\r\nContent-Type: "+n.contentType+"\r\n\r\n",l=mb.getBlob(c,j,"\r\n--"+a+"--");if(null===l)throw da();var h={name:n.fullPath},d=X(m),p=f.maxUploadRetryTime(),q=new nb(d,"POST",ya(f,e),p);return q.urlParams=h,q.headers=i,q.body=l.uploadData(),q.errorHandler=za(g),q}function Ha(a,b){var c;try{c=a.getResponseHeader("X-Goog-Upload-Status")}catch(a){xa(!1)}return xa(ua(b||["active"],c)),c}function Ia(b,d,e,g,i){var j=d.bucketOnlyServerUrl(),a=Fa(d,g,i),k={name:a.fullPath},m=X(j),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":g.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ha(a,e),n=b.maxUploadRetryTime(),h=new nb(m,"POST",function(a){Ha(a);var b;try{b=a.getResponseHeader("X-Goog-Upload-URL")}catch(a){xa(!1)}return xa(q(b)),b},n);return h.urlParams=k,h.headers=c,h.body=l,h.errorHandler=za(d),h}function Ja(b,c,d,e){function f(a){var b,c=Ha(a,["active","final"]);try{b=a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(a){xa(!1)}var d=parseInt(b,10);return xa(!isNaN(d)),new ob(d,e.size(),"final"===c)}var g=b.maxUploadRetryTime(),a=new nb(d,"POST",f,g);return a.headers={"X-Goog-Upload-Command":"query"},a.errorHandler=za(c),a}function Ka(d,j,e,k,n,q,i,a){function o(b,c){var d,e=Ha(b,["active","final"]),a=r.current+l,f=k.size();return d="final"===e?ya(j,q)(b,c):null,new ob(a,f,"final"===e,d)}var r=new ob(0,0);if(i?(r.current=i.current,r.total=i.total):(r.current=0,r.total=k.size()),k.size()!==r.total)throw f();var c=r.total-r.current,l=c;0<n&&(l=Math.min(l,n));var p=r.current,h=p+l,s=l===c?"upload, finalize":"upload",t={"X-Goog-Upload-Command":s,"X-Goog-Upload-Offset":r.current},b=k.slice(p,h);if(null===b)throw da();var m=j.maxUploadRetryTime(),u=new nb(e,"POST",o,m);return u.headers=t,u.body=b.uploadData(),u.progressCallback=a||null,u.errorHandler=za(d),u}function La(a){return function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];x(!0).then(function(){a.apply(null,b)})}}function Ma(b,d,e){function g(){return 2===l}function j(){o||(o=!0,d.apply(null,arguments))}function k(a){n=setTimeout(function(){n=null,b(i,g())},a)}function i(b){for(var d=[],e=1;e<arguments.length;e++)d[e-1]=arguments[e];if(!o){if(b)return void j.apply(null,arguments);if(g()||c)return void j.apply(null,arguments);64>m&&(m*=2);var f;1===l?(l=2,f=0):f=1e3*(m+Math.random()),k(f)}}function a(a){p||(p=!0,o||(null===n?a||(l=1):(a||(l=2),clearTimeout(n),k(0))))}var m=1,n=null,c=!1,l=0,o=!1,p=!1;return k(0),setTimeout(function(){c=!0,a(!0)},e),a}function Na(a){a(!1)}function Oa(a,b){null!==b&&0<b.length&&(a.Authorization="Firebase "+b)}function Pa(a){var b=void 0===wb.default?"AppManager":wb.default.SDK_VERSION;a["X-Firebase-Storage-Version"]="webjs/"+b}function Qa(a,b,c){var d=Y(a.urlParams),e=a.url+d,f=I(a.headers);return Oa(f,b),Pa(f),new xb(e,a.method,f,a.body,a.successCodes,a.additionalRetryCodes,a.handler,a.errorHandler,a.timeout,a.progressCallback,c)}function Ra(a,b,c){return new zb(a,new hb(),c)}function Sa(a){a.INTERNAL.registerService(Bb,Ra,{TaskState:db,TaskEvent:bb,StringFormat:$a,Storage:zb,Reference:sb},void 0,!0)}Object.defineProperty(t,"__esModule",{value:!0});var Ta,Ua="https://firebasestorage.googleapis.com",Va="https://firebasestorage.googleapis.com",Wa="/v0",Xa="/v0",Ya=function(){function a(a,b){this.t=n(a),this.e="Firebase Storage: "+b,this.n=null,this.r="FirebaseError"}return a.prototype.codeProp=function(){return this.code},a.prototype.codeEquals=function(a){return n(a)===this.codeProp()},a.prototype.serverResponseProp=function(){return this.n},a.prototype.setServerResponseProp=function(a){this.n=a},Object.defineProperty(a.prototype,"name",{get:function(){return this.r},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"code",{get:function(){return this.t},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"message",{get:function(){return this.e},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"serverResponse",{get:function(){return this.n},enumerable:!0,configurable:!0}),a}(),Za={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"},$a={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},_a=function(){function a(a,b){this.data=a,this.contentType=b||null}return a}(),ab=function(){function a(a){this.base64=!1,this.contentType=null;var b=a.match(/^data:([^,]+)?,/);if(null===b)throw s($a.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var c=b[1]||null;null!=c&&(this.base64=O(c,";base64"),this.contentType=this.base64?c.substring(0,c.length-7):c),this.rest=a.substring(a.indexOf(",")+1)}return a}(),bb={STATE_CHANGED:"state_changed"},cb={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},db={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},eb=e(3),fb="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a){a[a.NO_ERROR=0]="NO_ERROR",a[a.NETWORK_ERROR=1]="NETWORK_ERROR",a[a.ABORT=2]="ABORT"}(Ta||(Ta={}));var gb=function(){function a(){var a=this;this.o=!1,this.i=new XMLHttpRequest,this.a=Ta.NO_ERROR,this.u=L(function(b){a.i.addEventListener("abort",function(){a.a=Ta.ABORT,b(a)}),a.i.addEventListener("error",function(){a.a=Ta.NETWORK_ERROR,b(a)}),a.i.addEventListener("load",function(){b(a)})})}return a.prototype.send=function(a,b,c,d){var f=this;if(this.o)throw g("cannot .send() more than once");return this.o=!0,this.i.open(b,a,!0),D(d)&&k(d,function(a,b){f.i.setRequestHeader(a,""+b)}),D(c)?this.i.send(c):this.i.send(),this.u},a.prototype.getErrorCode=function(){if(!this.o)throw g("cannot .getErrorCode() before sending");return this.a},a.prototype.getStatus=function(){if(!this.o)throw g("cannot .getStatus() before sending");try{return this.i.status}catch(a){return-1}},a.prototype.getResponseText=function(){if(!this.o)throw g("cannot .getResponseText() before sending");return this.i.responseText},a.prototype.abort=function(){this.i.abort()},a.prototype.getResponseHeader=function(a){return this.i.getResponseHeader(a)},a.prototype.addUploadProgressListener=function(a){D(this.i.upload)&&this.i.upload.addEventListener("progress",a)},a.prototype.removeUploadProgressListener=function(a){D(this.i.upload)&&this.i.upload.removeEventListener("progress",a)},a}(),hb=function(){function a(){}return a.prototype.createXhrIo=function(){return new gb},a}(),ib=function(){function a(a,b){this.bucket=a,this.s=b}return Object.defineProperty(a.prototype,"path",{get:function(){return this.s},enumerable:!0,configurable:!0}),a.prototype.fullServerUrl=function(){var a=encodeURIComponent;return"/b/"+a(this.bucket)+"/o/"+a(this.path)},a.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},a.makeFromBucketSpec=function(b){var c;try{c=a.makeFromUrl(b)}catch(c){return new a(b,"")}if(""===c.path)return c;throw l(b)},a.makeFromUrl=function(b){function e(a){"/"===a.path.charAt(a.path.length-1)&&(a.s=a.s.slice(0,-1))}function g(a){a.s=decodeURIComponent(a.path)}for(var j=null,k=/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,m={bucket:1,path:3},o=/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,p={bucket:1,path:3},q=[{regex:k,indices:m,postModify:e},{regex:o,indices:p,postModify:g}],c=0;c<q.length;c++){var l=q[c],h=l.regex.exec(b);if(h){var f=h[l.indices.bucket],d=h[l.indices.path];d||(d=""),j=new a(f,d),l.postModify(j);break}}if(null==j)throw ca(b);return j},a}(),jb=function(){function a(a,b,c,d){this.server=a,this.local=b||a,this.writable=!!c,this.xform=d||Z}return a}(),kb=null,lb=function(){function a(a,b){var c=this;this.validator=function(b){c.optional&&!M(b)||a(b)},this.optional=!!b}return a}(),mb=function(){function b(a,b){var c=0,d="";H(a)?(this.c=a,c=a.size,d=a.type):a instanceof ArrayBuffer?(b?this.c=new Uint8Array(a):(this.c=new Uint8Array(a.byteLength),this.c.set(new Uint8Array(a))),c=this.c.length):a instanceof Uint8Array&&(b?this.c=a:(this.c=new Uint8Array(a.length),this.c.set(a)),c=a.length),this.l=c,this.p=d}return b.prototype.size=function(){return this.l},b.prototype.type=function(){return this.p},b.prototype.slice=function(a,c){if(H(this.c)){var d=this.c,e=ta(d,a,c);return null===e?null:new b(e)}return new b(new Uint8Array(this.c.buffer,a,c-a),!0)},b.getBlob=function(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];if(z()){var e=c.map(function(a){return a instanceof b?a.c:a});return new b(sa.apply(null,e))}var f=c.map(function(a){return q(a)?y($a.RAW,a).data:a.c}),g=0;f.forEach(function(a){g+=a.byteLength});var h=new Uint8Array(g),a=0;return f.forEach(function(b){for(var c=0;c<b.length;c++)h[a++]=b[c]}),new b(h,!0)},b.prototype.uploadData=function(){return this.c},b}(),nb=function(){function a(a,b,c,d){this.url=a,this.method=b,this.handler=c,this.timeout=d,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return a}(),ob=function(){function a(a,b,c,d){this.current=a,this.total=b,this.finalized=!!c,this.metadata=d||null}return a}(),pb=function(){function a(a,b,c){if(T(a)||D(b)||D(c))this.next=a,this.error=b||null,this.complete=c||null;else{var d=a;this.next=d.next||null,this.error=d.error||null,this.complete=d.complete||null}}return a}(),qb=function(){function a(a,b,c,d,e,f){this.bytesTransferred=a,this.totalBytes=b,this.state=c,this.metadata=d,this.task=e,this.ref=f}return Object.defineProperty(a.prototype,"downloadURL",{get:function(){if(null!==this.metadata){var a=this.metadata.downloadURLs;return null!=a&&null!=a[0]?a[0]:null}return null},enumerable:!0,configurable:!0}),a}(),rb=function(){function a(b,c,d,e,f,g){void 0===g&&(g=null);var h=this;this.h=0,this.f=!1,this.d=!1,this._=[],this.v=null,this.m=null,this.y=null,this.g=1,this.R=null,this.w=null,this.U=b,this.T=c,this.A=d,this.N=f,this.O=g,this.C=e,this.S=this.k(this.N),this.I=cb.RUNNING,this.L=function(a){h.y=null,h.g=1,a.codeEquals(Za.CANCELED)?(h.f=!0,h.x()):(h.v=a,h.P(cb.ERROR))},this.D=function(a){h.y=null,a.codeEquals(Za.CANCELED)?h.x():(h.v=a,h.P(cb.ERROR))},this.M=L(function(a,b){h.R=a,h.w=b,h.W()}),this.M.then(null,function(){})}return a.prototype.B=function(){var a=this,b=this.h;return function(c){a.G(b+c)}},a.prototype.k=function(a){return 262144<a.size()},a.prototype.W=function(){this.I===cb.RUNNING&&null===this.y&&(this.S?null===this.m?this.j():this.f?this.q():this.d?this.F():this.H():this.z())},a.prototype.X=function(a){var b=this;this.T.getAuthToken().then(function(c){switch(b.I){case cb.RUNNING:a(c);break;case cb.CANCELING:b.P(cb.CANCELED);break;case cb.PAUSING:b.P(cb.PAUSED);}})},a.prototype.j=function(){var a=this;this.X(function(b){var c=Ia(a.T,a.A,a.C,a.N,a.O),d=a.T.makeRequest(c,b);a.y=d,d.getPromise().then(function(b){a.y=null,a.m=b,a.f=!1,a.x()},a.L)})},a.prototype.q=function(){var a=this,b=this.m;this.X(function(c){var d=Ja(a.T,a.A,b,a.N),e=a.T.makeRequest(d,c);a.y=e,e.getPromise().then(function(b){b=b,a.y=null,a.G(b.current),a.f=!1,b.finalized&&(a.d=!0),a.x()},a.L)})},a.prototype.H=function(){var b=this,a=262144*this.g,c=new ob(this.h,this.N.size()),d=this.m;this.X(function(e){var f;try{f=Ka(b.A,b.T,d,b.N,a,b.C,c,b.B())}catch(a){return b.v=a,void b.P(cb.ERROR)}var g=b.T.makeRequest(f,e);b.y=g,g.getPromise().then(function(a){b.V(),b.y=null,b.G(a.current),a.finalized?(b.O=a.metadata,b.P(cb.SUCCESS)):b.x()},b.L)})},a.prototype.V=function(){33554432>262144*this.g&&(this.g*=2)},a.prototype.F=function(){var a=this;this.X(function(b){var c=Ba(a.T,a.A,a.C),d=a.T.makeRequest(c,b);a.y=d,d.getPromise().then(function(b){a.y=null,a.O=b,a.P(cb.SUCCESS)},a.D)})},a.prototype.z=function(){var a=this;this.X(function(b){var c=Ga(a.T,a.A,a.C,a.N,a.O),d=a.T.makeRequest(c,b);a.y=d,d.getPromise().then(function(b){a.y=null,a.O=b,a.G(a.N.size()),a.P(cb.SUCCESS)},a.L)})},a.prototype.G=function(a){var b=this.h;this.h=a,this.h!==b&&this.K()},a.prototype.P=function(a){if(this.I!==a)switch(a){case cb.CANCELING:case cb.PAUSING:this.I=a,null!==this.y&&this.y.cancel();break;case cb.RUNNING:var b=this.I===cb.PAUSED;this.I=a,b&&(this.K(),this.W());break;case cb.PAUSED:this.I=a,this.K();break;case cb.CANCELED:this.v=c(),this.I=a,this.K();break;case cb.ERROR:case cb.SUCCESS:this.I=a,this.K();}},a.prototype.x=function(){switch(this.I){case cb.PAUSING:this.P(cb.PAUSED);break;case cb.CANCELING:this.P(cb.CANCELED);break;case cb.RUNNING:this.W();}},Object.defineProperty(a.prototype,"snapshot",{get:function(){var a=C(this.I);return new qb(this.h,this.N.size(),a,this.O,this,this.U)},enumerable:!0,configurable:!0}),a.prototype.on=function(b,d,e,f){function g(b){try{return void j(b)}catch(a){}try{if(c(b),!(M(b.next)||M(b.error)||M(b.complete)))throw""}catch(b){throw a}}function i(a){function b(b,c){null!==a&&ja("on",a,arguments);var d=new pb(b,c,f);return k.Z(d),function(){k.J(d)}}return b}void 0===d&&(d=void 0),void 0===e&&(e=void 0),void 0===f&&(f=void 0);var a="Expected a function or an Object with one of `next`, `error`, `complete` properties.",j=qa(!0).validator,c=pa(null,!0).validator;ja("on",[la(function(){if(b!==bb.STATE_CHANGED)throw"Expected one of the event types: ["+bb.STATE_CHANGED+"]."}),pa(g,!0),qa(!0),qa(!0)],arguments);var k=this,l=[pa(function(b){if(null===b)throw a;g(b)}),qa(!0),qa(!0)];return M(d)||M(e)||M(f)?i(null)(d,e,f):i(l)},a.prototype.then=function(a,b){return this.M.then(a,b)},a.prototype.catch=function(a){return this.then(null,a)},a.prototype.Z=function(a){this._.push(a),this.Q(a)},a.prototype.J=function(a){wa(this._,a)},a.prototype.K=function(){var a=this;this.Y(),va(this._).forEach(function(b){a.Q(b)})},a.prototype.Y=function(){if(null!==this.R){var a=!0;switch(C(this.I)){case db.SUCCESS:La(this.R.bind(null,this.snapshot))();break;case db.CANCELED:case db.ERROR:La(this.w.bind(null,this.v))();break;default:a=!1;}a&&(this.R=null,this.w=null)}},a.prototype.Q=function(a){switch(C(this.I)){case db.RUNNING:case db.PAUSED:null!==a.next&&La(a.next.bind(a,this.snapshot))();break;case db.SUCCESS:null!==a.complete&&La(a.complete.bind(a))();break;case db.CANCELED:case db.ERROR:null!==a.error&&La(a.error.bind(a,this.v))();break;default:null!==a.error&&La(a.error.bind(a,this.v))();}},a.prototype.resume=function(){ja("resume",[],arguments);var a=this.I===cb.PAUSED||this.I===cb.PAUSING;return a&&this.P(cb.RUNNING),a},a.prototype.pause=function(){ja("pause",[],arguments);var a=this.I===cb.RUNNING;return a&&this.P(cb.PAUSING),a},a.prototype.cancel=function(){ja("cancel",[],arguments);var a=this.I===cb.RUNNING||this.I===cb.PAUSING;return a&&this.P(cb.CANCELING),a},a}(),sb=function(){function a(a,b){this.authWrapper=a,this.location=b instanceof ib?b:ib.makeFromUrl(b)}return a.prototype.toString=function(){return ja("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},a.prototype.newRef=function(b,c){return new a(b,c)},a.prototype.mappings=function(){return _()},a.prototype.child=function(a){ja("child",[la()],arguments);var b=K(this.location.path,a),c=new ib(this.location.bucket,b);return this.newRef(this.authWrapper,c)},Object.defineProperty(a.prototype,"parent",{get:function(){var a=V(this.location.path);if(null===a)return null;var b=new ib(this.location.bucket,a);return this.newRef(this.authWrapper,b)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"root",{get:function(){var a=new ib(this.location.bucket,"");return this.newRef(this.authWrapper,a)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"name",{get:function(){return W(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),a.prototype.put=function(a,b){return void 0===b&&(b=null),ja("put",[ma(),na(!0)],arguments),this.$("put"),new rb(this,this.authWrapper,this.location,this.mappings(),new mb(a),b)},a.prototype.putString=function(a,b,c){void 0===b&&(b=$a.RAW),ja("putString",[la(),la(v,!0),na(!0)],arguments),this.$("putString");var d=y(b,a),e=I(c);return!D(e.contentType)&&D(d.contentType)&&(e.contentType=d.contentType),new rb(this,this.authWrapper,this.location,this.mappings(),new mb(d.data,!0),e)},a.prototype.delete=function(){ja("delete",[],arguments),this.$("delete");var a=this;return this.authWrapper.getAuthToken().then(function(b){var c=Da(a.authWrapper,a.location);return a.authWrapper.makeRequest(c,b).getPromise()})},a.prototype.getMetadata=function(){ja("getMetadata",[],arguments),this.$("getMetadata");var a=this;return this.authWrapper.getAuthToken().then(function(b){var c=Ba(a.authWrapper,a.location,a.mappings());return a.authWrapper.makeRequest(c,b).getPromise()})},a.prototype.updateMetadata=function(a){ja("updateMetadata",[na()],arguments),this.$("updateMetadata");var b=this;return this.authWrapper.getAuthToken().then(function(c){var d=Ca(b.authWrapper,b.location,a,b.mappings());return b.authWrapper.makeRequest(d,c).getPromise()})},a.prototype.getDownloadURL=function(){return ja("getDownloadURL",[],arguments),this.$("getDownloadURL"),this.getMetadata().then(function(a){var b=a.downloadURLs[0];if(D(b))return b;throw d()})},a.prototype.$=function(a){if(""===this.location.path)throw m(a)},a}(),tb=function(){function a(a){this.M=P(a)}return a.prototype.getPromise=function(){return this.M},a.prototype.cancel=function(a){void 0===a&&(a=!1)},a}(),ub=function(){function a(){this.tt={},this.et=-9007199254740991}return a.prototype.addRequest=function(a){function b(){delete d.tt[c]}var c=this.et;this.et++,this.tt[c]=a;var d=this;a.getPromise().then(b,b)},a.prototype.clear=function(){k(this.tt,function(a,b){b&&b.cancel(!0)}),this.tt={}},a}(),vb=function(){function c(b,d,e,f,g){if(this.nt=null,this.rt=!1,this.ot=b,null!==this.ot){var h=this.ot.options;D(h)&&(this.nt=c.it(h))}this.ut=d,this.st=e,this.ct=g,this.lt=f,this.pt=12e4,this.ht=6e4,this.ft=new ub}return c.it=function(a){var b=a.storageBucket||null;return null==b?null:ib.makeFromBucketSpec(b).bucket},c.prototype.getAuthToken=function(){return null!==this.ot&&D(this.ot.INTERNAL)&&D(this.ot.INTERNAL.getToken)?this.ot.INTERNAL.getToken().then(function(a){return null===a?null:a.accessToken},function(){return null}):x(null)},c.prototype.bucket=function(){if(this.rt)throw b();return this.nt},c.prototype.service=function(){return this.lt},c.prototype.makeStorageReference=function(a){return this.ut(this,a)},c.prototype.makeRequest=function(a,c){if(this.rt)return new tb(b());var d=this.st(a,c,this.ct);return this.ft.addRequest(d),d},c.prototype.deleteApp=function(){this.rt=!0,this.ot=null,this.ft.clear()},c.prototype.maxUploadRetryTime=function(){return this.ht},c.prototype.setMaxUploadRetryTime=function(a){this.ht=a},c.prototype.maxOperationRetryTime=function(){return this.pt},c.prototype.setMaxOperationRetryTime=function(a){this.pt=a},c}(),wb=e(9),xb=function(){function a(b,d,e,f,g,h,i,a,j,k,c){this.dt=null,this._t=null,this.R=null,this.w=null,this.vt=!1,this.bt=!1,this.mt=b,this.yt=d,this.gt=e,this.Rt=f,this.Et=g.slice(),this.wt=h.slice(),this.Ut=i,this.Tt=a,this.At=k,this.Nt=j,this.ct=c;var l=this;this.M=L(function(a,b){l.R=a,l.w=b,l.W()})}return a.prototype.W=function(){function a(b,a){function c(a){var b=a.loaded,c=a.lengthComputable?a.total:-1;null!==f.At&&f.At(b,c)}if(a)return void b(!1,new yb(!1,null,!0));var d=f.ct.createXhrIo();f.dt=d,null!==f.At&&d.addUploadProgressListener(c),d.send(f.mt,f.yt,f.Rt,f.gt).then(function(d){null!==f.At&&d.removeUploadProgressListener(c),f.dt=null,d=d;var e=d.getErrorCode()===Ta.NO_ERROR,g=d.getStatus();if(!e||f.Ot(g)){var h=d.getErrorCode()===Ta.ABORT;return void b(!1,new yb(!1,null,h))}var a=ua(f.Et,g);b(!0,new yb(a,d))})}function d(d,g){var h=f.R,j=f.w,i=g.xhr;if(g.wasSuccessCode)try{var a=f.Ut(i,i.getResponseText());M(a)?h(a):h()}catch(a){j(a)}else if(null!==i){var k=r();k.setServerResponseProp(i.getResponseText()),j(f.Tt?f.Tt(i,k):k)}else if(g.canceled){var k=f.bt?b():c();j(k)}else{var k=u();j(k)}}var f=this;this.vt?d(!1,new yb(!1,null,!0)):this._t=Ma(a,d,this.Nt)},a.prototype.getPromise=function(){return this.M},a.prototype.cancel=function(a){this.vt=!0,this.bt=a||!1,null!==this._t&&Na(this._t),null!==this.dt&&this.dt.abort()},a.prototype.Ot=function(a){var b=ua([408,429],a),c=ua(this.wt,a);return 500<=a&&600>a||b||c},a}(),yb=function(){function a(a,b,c){this.wasSuccessCode=a,this.xhr=b,this.canceled=!!c}return a}(),zb=function(){function a(a,b,c){if(this.nt=null,this.T=new vb(a,function(a,b){return new sb(a,b)},Qa,this,b),this.ot=a,null!=c)this.nt=ib.makeFromBucketSpec(c);else{var d=this.T.bucket();null!=d&&(this.nt=new ib(d,""))}this.Ct=new Ab(this)}return a.prototype.ref=function(a){if(ja("ref",[la(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.nt)throw Error("No Storage Bucket defined in Firebase Options.");var b=new sb(this.T,this.nt);return null==a?b:b.child(a)},a.prototype.refFromURL=function(a){return ja("refFromURL",[la(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{ib.makeFromUrl(a)}catch(a){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new sb(this.T,a)},Object.defineProperty(a.prototype,"maxUploadRetryTime",{get:function(){return this.T.maxUploadRetryTime()},enumerable:!0,configurable:!0}),a.prototype.setMaxUploadRetryTime=function(a){ja("setMaxUploadRetryTime",[oa()],arguments),this.T.setMaxUploadRetryTime(a)},Object.defineProperty(a.prototype,"maxOperationRetryTime",{get:function(){return this.T.maxOperationRetryTime()},enumerable:!0,configurable:!0}),a.prototype.setMaxOperationRetryTime=function(a){ja("setMaxOperationRetryTime",[oa()],arguments),this.T.setMaxOperationRetryTime(a)},Object.defineProperty(a.prototype,"app",{get:function(){return this.ot},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"INTERNAL",{get:function(){return this.Ct},enumerable:!0,configurable:!0}),a}(),Ab=function(){function a(a){this.lt=a}return a.prototype.delete=function(){return this.lt.T.deleteApp(),x(void 0)},a}();t.registerStorage=Sa;var Bb="storage";Sa(wb.default)}},[60])}catch(a){throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}