{
    'name': 'Practise JS',
   'version': '1.0',
   'sequence': 10,
   'category': 'Practise',
   'depends': ['base','web'],
   'data': [
      'security/ir.model.access.csv',
      'view/practise_view.xml',
   ],
   'assets' : {
     'web.assets_backend': [
         'js_practise/static/src/js/practise.js',
         'js_practise/static/src/xml/practise.xml',
         'js_practise/view/practise_js_view.xml',
        ],
   },
   'installable ': True,
   'application': True,
   'auto_install': False,
   'license':'LGPL-3',
}