import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

#Eager Mode
import tensorflow as tf
tf.enable_eager_execution()   

import dash
import Home, DIY, WebCam, About

external_scripts = ["https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
                    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"]

external_stylesheets = ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
                        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]

app = dash.Dash(__name__, external_scripts=external_scripts, external_stylesheets=external_stylesheets)
server = app.server

app.config.suppress_callback_exceptions = True
app.scripts.config.serve_locally = True

app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    html.Div(id='page-content')
])

@app.callback(Output('page-content', 'children'),
              [Input('url', 'pathname')])

def display_page(pathname):
    if   pathname == '/DIY':  return DIY.layout
    elif pathname == '/WebCam':  return WebCam.layout
    elif pathname == '/About':  return About.layout
    else: return Home.layout

if __name__ == '__main__': 
    app.run_server(debug=True)
