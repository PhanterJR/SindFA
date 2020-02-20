// Transcrypt'ed from Python, 2020-02-20 05:11:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'phanterpwa.apptools.validations';
export var validators_list = new set (['IS_NOT_EMPTY', 'IS_DATE', 'IS_EQUALS', 'IS_ACTIVATION_CODE', 'IS_EMAIL']);
export var zfill = function (number, size) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'number': var number = __allkwargs0__ [__attrib0__]; break;
					case 'size': var size = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var number = int (number);
	var number = str (number);
	var s = number;
	for (var x = 0; x < size - len (number); x++) {
		var s = '0' + s;
	}
	return s;
};
export var check_activation_code = function (code, size) {
	if (typeof size == 'undefined' || (size != null && size.hasOwnProperty ("__kwargtrans__"))) {;
		var size = 6;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'code': var code = __allkwargs0__ [__attrib0__]; break;
					case 'size': var size = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (isinstance (code, str)) {
		var code = code.strip ();
		var xsize = size + 2;
		if (len (code) == xsize && __in__ ('-', code)) {
			var __left0__ = code.py_split ('-');
			var cod = __left0__ [0];
			var dig = __left0__ [1];
			var ver = 'ABCDEFGHI';
			var su = 0;
			for (var char of cod) {
				su += int (char);
				if (su >= 9) {
					var su = su - 9;
				}
			}
			if (ver [su] == dig) {
				return code;
			}
		}
	}
	return null;
};
export var format_iso_date_datetime = function (dvalue, dformat_out, dtype) {
	if (typeof dtype == 'undefined' || (dtype != null && dtype.hasOwnProperty ("__kwargtrans__"))) {;
		var dtype = 'datetime';
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'dvalue': var dvalue = __allkwargs0__ [__attrib0__]; break;
					case 'dformat_out': var dformat_out = __allkwargs0__ [__attrib0__]; break;
					case 'dtype': var dtype = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	var dformat_in = 'yyyy-MM-dd';
	if (dtype == 'datetime') {
		var dformat_in = 'yyyy-MM-dd HH:mm:ss';
	}
	if (dvalue === '') {
		return null;
	}
	else if (len (str (dvalue)) != len (dformat_in)) {
		console.error ('The date/datetime value is invalid');
		return null;
	}
	var day = null;
	var month = null;
	var year = null;
	var hour = '00';
	var minute = '00';
	var second = '00';
	var ini = dformat_in.indexOf ('dd');
	var day = dvalue.__getslice__ (ini, ini + 2, 1);
	var ini = dformat_in.indexOf ('MM');
	var month = dvalue.__getslice__ (ini, ini + 2, 1);
	var ini = dformat_in.indexOf ('yyyy');
	var year = dvalue.__getslice__ (ini, ini + 4, 1);
	if (dtype == 'datetime') {
		var ini = dformat_in.indexOf ('HH');
		var hour = dvalue.__getslice__ (ini, ini + 2, 1);
		var ini = dformat_in.indexOf ('mm');
		var minute = dvalue.__getslice__ (ini, ini + 2, 1);
		var ini = dformat_in.indexOf ('ss');
		var second = dvalue.__getslice__ (ini, ini + 2, 1);
	}
	var cdate = new Date ('{0}-{1}-{2} {3}:{4}:{5}'.format (year, month, day, hour, minute, second));
	var result = false;
	if (cdate.toJSON () !== null) {
		var result = true;
	}
	if (result) {
		var dformat_out = dformat_out.py_replace ('dd', zfill (day, 2));
		var dformat_out = dformat_out.py_replace ('MM', zfill (month, 2));
		var dformat_out = dformat_out.py_replace ('yyyy', zfill (year, 4));
		if (dtype == 'datetime') {
			var dformat_out = dformat_out.py_replace ('HH', zfill (hour, 2));
			var dformat_out = dformat_out.py_replace ('mm', zfill (minute, 2));
			var dformat_out = dformat_out.py_replace ('ss', zfill (second, 2));
		}
		return dformat_out;
	}
	else {
		console.error ('The date/datetime value is invalid');
		return null;
	}
};
export var check_datetime = function (dvalue, dformat, dtype) {
	if (typeof dformat == 'undefined' || (dformat != null && dformat.hasOwnProperty ("__kwargtrans__"))) {;
		var dformat = 'yyyy-MM-dd HH:mm:ss';
	};
	if (typeof dtype == 'undefined' || (dtype != null && dtype.hasOwnProperty ("__kwargtrans__"))) {;
		var dtype = 'datetime';
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'dvalue': var dvalue = __allkwargs0__ [__attrib0__]; break;
					case 'dformat': var dformat = __allkwargs0__ [__attrib0__]; break;
					case 'dtype': var dtype = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (any ([!__in__ ('yyyy', dformat), !__in__ ('MM', dformat), !__in__ ('dd', dformat)])) {
		return false;
	}
	if (dtype == 'datetime') {
		if (any ([!__in__ ('HH', dformat), !__in__ ('mm', dformat), !__in__ ('ss', dformat)])) {
			return false;
		}
	}
	if (len (str (dvalue)) != len (dformat)) {
		return false;
	}
	var day = null;
	var month = null;
	var year = null;
	var hour = '00';
	var minute = '00';
	var second = '00';
	var ini = dformat.indexOf ('dd');
	var day = dvalue.__getslice__ (ini, ini + 2, 1);
	var ini = dformat.indexOf ('MM');
	var month = dvalue.__getslice__ (ini, ini + 2, 1);
	var ini = dformat.indexOf ('yyyy');
	var year = dvalue.__getslice__ (ini, ini + 4, 1);
	if (dtype == 'datetime') {
		var ini = dformat.indexOf ('HH');
		var hour = dvalue.__getslice__ (ini, ini + 2, 1);
		var ini = dformat.indexOf ('mm');
		var minute = dvalue.__getslice__ (ini, ini + 2, 1);
		var ini = dformat.indexOf ('ss');
		var second = dvalue.__getslice__ (ini, ini + 2, 1);
	}
	var cdate = new Date ('{0}-{1}-{2} {3}:{4}:{5}'.format (year, month, day, hour, minute, second));
	var result = false;
	if (cdate.toJSON () !== null) {
		var result = true;
	}
	return result;
};

//# sourceMappingURL=phanterpwa.apptools.validations.map