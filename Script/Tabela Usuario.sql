create database Meu_Projeto;
use Meu_projeto;

create table usuario (
id_usuario int primary key,
email_usuario varchar(45),
senha_usuario varchar(45),
nome_usuario varchar(45)
);

select * from usuario;

insert into usuario (id_usuario, email_usuario, senha_usuario, nome_usuario) values 
('1', 'glauberssntos418@gmail.com', 'bandtec123', 'Glauber Santos');