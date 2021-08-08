define([
    'uiComponent',
], function(
    Component
){

    'use strict';


    return Component.extend({
        defaults:{
            tracks: {
                countryId: true,
                city: true,
                company: true,
                firstname: true,
                lastname: true,
                region: true,
                region_id: true,
                street: true,
                telephone: true,
            },
            imports: {
                countryId: 'checkoutProvider:shippingAddress.country_id',
                city: 'checkoutProvider:shippingAddress.city',
                company: 'checkoutProvider:shippingAddress.company',
                firstname: 'checkoutProvider:shippingAddress.firstname',
                lastname: 'checkoutProvider:shippingAddress.lastname',
                region: 'checkoutProvider:shippingAddress.region',
                region_id: 'checkoutProvider:shippingAddress.region_id',
                street: 'checkoutProvider:shippingAddress.street',
                telephone: 'checkoutProvider:shippingAddress.telephone',
            },
        },
        initialize: function(){
            this._super();
            console.log('Shipping Summary Component initialized')
        },
        showCompany: function(){
            if(this.company){
                return ' from ' + this.company;
            }
        },
        showCountry: function(){
            if(this.countryId){
                return ', ' + this.countryId;
            }
        }

    });

});
