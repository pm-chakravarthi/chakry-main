odoo.define("js_practise.RequisitionDashboard", function (require) {
   "use strict";
   var AbstractAction = require('web.AbstractAction');
   var core = require('web.core');
   var rpc = require('web.rpc');
   var session = require('web.session');
   var ajax = require('web.ajax');
   var web_client = require('web.web_client');
   var _t = core._t;
   var Dashboard = AbstractAction.extend({
    contentTemplate: 'RequisitionDashboard',

    start: function () {
        var self = this;
        this._super.apply(this, arguments);

        // Get references to the DOM elements
        var changeColor = this.$('.changeColor');
        var userList = this.$('.name-list li');
        var listInput = this.$(".list-input");
        var addListBtn = this.$(".addListBtn");

        // Add event listener to the button
        changeColor.on('click', function () {
            // Toggle the "change" class on the title element
            var titleElement = self.$('.title');
            titleElement.toggleClass('change');
        });
        userList.on('click', function () {
            this.style.color = "red";
            console.log(this);
        });
        addListBtn.on('click', function () {
            const newLi = document.createElement("LI");
            const liContent = document.createTextNode("sdf");
            console.log(listInput.value);
        });

    },
});

   core.action_registry.add('requisition_dashboard', Dashboard);
   return Dashboard;
});


//    const text = document.querySelector('h1');
//    const changeColor = document.querySelector('.changeColor')

//    const val = 15;
//    const val1 = 25;
//    const val2 = prompt('enter Number')
//
//    console.log(val+val1)
//
//    for(let i=0;i < val2 ;i++){
//        console.log('Welcome')
//    }
