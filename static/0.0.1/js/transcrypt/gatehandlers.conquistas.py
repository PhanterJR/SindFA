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
H4 = helpers.XmlConstructor.tagger("h4")
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
    def __init__(self, request):
        handler.GateHandler.__init__(self, request)

    def start(self):

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CONQUISTAS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    "Não há conquistas registradas",
                    _class='p-row card e-pandding_20'
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


