<?php

return [
    [
        'name' => 'mode',
        'title' => '模式',
        'type' => 'radio',
        'content' => [
            'fixed' => '固定',
            'random' => '每次随机',
            'daily' => '每日切换',
        ],
        'value' => 'fixed',
        'rule' => 'required',
        'msg' => '',
        'tip' => '',
        'ok' => '',
        'extend' => '',
    ],
    [
        'name' => 'image',
        'title' => '固定背景图',
        'type' => 'image',
        'content' => [],
        'value' => '/uploads/20240926/5ec76197ba3580d002267a9230588af1.jpeg',
        'rule' => 'required',
        'msg' => '',
        'tip' => '',
        'ok' => '',
        'extend' => '',
    ],
];
