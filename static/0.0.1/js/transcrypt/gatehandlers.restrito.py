import phanterpwa.apptools.handler as handler
import phanterpwa.apptools.components.widgets as widgets
import phanterpwa.apptools.helpers as helpers

import phanterpwa.apptools.components.left_bar as left_bar

from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = localStorage = document = this = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H2 = helpers.XmlConstructor.tagger("h2")
FORM = helpers.XmlConstructor.tagger("form")
SPAN = helpers.XmlConstructor.tagger("span")
IMG = helpers.XmlConstructor.tagger("img", True)
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
INPUT = helpers.XmlConstructor.tagger("input", True)
A = helpers.XmlConstructor.tagger("A")
I18N = helpers.I18N
CONCATENATE = helpers.CONCATENATE


class Index(handler.GateHandler):
    def initialize(self):
        self.requires_login = True
        self.autorized_roles = ["root", "administrador"]
        self.autorized_ids = ["all"]

    def __init__(self, request):
        handler.GateHandler.__init__(self, request)

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
                        DIV(
                            DIV(
                                I(
                                    **{
                                        "_class": "fas fa-edit promo-icon",
                                    }
                                ),
                                H2("ASSOCIADOS", _class="promo-title"),
                                **{
                                    "_class": "link",
                                    "_phanterpwa-way": "socios"
                                }
                            ),
                            DIV("Aqui permite ao administrador visualizar, adicionar, editar o cadastro de associados.", _class='promo-content'),
                            **{"_class": "promo-container"}
                        ),
                        _class='p-col w1p100 w3p50 w4p25'
                    ),
                    # DIV(
                    #     DIV(
                    #         DIV(
                    #             I(
                    #                 **{
                    #                     "_class": "far fa-caret-square-down promo-icon",
                    #                 }
                    #             ),
                    #             H2("Selects", _class="promo-title"),
                    #             **{
                    #                 "_class": "link",
                    #                 "_phanterpwa-way": "componentes/selects"
                    #             }
                    #         ),
                    #         DIV("Confira aqui os Inputs do tipo Select, eles permintem ao usuário",
                    #             " fazer escolhas pré-definidas evitando digitar.", _class='promo-content'),
                    #         **{"_class": "promo-container"}
                    #     ),
                    #     _class='p-col w1p100 w3p50 w4p25'),
                    # DIV(
                    #     DIV(
                    #         DIV(
                    #             I(
                    #                 **{
                    #                     "_class": "fas fa-file-signature  promo-icon",
                    #                 }
                    #             ),
                    #             H2("Serviços", _class="promo-title"),
                    #             **{
                    #                 "_class": "link",
                    #                 "_phanterpwa-way": "componentes/textarea"
                    #             }
                    #         ),
                    #         DIV("Estando conectado conosco alguns serviços estão disponíveis online, os que não",
                    #             " estão você terá informações de como proceder, desta ",
                    #             "forma economizar tempo e agilizar sua vida.", _class='promo-content'),
                    #         **{"_class": "promo-container"}
                    #     ),
                    #     _class='p-col w1p100 w3p50 w4p25'),
                    # DIV(
                    #     DIV(
                    #         DIV(
                    #             I(
                    #                 **{
                    #                     "_class": "fas fa-flag promo-icon",
                    #                 }
                    #             ),
                    #             H2("Font Awesome", _class="promo-title"),
                    #             **{
                    #                 "_class": "link",
                    #                 "_phanterpwa-way": "componentes/fontawesome"
                    #             }
                    #         ),
                    #         DIV("Usamos os ícones da Font Awesome!",
                    #             "Pegue aqui o helper de cada ícone free. Vale conferir o",
                    #             "site clicando ",
                    #             A("aqui", _href="https://fontawesome.com/", _target="_blank"),
                    #             ".",
                    #              _class='promo-content'),
                    #         **{"_class": "promo-container"}
                    #     ),
                    #     _class='p-col w1p100 w3p50 w4p25'),
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
    BackButton = left_bar.LeftBarButton(
        "back_localizar_aluno",
        "Voltar",
        I(_class="fas fa-arrow-circle-left"),
        **{"_phanterpwa-way": "home",
            "position": "top",
            "ways": [lambda r: True if r.startswith("conquistas/") else False]}
    )
    window.PhanterPWA.Components['left_bar'].add_button(BackButton)


