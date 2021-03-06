// Transcrypt'ed from Python, 2020-03-04 15:29:49
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as errors from './gatehandlers.errors.js';
import * as users from './gatehandlers.users.js';
import * as socios from './gatehandlers.socios.js';
import * as admin from './gatehandlers.admin.js';
import * as restrito from './gatehandlers.restrito.js';
import * as home from './gatehandlers.home.js';
import * as conquistas from './gatehandlers.conquistas.js';
import * as auth_user from './phanterpwa.apptools.components.auth_user.js';
var __name__ = 'gatekeeper';
export var gates = dict ({'home': home.Home, 'profile': auth_user.Profile, 'lock': auth_user.Lock, 'conquistas': conquistas.Index, 'restrito': restrito.Index, 'socios': socios.Index, 'admin': admin.Index, 'users': users.Index, 404: errors.Error_404, 401: errors.Error_401, 403: errors.Error_403});

//# sourceMappingURL=gatekeeper.map