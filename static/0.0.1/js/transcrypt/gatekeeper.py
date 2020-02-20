from org.transcrypt.stubs.browser import __pragma__

import gates.home as home
import phanterpwa.apptools.components.auth_user as auth_user
import gates.conquistas as conquistas
import gates.restrito as restrito
import gates.socios as socios
import gates.errors as errors

gates = {
    'home': home.Home,
    'profile': auth_user.Profile,
    'lock': auth_user.Lock,
    'conquistas': conquistas.Index,
    'restrito': restrito.Index,
    'socios': socios.Index,
    #'socios_editar_novo': socios_editar_novo.start
    404: errors.Error_404,
    401: errors.Error_401,
    403: errors.Error_403
}
