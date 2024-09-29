up sql
ALTER TABLE fa_incoming_stock
ADD COLUMN manufacturer VARCHAR(100) COMMENT '生产厂家'
AFTER supplier;
ALTER TABLE fa_inventory
ADD COLUMN manufacturer VARCHAR(100) COMMENT '生产厂家',
ADD COLUMN total_amount DECIMAL(12, 2) NOT NULL DEFAULT 0 COMMENT '金额';