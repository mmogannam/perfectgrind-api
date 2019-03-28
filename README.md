## How to install locally

Once you have dowloaded the files:

cd perfectgrind-api

Install packages and dependencies using npm:

npm install

Run using the following commands:

- npm start
- npm dev
- npm test

This should get the API running on port 3000.  You can use Postman or your browser to make requests to:

- GET http://localhost:3000/workorders/
- GET http://localhost:3000/workorders/[#]
- POST http://localhost:3000/workorders/

There are no environment variables setup for db connection settings. You can find these hardcoded in:
/src/db/queries.js and adjust as needed.

The tables needed are below.

## Raw SQL

These are the tables needed on your local instance of Postgres

-- Table: public.workorders

-- DROP TABLE public.workorders;

CREATE TABLE public.workorders
(
    id integer NOT NULL DEFAULT nextval('workorders_id_seq'::regclass),
    coffee_id integer NOT NULL,
    method_id integer NOT NULL,
    number_of_cases integer,
    packets_per_case integer NOT NULL,
    priority boolean NOT NULL,
    ship_date date NOT NULL,
    created date NOT NULL DEFAULT CURRENT_DATE,
    updated date,
    order_number integer NOT NULL DEFAULT nextval('order_number'::regclass),
    CONSTRAINT workorders_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)


-- DROP TABLE public.method;

CREATE TABLE public.method
(
    id integer NOT NULL DEFAULT nextval('method_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT method_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)


-- Table: public.coffee

-- DROP TABLE public.coffee;

CREATE TABLE public.coffee
(
    id integer NOT NULL DEFAULT nextval('coffee_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT coffee_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
