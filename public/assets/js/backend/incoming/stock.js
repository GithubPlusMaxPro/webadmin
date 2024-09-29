define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'incoming/stock/index' + location.search,
                    add_url: 'incoming/stock/add',
                    edit_url: 'incoming/stock/edit',
                    del_url: 'incoming/stock/del',
                    multi_url: 'incoming/stock/multi',
                    import_url: 'incoming/stock/import',
                    table: 'incoming_stock',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        // {field: 'id', title: __('Id')},
                        {field: 'entry_time', title: __('Entry_time'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'product_name', title: __('Product_name'), operate: 'LIKE'},
                        {field: 'specification', title: __('Specification'), operate: 'LIKE'},
                        {field: 'unit', title: __('Unit'), operate: 'LIKE'},
                        {field: 'quantity', title: __('Quantity')},
                        {field: 'unit_price', title: __('Unit_price'), operate:'BETWEEN'},
                        {field: 'total_amount', title: __('Total_amount'), operate:'BETWEEN'},
                        {field: 'batch_number', title: __('Batch_number'), operate: 'LIKE'},
                        {field: 'expiry_date', title: __('Expiry_date'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'supplier', title: __('Supplier'), operate: 'LIKE'},
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
