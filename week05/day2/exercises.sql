drop table items;

drop table customers;

create table items(
	item_id int primary key,
	item_name varchar(100) not null,
	price int not null
);

insert into items
values
	(1, 'Small Desk', 100),
	(2, 'Large desk', 300),
	(3, 'Fan', 80);
	
create table customers(
	customer_id int primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null
);

insert into customers
values
	(1, 'Greg', 'Jones'),
	(2, 'Sandra', 'Jones'),
	(3, 'Scott', 'Scott'),
	(4, 'Trevor', 'Green'),
	(5, 'Melanie', 'Johnson');
	
select * from items;

select * from items
where price > 80;

select * from items
where price <= 300;

select * from customers
where last_name = 'Smith';

select * from customers
where last_name = 'Jones';

select * from customers
where not first_name = 'Scott'