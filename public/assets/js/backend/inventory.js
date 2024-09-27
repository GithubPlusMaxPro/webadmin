define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'inventory/index' + location.search,
                    add_url: 'inventory/add',
                    edit_url: 'inventory/edit',
                    del_url: 'inventory/del',
                    multi_url: 'inventory/multi',
                    import_url: 'inventory/import',
                    table: 'inventory',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'product_name', title: __('Product_name'), operate: 'LIKE'},
                        {field: 'specification', title: __('Specification'), operate: 'LIKE'},
                        {field: 'unit', title: __('Unit'), operate: 'LIKE'},
                        {field: 'quantity', title: __('Quantity')},
                        {field: 'purchase_price', title: __('Purchase_price'), operate:'BETWEEN'},
                        {field: 'batch_number', title: __('Batch_number'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
