
insert into tb_categoria (descricao) values ('Fixo');
insert into tb_categoria (descricao) values ('Nubank');
insert into tb_categoria (descricao) values ('Itaucard Click');
insert into tb_categoria (descricao) values ('Itaucard Uniclass');
insert into tb_categoria (descricao) values ('Will');
insert into tb_categoria (descricao) values ('Casas bahias');
insert into tb_categoria (descricao) values ('Minha conta');
insert into tb_categoria (descricao) values ('Inter');
insert into tb_categoria (descricao) values ('Gastos Débitos');

--FIXO
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Salário',   5000, FALSE, 7, '2024-10-01', 'ENTRADA', '2024-02-27');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Energia',   -195.90, FALSE, 1, '2024-10-01', 'SAIDA', '2024-02-27');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Água',      -88.19,  FALSE, 1, '2024-10-01', 'SAIDA', '2024-02-26');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Carro',     -638.02, FALSE, 1, '2024-10-01', 'SAIDA', '2024-02-25');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Internete', -359.80, FALSE, 1, '2024-10-01', 'SAIDA', '2024-02-25');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Faculdade', -262.51, FALSE, 1, '2024-10-01', 'SAIDA', '2024-02-25');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 1', -79.73,  FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-24');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 2', -51.86,  FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-23');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 3', -68.89,  FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-22');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 4', -7.93,   FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-21');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 5', -50.90,  FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-20');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 6', -39,     FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-19');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 7', -342.47, FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-18');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 8', -118,    FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-17');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Nubank 9', -100,    FALSE, 2, '2024-10-01', 'SAIDA', '2024-02-16');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 1', -135.98, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-16');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 2', -178.32, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-15');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 3', -333.25, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-14');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 4', -85.40,  FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-13');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 5', -208.31, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 6', -285.35, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 7', -100,    FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 8', -161.53, FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard 9', -80,     FALSE, 3, '2024-10-01', 'SAIDA', '2024-02-12');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Casas Bahias 1', -120.79, FALSE, 6, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Casas Bahias 2', -141.99, FALSE, 6, '2024-10-01', 'SAIDA', '2024-02-12');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Itaucard Uniclass 1', -499.99, FALSE, 4, '2024-10-01', 'SAIDA', '2024-02-12');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 1', -14.90,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 2', -14.90,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 3', -59.89,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 4', -54.29,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 5', -38.99,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 6', -135.04, FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Will 7', -79.80,  FALSE, 5, '2024-10-01', 'SAIDA', '2024-02-12');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Inter 1', -284.25, FALSE, 8, '2024-10-01', 'SAIDA', '2024-02-12');
insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Inter 2', -96.34,  FALSE, 8, '2024-10-01', 'SAIDA', '2024-02-12');

insert into tb_movimentacao (descricao, valor, pago, categoria_id, data, tipo, data_inclusao) values ('Gasto Débito',  -1685.10,  FALSE, 9, '2024-10-01', 'SAIDA', '2024-02-12');
