-- exercise 1

select * from items
order by price;

select * from items
where price >= 80
order by price desc;

select first_name, last_name from customers
order by first_name
limit 3;

select last_name from customers
order by last_name desc

-- exercise 2

select * from customer;

select first_name || ' ' || last_name as full_name from customer;

select distinct create_date from customer;

select * from customer
order by first_name desc;

select film_id, title, description, release_year, rental_rate from film
order by rental_rate;

select address, phone from address
where district = 'Texas';

select * from film
where film_id = 15 or film_id = 150;

select * from film
where title = 'Avatar';

select film_id, title, description, length, rental_rate from film
where title like 'Av%';

select * from film
order by replacement_cost
limit 10;

select * from film
order by replacement_cost
limit 10
offset 10;

select first_name, last_name, amount, payment_date
from customer
right join payment on customer.customer_id = payment.customer_id
order by customer.customer_id;

select * from film
where film_id not in (select film_id from inventory);

select city, country
from city
full join country on city.country_id = country.country_id;

select customer.customer_id, first_name, last_name, amount, payment_date
from customer
right join payment on payment.customer_id = customer.customer_id
order by payment.staff_id