// Transcrypt'ed from Python, 2020-02-21 04:14:04
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as modal from './phanterpwa.apptools.components.modal.js';
import * as forms from './phanterpwa.apptools.forms.js';
import * as left_bar from './phanterpwa.apptools.components.left_bar.js';
import * as widgets from './phanterpwa.apptools.components.widgets.js';
import * as validations from './phanterpwa.apptools.validations.js';
import * as helpers from './phanterpwa.apptools.helpers.js';
import * as handler from './phanterpwa.apptools.handler.js';
var __name__ = 'gates.socios';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var Index =  __class__ ('Index', [handler.GateHandler], {
	__module__: __name__,
	get initialize () {return __get__ (this, function (self) {
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
		self.requires_login = true;
	});},
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('RESTRITO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (__kwargtrans__ ({_id: 'content-socios', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (self.request.get_arg (0) !== null) {
			self.Socio = Socio (self, self.request.get_arg (0), self.request.get_arg (1));
			var BackButton = left_bar.LeftBarButton ('back_localizar_socios', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'socios', 'position': 'top', 'ways': [(function __lambda__ (r) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'r': var r = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (r.startswith ('socios') || r.startswith ('socios/') ? true : false);
			})]})));
		}
		else {
			self.Socios = Socios (self);
			var BackButton = left_bar.LeftBarButton ('back_localizar_socios', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'restrito', 'position': 'top', 'ways': [(function __lambda__ (r) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'r': var r = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (r.startswith ('socios') || r.startswith ('socios/') ? true : false);
			})]})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	});}
});
export var Socios =  __class__ ('Socios', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_socios', __kwargtrans__ ({label: 'Localizar sócio', placeholder: 'Nome ou parte do nome do sócio', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
			return self.search ();
		})})), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_socios', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: 'nome_completo', data_set: [['id', 'ID'], ['nome_completo', 'Nome Completo'], ['cpf', 'CPF'], ['nome_da_mae', 'Nome da Mãe'], ['nome_do_pai', 'Nome do Pai']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_socios', _class: 'form-search_socios', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-socios-subtitle', _class: 'phanterpwa-subtitle'})), DIV (__kwargtrans__ ({_id: 'lista-socios-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'socios-container phanterpwa-card-container'}));
		helpers.XmlConstructor.__init__ (self, 'div', false, html, __kwargtrans__ ({_class: 'lista_de_socios'}));
		self.html_to ('#content-socios');
		self._get_data_search ();
	});},
	get after_get () {return __get__ (this, function (self, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			if (json.socios === null) {
				window.PhanterPWA.open_way ('/socios/novo');
			}
			else {
				self.process_data (json);
			}
		}
	});},
	get _on_sort () {return __get__ (this, function (self, table_head_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_head_instance': var table_head_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['socios-table-footer'].page ();
		var search = widgets ['search_socios'].value ();
		var field = widgets ['campos_socios'].value ();
		var sorted_field = widgets ['socios-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
	});},
	get _on_page () {return __get__ (this, function (self, table_pagination_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_pagination_instance': var table_pagination_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['socios-table-footer'].page ();
		var search = widgets ['search_socios'].value ();
		var field = widgets ['campos_socios'].value ();
		var sorted_field = widgets ['socios-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
	});},
	get process_data () {return __get__ (this, function (self, json) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var onSearch = function (el) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var search_value = $ ('#phanterpwa-input-search').val ();
			if (search_value !== null && search_value !== undefined && search_value !== '') {
				var breadcrumbs = CONCATENATE (DIV ('Sócios', __kwargtrans__ ({_phanterpwa_way: 'socios', _class: 'link phanterpwa-breadcrumb'})), DIV ('Pesquisar', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})));
				$ ('.phanterpwa-breadcrumb-wrapper').html (breadcrumbs.xml ());
				window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'socios'], 'onComplete': (function __lambda__ (data) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'data': var data = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return lista_de_socios (data.responseJSON);
				})})));
			}
			else {
				window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'socios'], 'onComplete': (function __lambda__ (data) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'data': var data = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return lista_de_socios (data.responseJSON);
				})})));
				var breadcrumbs = CONCATENATE (DIV ('Sócios', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})));
				$ ('.phanterpwa-breadcrumb-wrapper').html (breadcrumbs.xml ());
			}
		};
		if (self.current_hash !== json.hash) {
			self.current_hash = json.hash;
			var socios = json.socios;
			$ ('#lista-socios-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('campos_socios', __kwargtrans__ ({label: socios.search_fields.label, placeholder: 'Escolha o Campo', value: socios.search_fields.value, data_set: socios.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field');
			new_select_widget.reload ();
			var table = XTABLE ('socios-table', XTRH ('socios-table-head', ...socios.searcher.data_set, DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'socios/novo', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: socios.searcher.sort_by, sort_order: socios.searcher.sort_order, sortable: socios.searcher.sortable, on_click_sortable: self._on_sort})));
			if (socios.data !== undefined) {
				for (var x of socios.data) {
					table.append (XTRD ('socios-table-data-{0}'.format (x.id), x.id, x.nome_completo, validations.format_iso_date_datetime (x.data_de_nascimento, 'dd/MM/yyyy', 'date'), x.cpf, x.nome_da_mae, x.nome_do_pai, widgets.MenuBox ('drop_{0}'.format (x.id), __kwargtrans__ ({xml_menu: UL (LI ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_socio', '_phanterpwa-way': 'socios/{0}/editar'.format (x.id)}))), LI ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_socio', '_phanterpwa-way': 'socios/{0}/visualizar'.format (x.id)}))), __kwargtrans__ (dict ({'data-menubox': 'drop_{0}'.format (x.id), '_class': 'dropdown-content'})))}))));
				}
				table.append (XFOOTER ('socios-table-footer', __kwargtrans__ ({page: socios.searcher.page, total_pages: socios.searcher.total_pages, on_click_page: self._on_page})));
			}
			var editar_socio = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var id_socio = $ (el).attr ('register_target');
				socios_editar_novo.start (id_socio);
			};
			var visualizar_socio = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var id_socio = $ (el).attr ('register_target');
				socios_visualizar.start (id_socio);
			};
			table.html_to ('#lista-socios-container');
			$ ('.botao_editar_socio').off ('click.botao_editar_socio').on ('click.botao_editar_socio', (function __lambda__ () {
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
				return editar_socio (this);
			}));
			$ ('.botao_visualizar_socio').off ('click.botao_visualizar_socio').on ('click.botao_visualizar_socio', (function __lambda__ () {
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
				return visualizar_socio (this);
			}));
			var change_attr_drop = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var targ = $ (el).attr ('phanterpwa_dowpdown_target');
				$ (el).attr ('data-target', targ);
			};
			$ ('[phanterpwa_dowpdown_target]').each ((function __lambda__ () {
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
				return change_attr_drop (this);
			}));
		}
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'nome_completo';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'nome_completo';
		};
		if (typeof py_sort == 'undefined' || (py_sort != null && py_sort.hasOwnProperty ("__kwargtrans__"))) {;
			var py_sort = 'asc';
		};
		if (typeof page == 'undefined' || (page != null && page.hasOwnProperty ("__kwargtrans__"))) {;
			var page = 1;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'search': var search = __allkwargs0__ [__attrib0__]; break;
						case 'field': var field = __allkwargs0__ [__attrib0__]; break;
						case 'orderby': var orderby = __allkwargs0__ [__attrib0__]; break;
						case 'py_sort': var py_sort = __allkwargs0__ [__attrib0__]; break;
						case 'page': var page = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'socios'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get search () {return __get__ (this, function (self) {
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
		var widgets = window.PhanterPWA.Request.widgets;
		var search = widgets ['search_socios'].value ();
		var field = widgets ['campos_socios'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'asc', page: 1}));
	});}
});
export var Socio =  __class__ ('Socio', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_socio, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_socio': var id_socio = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_socio = id_socio;
		self.action = action;
		self.get_form_socio (id_socio);
	});},
	get after_get () {return __get__ (this, function (self, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.process_data (json);
		}
	});},
	get process_data () {return __get__ (this, function (self, json) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.form = forms.Form (json.data.socios);
		self.form.html_to ('#content-socios');
		self.binds ();
	});},
	get modal_add_dependentes () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		console.log (widget_instance);
		var content = DIV (forms.FormWidget ('dependentes', 'nome', __kwargtrans__ (dict ({'value': '', 'label': 'Nome', 'type': 'string', '_placeholder': 'Nome do Dependente', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('dependentes', 'data_de_nascimento', __kwargtrans__ (dict ({'value': '', 'label': 'Data de Nascimento', 'type': 'date', '_class': 'p-col w1p100 w3p50 w4p25', 'format': 'dd/MM/yyyy', 'mask': 'dd/MM/yyyy'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar_dependentes', 'Adicionar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_dependentes = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Adicionar novo Dependente', 'content': content, 'footer': footer, 'form': 'dependentes'})));
		self.modal_dependentes.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar_dependentes').off ('click.adicionar_dependentes').on ('click.adicionar_dependentes', (function __lambda__ () {
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
			return self._on_click_add_dependentes (widget_instance);
		}));
	});},
	get _on_click_add_dependentes () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var nome = $ ('#phanterpwa-widget-input-input-dependentes-nome').val ();
		var data_de_nascimento = $ ('#phanterpwa-widget-input-input-dependentes-data_de_nascimento').val ();
		if (nome !== '' && validations.check_datetime (data_de_nascimento, 'dd/MM/yyyy', 'date')) {
			var value = '{0} ({1})'.format (nome, data_de_nascimento);
			widget_instance.add_new_value (value);
		}
		self.modal_dependentes.close ();
	});},
	get modal_add_naturalidade () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		console.log (widget_instance);
		var data_set = [[1, 'AC'], [2, 'AL'], [3, 'AM'], [4, 'AP'], [5, 'BA'], [6, 'CE'], [7, 'DF'], [8, 'ES'], [9, 'GO'], [10, 'MA'], [11, 'MG'], [12, 'MS'], [13, 'MT'], [14, 'PA'], [15, 'PB'], [16, 'PE'], [17, 'PI'], [18, 'PR'], [19, 'RJ'], [20, 'RN'], [21, 'RO'], [22, 'RR'], [23, 'RS'], [24, 'SC'], [25, 'SE'], [26, 'SP'], [27, 'TO']];
		var content = DIV (forms.FormWidget ('naturalidade', 'cidade', __kwargtrans__ (dict ({'value': '', 'label': 'Cidade', 'type': 'string', 'form': 'naturalidade', '_placeholder': 'Nome da cidade', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('naturalidade', 'uf', __kwargtrans__ (dict ({'value': '', 'label': 'UF', 'type': 'select', 'form': 'naturalidade', 'data_set': data_set, '_class': 'p-col w1p100 w3p50 w4p25'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar_naturalidade', 'Adicionar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_naturalidade = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Adicionar Naturalidade', 'content': content, 'footer': footer, 'form': 'naturalidade'})));
		self.modal_naturalidade.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar_naturalidade').off ('click.adicionar_naturalidade').on ('click.adicionar_naturalidade', (function __lambda__ () {
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
			return self._on_click_add_naturalidade (widget_instance);
		}));
	});},
	get _on_click_add_naturalidade () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cidade = $ ('#phanterpwa-widget-input-input-naturalidade-cidade').val ();
		var uf = $ ('#phanterpwa-widget-select-input-naturalidade-uf').val ();
		if (cidade !== '' && cidade !== '') {
			var value = '{0}/{1}'.format (cidade, uf);
			widget_instance.add_new_value (value);
		}
		self.modal_naturalidade.close ();
	});},
	get modal_add_cidade () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		console.log (widget_instance);
		var data_set = [[1, 'AC'], [2, 'AL'], [3, 'AM'], [4, 'AP'], [5, 'BA'], [6, 'CE'], [7, 'DF'], [8, 'ES'], [9, 'GO'], [10, 'MA'], [11, 'MG'], [12, 'MS'], [13, 'MT'], [14, 'PA'], [15, 'PB'], [16, 'PE'], [17, 'PI'], [18, 'PR'], [19, 'RJ'], [20, 'RN'], [21, 'RO'], [22, 'RR'], [23, 'RS'], [24, 'SC'], [25, 'SE'], [26, 'SP'], [27, 'TO']];
		var content = DIV (forms.FormWidget ('cidade', 'cidade', __kwargtrans__ (dict ({'value': '', 'label': 'Cidade', 'type': 'string', 'form': 'cidade', '_placeholder': 'Nome da cidade', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('cidade', 'uf', __kwargtrans__ (dict ({'value': '', 'label': 'UF', 'type': 'select', 'form': 'cidade', 'data_set': data_set, '_class': 'p-col w1p100 w3p50 w4p25'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar', 'Adicionar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_cidade = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Adicionar Cidade', 'content': content, 'footer': footer, 'form': 'cidade'})));
		self.modal_cidade.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar').off ('click.adicionar_cidade').on ('click.adicionar_cidade', (function __lambda__ () {
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
			return self._on_click_add_cidade (widget_instance);
		}));
	});},
	get _on_click_add_cidade () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var cidade = $ ('#phanterpwa-widget-input-input-cidade-cidade').val ();
		var uf = $ ('#phanterpwa-widget-select-input-cidade-uf').val ();
		if (cidade !== '' && cidade !== '') {
			var value = '{0}/{1}'.format (cidade, uf);
			widget_instance.add_new_value (value);
		}
		self.modal_cidade.close ();
	});},
	get binds () {return __get__ (this, function (self) {
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
		forms.SignForm ('#form-socios');
		forms.ValidateForm ('#form-socios');
		$ ('#phanterpwa-widget-form-submit_button-socios').off ('click.submit_socios_button').on ('click.submit_socios_button', (function __lambda__ () {
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
			return self.submit (this);
		}));
		window.PhanterPWA.Request.widgets ['socios-dependentes'].set_on_click_new_button (self.modal_add_dependentes);
		window.PhanterPWA.Request.widgets ['socios-naturalidades'].set_on_click_new_button (self.modal_add_naturalidade);
		window.PhanterPWA.Request.widgets ['socios-cidades'].set_on_click_new_button (self.modal_add_cidade);
	});},
	get get_form_socio () {return __get__ (this, function (self, id_socio) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_socio': var id_socio = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'socios', id_socio], 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get submit () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if ($ (el) [0].hasAttribute ('disabled')) {
			window.PhanterPWA.flash (__kwargtrans__ ({html: I18N ('The form has errors!')}));
		}
		else {
			var form_socio = $ ('#form-socios') [0];
			var form_socio = new FormData (form_socio);
			if (self.id_socio == 'novo') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'socios', self.id_socio], 'form_data': form_socio, 'onComplete': self.after_submit})));
			}
			else if (self.id_socio.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'socios', self.id_socio], 'form_data': form_socio, 'onComplete': self.after_submit})));
			}
		}
	});},
	get after_submit () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		forms.SignForm ('#form-socios');
		self.form.process_api_response (data);
		if (data.status == 200 && self.id_socio == 'novo') {
			window.PhanterPWA.open_way ('socios/novo');
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('socios');
		}
	});}
});

//# sourceMappingURL=gates.socios.map