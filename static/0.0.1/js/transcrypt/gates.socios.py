from org.transcrypt.stubs.browser import __pragma__

import phanterpwa.apptools.handler as handler
import phanterpwa.apptools.helpers as helpers
import phanterpwa.apptools.validations as validations
import phanterpwa.apptools.components.widgets as widgets
import phanterpwa.apptools.components.left_bar as left_bar
import phanterpwa.apptools.forms as forms
import phanterpwa.apptools.components.modal as modal
import phanterpwa.apptools.preloaders as preloaders

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table

XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination

__pragma__('kwargs')


class Index(handler.GateHandler):
    def initialize(self):
        self.requires_login = True

    def start(self):
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("RESTRITO", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-socios",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        if self.request.get_arg(0) is not None:
            self.Socio = Socio(self, self.request.get_arg(0), self.request.get_arg(1))
            BackButton = left_bar.LeftBarButton(
                "back_localizar_socios",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "socios",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("socios") or r.startswith("socios/") else False]}
            )
        else:
            self.Socios = Socios(self)
            BackButton = left_bar.LeftBarButton(
                "back_localizar_socios",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{"_phanterpwa-way": "restrito",
                    "position": "top",
                    "ways": [lambda r: True if r.startswith("socios") or r.startswith("socios/") else False]}
            )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class Socios(helpers.XmlConstructor):
    """way: socios"""

    def __init__(self, index_instance):
        self.index_instance = index_instance
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_socios",
                                    label="Localizar sócio",
                                    placeholder="Nome ou parte do nome do sócio",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_socios",
                                    label="Campos à pesquisar",
                                    placeholder="Escolha o Campo",
                                    value="nome_completo",
                                    data_set=[
                                        ["id", "ID"],
                                        ["nome_completo", "Nome Completo"],
                                        ["cpf", "CPF"],
                                        ["nome_da_mae", "Nome da Mãe"],
                                        ["nome_do_pai", "Nome do Pai"]
                                    ]
                                ),
                                _id="phanterpwa-input-search_field",
                                _class="p-col w1p100 w3p50 w4p25"
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    _action="#",
                    _id="search_socios",
                    _class="form-search_socios",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-socios-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-socios-container',
                _class="phanterpwa_tables_container"
            ),
            _class='socios-container phanterpwa-card-container'
        )
        helpers.XmlConstructor.__init__(self, "div", False, html, _class="lista_de_socios")
        self.html_to("#content-socios")
        self._get_data_search()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.socios is None:
                window.PhanterPWA.open_way("/socios/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["socios-table-footer"].page()
        search = widgets["search_socios"].value()
        field = widgets["campos_socios"].value()
        sorted_field = widgets["socios-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["socios-table-footer"].page()
        search = widgets["search_socios"].value()
        field = widgets["campos_socios"].value()
        sorted_field = widgets["socios-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        def onSearch(el):
            search_value = jQuery("#phanterpwa-input-search").val()
            if search_value is not None and search_value is not js_undefined and search_value is not "":
                breadcrumbs = CONCATENATE(
                    DIV("Sócios", _phanterpwa_way="socios", _class="link phanterpwa-breadcrumb"),
                    DIV("Pesquisar", _class="phanterpwa-breadcrumb")
                )
                jQuery(".phanterpwa-breadcrumb-wrapper").html(breadcrumbs.xml())
                window.PhanterPWA.ApiServer.GET(**{
                    'url_args': ["api", "socios"],
                    'onComplete': lambda data: lista_de_socios(data.responseJSON)
                })

            else:
                window.PhanterPWA.ApiServer.GET(**{
                    'url_args': ["api", "socios"],
                    'onComplete': lambda data: lista_de_socios(data.responseJSON)
                })
                breadcrumbs = CONCATENATE(
                    DIV("Sócios", _class="phanterpwa-breadcrumb")
                )
                jQuery(".phanterpwa-breadcrumb-wrapper").html(breadcrumbs.xml())
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            socios = json.socios
            jQuery("#lista-socios-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_socios",
                label=socios.search_fields.label,
                placeholder="Escolha o Campo",
                value=socios.search_fields.value,
                data_set=socios.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field")
            new_select_widget.reload()
            table = XTABLE(
                "socios-table",
                XTRH(
                    "socios-table-head",
                    *socios.searcher.data_set,
                    DIV(
                        I(_class="fas fa-plus"),
                        **{
                            "_phanterpwa-way": "socios/novo",
                            "_class": "icon_button wave_on_click"
                        }
                    ),
                    sort_by=socios.searcher.sort_by,
                    sort_order=socios.searcher.sort_order,
                    sortable=socios.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if socios.data is not js_undefined:
                for x in socios.data:
                    table.append(
                        XTRD(
                            "socios-table-data-{0}".format(x.id),
                            x.id,
                            x.nome_completo,
                            validations.format_iso_date_datetime(
                                x.data_de_nascimento, "dd/MM/yyyy", "date"
                            ),
                            x.cpf,
                            x.nome_da_mae,
                            x.nome_do_pai,
                            widgets.MenuBox(
                                "drop_{0}".format(x.id),
                                xml_menu=UL(
                                    LI("Editar", **{
                                        "_class": "botao_editar_socio",
                                        "_phanterpwa-way": "socios/{0}/editar".format(x.id)
                                    }),
                                    LI("Visualizar", **{
                                        "_class": "botao_visualizar_socio",
                                        "_phanterpwa-way": "socios/{0}/visualizar".format(x.id)
                                    }),
                                    **{"data-menubox": "drop_{0}".format(x.id),
                                    "_class": 'dropdown-content'},
                                )
                            )
                        )
                    )
                table.append(
                    XFOOTER(
                        "socios-table-footer",
                        page=socios.searcher.page,
                        total_pages=socios.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )
            def editar_socio(el):
                id_socio = jQuery(el).attr("register_target")
                socios_editar_novo.start(id_socio)

            def visualizar_socio(el):
                id_socio = jQuery(el).attr("register_target")
                socios_visualizar.start(id_socio)

            table.html_to("#lista-socios-container")

            jQuery(
                ".botao_editar_socio"
            ).off(
                "click.botao_editar_socio"
            ).on(
                "click.botao_editar_socio",
                lambda: editar_socio(this)
            )
            jQuery(
                ".botao_visualizar_socio"
            ).off(
                "click.botao_visualizar_socio"
            ).on(
                "click.botao_visualizar_socio",
                lambda: visualizar_socio(this)
            )

            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()

            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def _get_data_search(self, search="", field="nome_completo", orderby="nome_completo", sort="asc", page=1):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "socios"],
            'url_vars': {
                "search": search,
                "field": field,
                "orderby": orderby,
                "sort": sort,
                "page": page
            },
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def search(self):
        widgets = window.PhanterPWA.Request.widgets
        search = widgets["search_socios"].value()
        field = widgets["campos_socios"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)


class Socio(helpers.XmlConstructor):
    def __init__(self, index_instance, id_socio, action):
        self.id_socio = id_socio
        self.action = action
        self.get_form_socio(id_socio)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.process_data(json)

    def process_data(self, json):
        self.form = forms.Form(json.data.socios)
        self.form.html_to("#content-socios")
        self.binds()

    def modal_add_dependentes(self, widget_instance):
        console.log(widget_instance)
        content = DIV(

            forms.FormWidget(
                "dependentes",
                "nome",
                **{
                    "value": "",
                    "label": "Nome",
                    "type": "string",
                    "_placeholder": "Nome do Dependente",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "dependentes",
                "data_de_nascimento",
                **{
                    "value": "",
                    "label": "Data de Nascimento",
                    "type": "date",
                    "_class": "p-col w1p100 w3p50 w4p25",
                    "format": "dd/MM/yyyy",
                    "mask": "dd/MM/yyyy"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_dependentes",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_dependentes = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar novo Dependente",
                "content": content,
                "footer": footer,
                "form": "dependentes"
            }
        )
        self.modal_dependentes.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_dependentes").off(
            "click.adicionar_dependentes"
        ).on(
            "click.adicionar_dependentes",
            lambda: self._on_click_add_dependentes(widget_instance)
        )

    def _on_click_add_dependentes(self, widget_instance):
        nome = jQuery("#phanterpwa-widget-input-input-dependentes-nome").val()
        data_de_nascimento = jQuery("#phanterpwa-widget-input-input-dependentes-data_de_nascimento").val()
        if nome is not "" and validations.check_datetime(data_de_nascimento, "dd/MM/yyyy", "date"):
            value = "{0} ({1})".format(
                nome,
                data_de_nascimento
            )
            widget_instance.add_new_value(value)
        self.modal_dependentes.close()

    def modal_add_naturalidade(self, widget_instance):
        console.log(widget_instance)
        data_set = [
            [1, 'AC'],
            [2, 'AL'],
            [3, 'AM'],
            [4, 'AP'],
            [5, 'BA'],
            [6, 'CE'],
            [7, 'DF'],
            [8, 'ES'],
            [9, 'GO'],
            [10, 'MA'],
            [11, 'MG'],
            [12, 'MS'],
            [13, 'MT'],
            [14, 'PA'],
            [15, 'PB'],
            [16, 'PE'],
            [17, 'PI'],
            [18, 'PR'],
            [19, 'RJ'],
            [20, 'RN'],
            [21, 'RO'],
            [22, 'RR'],
            [23, 'RS'],
            [24, 'SC'],
            [25, 'SE'],
            [26, 'SP'],
            [27, 'TO']
        ]
        content = DIV(

            forms.FormWidget(
                "naturalidade",
                "cidade",
                **{
                    "value": "",
                    "label": "Cidade",
                    "type": "string",
                    "form": "naturalidade",
                    "_placeholder": "Nome da cidade",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "naturalidade",
                "uf",
                **{
                    "value": "",
                    "label": "UF",
                    "type": "select",
                    "form": "naturalidade",
                    "data_set": data_set,
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_naturalidade",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_naturalidade = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar Naturalidade",
                "content": content,
                "footer": footer,
                "form": "naturalidade"
            }
        )
        self.modal_naturalidade.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_naturalidade").off(
            "click.adicionar_naturalidade"
        ).on(
            "click.adicionar_naturalidade",
            lambda: self._on_click_add_naturalidade(widget_instance)
        )

    def _on_click_add_naturalidade(self, widget_instance):
        cidade = jQuery("#phanterpwa-widget-input-input-naturalidade-cidade").val()
        uf = jQuery("#phanterpwa-widget-select-input-naturalidade-uf").val()
        if cidade is not "" and cidade is not "":
            value = "{0}/{1}".format(
                cidade,
                uf
            )
            widget_instance.add_new_value(value)
        self.modal_naturalidade.close()

    def modal_add_cidade(self, widget_instance):
        console.log(widget_instance)
        data_set = [
            [1, 'AC'],
            [2, 'AL'],
            [3, 'AM'],
            [4, 'AP'],
            [5, 'BA'],
            [6, 'CE'],
            [7, 'DF'],
            [8, 'ES'],
            [9, 'GO'],
            [10, 'MA'],
            [11, 'MG'],
            [12, 'MS'],
            [13, 'MT'],
            [14, 'PA'],
            [15, 'PB'],
            [16, 'PE'],
            [17, 'PI'],
            [18, 'PR'],
            [19, 'RJ'],
            [20, 'RN'],
            [21, 'RO'],
            [22, 'RR'],
            [23, 'RS'],
            [24, 'SC'],
            [25, 'SE'],
            [26, 'SP'],
            [27, 'TO']
        ]
        content = DIV(

            forms.FormWidget(
                "cidade",
                "cidade",
                **{
                    "value": "",
                    "label": "Cidade",
                    "type": "string",
                    "form": "cidade",
                    "_placeholder": "Nome da cidade",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "cidade",
                "uf",
                **{
                    "value": "",
                    "label": "UF",
                    "type": "select",
                    "form": "cidade",
                    "data_set": data_set,
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_cidade = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar Cidade",
                "content": content,
                "footer": footer,
                "form": "cidade"
            }
        )
        self.modal_cidade.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar").off(
            "click.adicionar_cidade"
        ).on(
            "click.adicionar_cidade",
            lambda: self._on_click_add_cidade(widget_instance)
        )

    def _on_click_add_cidade(self, widget_instance):
        cidade = jQuery("#phanterpwa-widget-input-input-cidade-cidade").val()
        uf = jQuery("#phanterpwa-widget-select-input-cidade-uf").val()
        if cidade is not "" and cidade is not "":
            value = "{0}/{1}".format(
                cidade,
                uf
            )
            widget_instance.add_new_value(value)
        self.modal_cidade.close()

    def binds(self):
        forms.SignForm("#form-socios")
        forms.ValidateForm("#form-socios")
        jQuery(
            "#phanterpwa-widget-form-submit_button-socios"
        ).off(
            "click.submit_socios_button"
        ).on(
            "click.submit_socios_button",
            lambda: self.submit(this)
        )
        window.PhanterPWA.Request.widgets["socios-dependentes"].set_on_click_new_button(self.modal_add_dependentes)
        window.PhanterPWA.Request.widgets["socios-naturalidades"].set_on_click_new_button(self.modal_add_naturalidade)
        window.PhanterPWA.Request.widgets["socios-cidades"].set_on_click_new_button(self.modal_add_cidade)

    def get_form_socio(self, id_socio):
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "socios", id_socio],
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_socio = jQuery("#form-socios")[0]
            form_socio = __new__(FormData(form_socio))
            if self.id_socio == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "socios", self.id_socio],
                    'form_data': form_socio,
                    'onComplete': self.after_submit
                })
            elif self.id_socio.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "socios", self.id_socio],
                    'form_data': form_socio,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data):
        forms.SignForm("#form-socios")
        self.form.process_api_response(data)
        if data.status == 200 and self.id_socio == 'novo':
            window.PhanterPWA.open_way("socios/novo")
        elif data.status == 200:
            window.PhanterPWA.open_way("socios")


__pragma__('nokwargs')
