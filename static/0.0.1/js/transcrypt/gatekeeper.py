from org.transcrypt.stubs.browser import __pragma__

import phanterpwa.apptools.components.auth_user as auth_user

import gatehandlers.conquistas as conquistas
import gatehandlers.home as home
import gatehandlers.restrito as restrito
import gatehandlers.admin as admin
import gatehandlers.socios as socios
import gatehandlers.users as users
import gatehandlers.errors as errors

gates = {
    'home': home.Home,
    'profile': auth_user.Profile,
    'lock': auth_user.Lock,
    'conquistas': conquistas.Index,
    'restrito': restrito.Index,
    'socios': socios.Index,
    'admin': admin.Index,
    'users': users.Index,
    404: errors.Error_404,
    401: errors.Error_401,
    403: errors.Error_403
}
