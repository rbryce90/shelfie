drop table if exists inventory;

create table inventory (
    id serial primary key
    , name text not null
    , price integer not null
    , image text 
);

insert into inventory (name, price, image)
values ('flute', 10, 'http://indyfluteshop.com/wp-content/uploads/2018/09/1DF0MMEXRE3G_1_1024-1024x768.jpg');
