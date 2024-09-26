define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'incubator/index' + location.search,
                    add_url: 'incubator/add',
                    edit_url: 'incubator/edit',
                    del_url: 'incubator/del',
                    multi_url: 'incubator/multi',
                    import_url: 'incubator/import',
                    table: 'incubator',
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
                        {field: 'id', title: __('Id')},
                        {field: 'sale_time', title: __('Sale_time'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'customer', title: __('Customer'), operate: 'LIKE'},
                        {field: 'product_code', title: __('Product_code'), operate: 'LIKE'},
                        {field: 'product_name', title: __('Product_name'), operate: 'LIKE'},
                        {field: 'specification', title: __('Specification'), operate: 'LIKE'},
                        {field: 'manufacturer', title: __('Manufacturer'), operate: 'LIKE'},
                        {field: 'unit', title: __('Unit'), operate: 'LIKE'},
                        {field: 'quantity', title: __('Quantity')},
                        {field: 'sale_price', title: __('Sale_price'), operate:'BETWEEN'},
                        {field: 'total_amount', title: __('Total_amount'), operate:'BETWEEN'},
                        {field: 'batch_number', title: __('Batch_number'), operate: 'LIKE'},
                        {field: 'expiry_date', title: __('Expiry_date'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'document_number', title: __('Document_number'), operate: 'LIKE'},
                        {field: 'supplier', title: __('Supplier'), operate: 'LIKE'},
                        {field: 'storage_time', title: __('Storage_time'), operate:'RANGE', addclass:'datetimerange', autocomplete:false},
                        {field: 'customer_branch', title: __('Customer_branch'), operate: 'LIKE'},
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
