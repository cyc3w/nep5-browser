(function ($) {
    var app = $.sammy('#main', function () {
        this.use('Template', 'tpl');

        // define a 'route'
        // home 
        this.get('#/', function () {
            // load some data
            console.log('#/')
            this.partial('templates/home.tpl');
        });

        //assets
        this.get('#/assets', function () {
            // load some data
            console.log('#/assets')
            this.partial('templates/asset.tpl');
        });

        //blocks
        this.get('#/blocks', function () {
            // load some data
            console.log('#/block')
            this.partial('templates/block.tpl');
        });

        //transactions
        this.get('#/transactions', function () {
            // load some data
            console.log('#/transactions')
            this.partial('templates/transaction.tpl');
        }); 
        
        //addresses
        this.get('#/addresses', function () {
            // load some data
            console.log('#/addresses')
            this.partial('templates/address.tpl');
        }); 
        
        //addresses
        this.get('#/contracts', function () {
            // load some data
            console.log('#/contracts')
            this.partial('templates/contract.tpl');
        });                
    })

    app.run('#/');
})(jQuery)