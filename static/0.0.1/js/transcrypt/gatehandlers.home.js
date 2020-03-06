// Transcrypt'ed from Python, 2020-03-04 15:30:10
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as left_bar from './phanterpwa.apptools.components.left_bar.js';
import * as helpers from './phanterpwa.apptools.helpers.js';
import * as handler from './phanterpwa.apptools.handler.js';
var __name__ = 'gatehandlers.home';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H1 = helpers.XmlConstructor.tagger ('h1');
export var Home =  __class__ ('Home', [handler.GateHandler], {
	__module__: __name__,
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = DIV (DIV (DIV (__kwargtrans__ ({_class: 'content_pagina_principal'})), __kwargtrans__ ({_id: 'background-sindfa', _class: 'background-empresa'})), DIV (DIV (DIV (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-fist-raised promo-icon'})), H1 ('Conquistas', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'conquistas'}))), DIV ('Aqui podemos conferir as principais conquistas do Sindfa em prol dos servidores públicos municipais. Juntos somos mais fortes.', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), DIV (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-project-diagram promo-icon'})), H1 ('Serviços', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'servicos'}))), DIV ('Estando conectado conosco alguns serviços estão disponíveis online, os que não estão você terá informações de como proceder, desta forma economizar tempo e agilizar sua vida.', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), DIV (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-hands-helping promo-icon'})), H1 ('Parcerias', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'parcerias'}))), DIV ('Pensando no melhor para os assossiados fizemos várias pacerias com comerciantes e profissionais liberais de várias áreas, aqui você pode converir a lista de nossos convênios.', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), DIV (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-key promo-icon'})), H1 ('Restrito', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'restrito'}))), DIV ('Usuários com permissões especiais podem ter acesso à diversas ferramentas de uso restrito. ', 'Os sindicalizados, por exemplo, podem ter acesso a suas informações pessoais de forma segura.', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'p-container'})));
		html.html_to ('#main-container');
		$ ('#background-sindfa').height ($ (window).height () - 50);
		$ (window).resize ((function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return $ ('#background-sindfa').height ($ (window).height () - 50);
		}));
		var AdminButton = left_bar.LeftBarButton ('phanterpwa-admin-button', 'Admin', I (__kwargtrans__ ({_class: 'fas fa-users-cog'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin', 'position': 'top', 'autorized_roles': ['root']})));
		window.PhanterPWA.Components ['left_bar'].add_button (AdminButton);
	});}
});

//# sourceMappingURL=gatehandlers.home.map