import config

from org.transcrypt.stubs.browser import __pragma__
__pragma__("alias", "jQuery", "$")
__pragma__("skip")
jQuery = window = console = WebSocket = __new__ = location = this = confirm = 0
__pragma__("noskip")


def onConectionClose(evt):
    console.log("closed", evt.data)
    if config.CONFIG.debug:
        location.reload()

def onError(evt):
    if config.CONFIG['PROJECT']['debug']:
        r = confirm("Reload the page?")
        if r:
            location.reload()

def start(check_compilation=False):
    API_WEBSOCKET_ADDRESS = config.CONFIG["CONFIGJS"]['api_websocket_address']
    ws = __new__(WebSocket(API_WEBSOCKET_ADDRESS))
    ws.onopen = lambda: (ws.send("Hello, world"), console.log("opening"))
    ws.onmessage = lambda evt: console.log(evt.data)
    ws.onerror = lambda evt: onError(evt)
    ws.onclose = lambda event: onConectionClose(this, event)
    if check_compilation:
        msg = "check_compilation[{0}]".format(config.CONFIG['PROJECT']['compilation'])
        console.log(msg)
        ws.send(msg)
