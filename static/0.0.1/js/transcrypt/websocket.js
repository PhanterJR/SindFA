// Transcrypt'ed from Python, 2020-02-20 14:42:12
var config = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_config__ from './config.js';
__nest__ (config, '', __module_config__);
var __name__ = 'websocket';
export var onConectionClose = function (evt) {
	console.log ('closed', evt.data);
	if (config.CONFIG.debug) {
		location.reload ();
	}
};
export var onError = function (evt) {
	if (config.CONFIG ['PROJECT'] ['debug']) {
		var r = confirm ('Reload the page?');
		if (r) {
			location.reload ();
		}
	}
};
export var start = function (check_compilation) {
	if (typeof check_compilation == 'undefined' || (check_compilation != null && check_compilation.hasOwnProperty ("__kwargtrans__"))) {;
		var check_compilation = false;
	};
	var API_WEBSOCKET_ADDRESS = config.CONFIG ['CONFIGJS'] ['api_websocket_address'];
	var ws = new WebSocket (API_WEBSOCKET_ADDRESS);
	ws.onopen = (function __lambda__ () {
		return tuple ([ws.send ('Hello, world'), console.log ('opening')]);
	});
	ws.onmessage = (function __lambda__ (evt) {
		return console.log (evt.data);
	});
	ws.onerror = (function __lambda__ (evt) {
		return onError (evt);
	});
	ws.onclose = (function __lambda__ (event) {
		return onConectionClose (this, event);
	});
	if (check_compilation) {
		var msg = 'check_compilation[{0}]'.format (config.CONFIG ['PROJECT'] ['compilation']);
		console.log (msg);
		ws.send (msg);
	}
};

//# sourceMappingURL=websocket.map