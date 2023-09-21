from odoo import fields,models

class Practisejs(models.Model):
    _name = 'custom.practise'

    name = fields.Char(string='Name')

