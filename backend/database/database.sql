CREATE TABLE users(
    user_id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date,
)
CREATE TABLE user_details(
    user_details_id serial,
    user_id serial,
    university varchar(255) not null,
    degree varchar(100) not null,
    semester INT CHECK (semester >= 1 AND semester <= 8),
    PRIMARY KEY (user_details_id,user_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)
CREATE TABLE user_community_details (
    user_community_details_id serial ,
    community_id serial ,
    manager int check (manager = 0 or manager = 1),
    PRIMARY KEY (user_community_details_id,community_id),
    FOREIGN KEY (community_id) REFERENCES community(community_id)
);

CREATE TABLE community(
    community_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
)

CREATE TABLE company(
    company_id serial primary key,
    email varchar(255) not null,
    password varchar(8) not null,
    company_name varchar(255) not null,
    created_at date default current_date
)
CREATE TABLE company_details (
    company_details_id serial,
    company_id serial,
    ntn varchar(50) not null,
    founder_name varchar(255) not null,
    no_of_employees varchar(100) not null,
    no_of_offices INT not null,
    website_url varchar(255) not null,
    linkedin_url varchar(255) not null,
    PRIMARY KEY (company_details_id, company_id),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);
