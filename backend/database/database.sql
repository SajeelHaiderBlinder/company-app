-- 0 -> student 1-> community builder 2-> company
create table user (
    user_id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    type int not null check (type >= 0 AND type <= 2),
    created_at date default current_date
);

CREATE TABLE user_detail (
    user_detail_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user" (user_id),
    university VARCHAR(255) NOT NULL,
    degree VARCHAR(50) NOT NULL,
    semester INT CHECK (type >= 1 AND type <= 8),
    community_id INT REFERENCES "community" (community_id),
    introduction VARCHAR(500)
);

CREATE TABLE community(
    community_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
)
