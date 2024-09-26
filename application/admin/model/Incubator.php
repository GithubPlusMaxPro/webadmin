<?php

namespace app\admin\model;

use think\Model;


class Incubator extends Model
{

    

    

    // 表名
    protected $name = 'incubator';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'typelist_text'
    ];
    

    
    public function getTypelistList()
    {
        return ['baowenxiang' => __('Typelist baowenxiang')];
    }


    public function getTypelistTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['typelist']) ? $data['typelist'] : '');
        $list = $this->getTypelistList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
