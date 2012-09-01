Ext.define('HowToApply.view.Houselist', {
    extend: 'Ext.Panel'
});


var Houselist = [{
    xtype: 'button',
    id: 'a1',
    cls: 'address_btn',
    text: 'Address',
    handler: function(obj) {
        var item_array2 = new Array();
        item_array2[0] = {
            xtype: 'label',
            margin: '10 10 10 10',
            style: 'margin:40px auto 0 auto;',
            html: '<p class="pre_pro_text">Property address </p><p class="pre_north_text">Address</p>',
        };

        item_array2[1] = {
            xtype: 'panel',
            cls: 'top_box',
            margin: '10 10 10 10',
            items: [{
                xtype: 'label',
                html: '<p class="tac_title"><img style="vertical-align: middle; margin-right:10px; margin-left:20px;" src="images/pro_black.png"> <span class="num">1</span> <span class="name">Sean</span></p><p class="tac_pross"><span class="tac_pross_text">Complete</span><span class="tac_pross_pross" style="width:50%"></span></p>'
            }, {
                xtype: 'button',
                text: 'Open Application Form',
                width: 281,
                height: 51,
                style: 'background:url(images/green_btn.png) center center; margin-top:10px; float:right; color:#ffffff; border:0;',
                handler: function() {

                    mainPanel.push({
                        title: 'Tenancy Application Form',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true
                        },
                        items: [Tenancyapplicationform]
                    })


                }
            }]
        }


        mainPanel.push({
            title: 'Tenancy Application',
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            items: item_array2
        })
    }
}]