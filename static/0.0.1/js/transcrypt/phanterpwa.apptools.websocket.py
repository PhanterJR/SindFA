from org.transcrypt.stubs.browser import __pragma__
import phanterpwa.apptools.helpers as helpers

__pragma__('alias', "jQuery", "$")
__pragma__('skip')

# it is ignored on transcrypt
window = jQuery = console = document = localStorage = URL = WebSocket = FormData = setTimeout = WebSocket =\
    sessionStorage = this = confirm = JSON = js_undefined = navigator = __new__ = Date = location = 0

__pragma__('noskip')


DIV = helpers.XmlConstructor.tagger("div")
H2 = helpers.XmlConstructor.tagger("h2")
XML = helpers.XML
TEXTAREA = helpers.XmlConstructor.tagger("textarea")


__pragma__('kwargs')


class WebSocketPhanterPWA():
    def __init__(self, api_websocket_address, **parameters):
        self._opened = False
        self.api_websocket_address = api_websocket_address
        self.comulative_time = 300
        self.last_ws = None
        self.manual_connection = False
        self.manual_close = False
        setTimeout(lambda: self.start(), self.comulative_time)

    def send(self, message):
        if self._opened:
            self._authorization = window.PhanterPWA.get_authorization()
            if self._authorization is not None:
                __pragma__("jsiter")
                msg = JSON.stringify({
                    "phanterpwa-authorization": self._authorization,
                    "message": message
                })
                __pragma__("nojsiter")
                self._ws.send(str('{0}'.format(msg)))
                if window.PhanterPWA.DEBUG:
                    if message is "command_online":
                        console.log("__ Server, I'm online?")
                    elif message is "command_offline":
                        console.log("__ Server, I'm stay offline. Bye.")
            else:
                if message not in ["command_online", "command_offline"]:
                    __pragma__("jsiter")
                    msg = JSON.stringify({
                        "phanterpwa-authorization": "anonymous",
                        "message": message
                    })
                    __pragma__("nojsiter")
                    console.log(msg)
                    self._ws.send(msg)

    def close(self):
        self.manual_close = True
        self._ws.close()

    def _onClose(self, evt):
        self._opened = False
        if window.PhanterPWA.DEBUG:
            console.log("Closing websocket")
        if not self.manual_close:
            setTimeout(lambda: self.start(), self.comulative_time)
        else:
            self.manual_close = False

    def _onError(self, evt):
        if window.PhanterPWA.DEBUG:
            console.log("Error on websocket", evt)
        if self.comulative_time > 9000 and not self.manual_connection:
                window.PhanterPWA.flash("Lost server connection!")
                self.manual_connection = True
        else:
            self.comulative_time = self.comulative_time + 1000
        console.log(self.comulative_time)

    def _onMessage(self, evt):
        if window.PhanterPWA.DEBUG:
            console.log(evt.data)

    def _onOpen(self, evt):
        self.comulative_time = 0
        self._opened = True
        if window.PhanterPWA.DEBUG:
            console.log("Opening websocket")
        self.send("command_online")

    def _binds(self):
        self._ws.onopen = lambda evt: self._onOpen(evt)
        self._ws.onmessage = lambda evt: self._onMessage(evt)
        self._ws.onerror = lambda evt: self._onError(evt)
        self._ws.onclose = lambda evt: self._onClose(evt)

    def start(self):
        if not self.manual_connection:
            self._ws = __new__(WebSocket(self.api_websocket_address))
            self._authorization = window.PhanterPWA.get_authorization()
            self._config = window.PhanterPWA.CONFIG
            self._binds()
        else:
            r = confirm("It's try connect again?")
            if(r):
                self.manual_connection = False
                self.comulative_time = 0
                self._ws = __new__(WebSocket(self.api_websocket_address))
                self._authorization = window.PhanterPWA.get_authorization()
                self._config = window.PhanterPWA.CONFIG
                self._binds()


__pragma__('nokwargs')
