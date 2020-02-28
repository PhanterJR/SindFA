import phanterpwa.apptools.handler as handler
import phanterpwa.apptools.helpers as helpers
import phanterpwa.apptools.components.left_bar as left_bar
from org.transcrypt.stubs.browser import __pragma__
__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = window = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H1 = helpers.XmlConstructor.tagger("h1")


__pragma__('kwargs')


class Home(handler.GateHandler):
    def start(self):
        html = DIV(
            DIV(
                DIV(_class="content_pagina_principal"),
                _id="background-sindfa",
                _class='background-empresa'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                I(_class="fas fa-fist-raised promo-icon"),
                                H1("Conquistas", _class="promo-title"),
                                **{
                                    "_class": "link",
                                    "_phanterpwa-way": "conquistas"
                                }
                            ),
                    DIV("Aqui podemos conferir as principais conquistas do Sindfa em prol dos servidores públicos municipais. Juntos somos mais fortes.", _class='promo-content'),
                            **{
                                "_class": "promo-container",
                            }
                        ),
                        _class='p-col w1p100 w3p50 w4p25'
                    ),
                    DIV(
                        DIV(
                            DIV(
                                I(_class="fas fa-project-diagram promo-icon"),
                                H1("Serviços", _class="promo-title"),
                                **{
                                    "_class": "link",
                                    "_phanterpwa-way": "servicos"
                                }
                            ),
                    DIV("Estando conectado conosco alguns serviços estão disponíveis online, os que não estão você terá informações de como proceder, desta forma economizar tempo e agilizar sua vida.", _class='promo-content'),
                            **{
                                "_class": "promo-container",
                            }
                        ),
                        _class='p-col w1p100 w3p50 w4p25'
                    ),
                    DIV(
                        DIV(
                            DIV(
                                I(_class="fas fa-hands-helping promo-icon"),
                                H1("Parcerias", _class="promo-title"),
                                **{
                                    "_class": "link",
                                    "_phanterpwa-way": "parcerias"
                                }
                            ),
                    DIV("Pensando no melhor para os assossiados fizemos várias pacerias com comerciantes e profissionais liberais de várias áreas, aqui você pode converir a lista de nossos convênios.", _class='promo-content'),
                            **{
                                "_class": "promo-container",
                            }
                        ),
                        _class='p-col w1p100 w3p50 w4p25'
                    ),
                    DIV(
                        DIV(
                            DIV(
                                I(_class="fas fa-key promo-icon"),
                                H1("Restrito", _class="promo-title"),
                                **{
                                    "_class": "link",
                                    "_phanterpwa-way": "restrito"
                                }
                            ),
                            DIV("Usuários com permissões especiais podem ter acesso à diversas ferramentas de uso restrito. ",
                                "Os sindicalizados, por exemplo, podem ter acesso a suas informações pessoais de forma segura.", _class='promo-content'),
                            **{
                                "_class": "promo-container",
                            }
                        ),
                        _class='p-col w1p100 w3p50 w4p25'
                    ),
                    _class='p-row'
                ),
                _class="p-container"
            )
        )
        html.html_to("#main-container")
        jQuery("#background-sindfa").height(jQuery(window).height() - 50)
        jQuery(window).resize(lambda: jQuery("#background-sindfa").height(jQuery(window).height() - 50))
        AdminButton = left_bar.LeftBarButton(
            "phanterpwa-admin-button",
            "Admin",
            I(_class="fas fa-users-cog"),
            **{
                "_phanterpwa-way": "admin",
                "position": "top",
                "autorized_roles": ["root"]
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(AdminButton)


__pragma__('nokwargs')
